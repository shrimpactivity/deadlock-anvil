import { NormalCalculator } from "./normal-calc";
import { getTierBonusStat } from "./utils";
import { Item, ItemStat } from "../types/item";
import { BuildOptions } from "../types/build";
import { DetailedPriorities } from "../types/priority";

/**
 * Handles calculating build based off of selected priorities.
 */
export class BuildCalculator {
    private items: Item[];
    private statNormal: NormalCalculator;

    // Value factor of stats associated with an un-prioritized effect condition
    private readonly CONDITIONAL_STATS_FACTOR = 0.3;
    
    private readonly STACKING_STAT_MODIFIER = 0.5;

    // Value factor for component items. Components are 'valuable' since they fill
    // the same slot, but the stats are overridden by the parents.
    private readonly COMPONENT_FACTOR = 0.4;

    // Additional value from prioritized tags
    private readonly TAG_VALUE = 0.5;

    constructor(items: Item[]) {
        this.items = this.addTierBonusStatToItems(items);
        this.statNormal = new NormalCalculator(this.items);
    }

    /**
     * Adds items' shop tier stat to it's list of innate stats (in-place).
     */
    private addTierBonusStatToItems(items: Item[]) {
        items.forEach((item) => {
            const bonusStat = getTierBonusStat(item.tier, item.category);
            const existingStat: ItemStat | undefined = item.stats.filter(
                (stat) => stat.name === bonusStat.name && stat.units === bonusStat.units,
            )[0];

            if (existingStat) {
                existingStat.amount += bonusStat.amount;
            } else {
                item.stats = [...item.stats, bonusStat];
            }
        });
        return items;
    }

    private getValueForStats(stats: ItemStat[], priorities: DetailedPriorities) {
        let result = 0;
        stats.forEach((stat) => {
            const priorityValue = priorities.stats[stat.name];
            let statValue = 0;
            if (priorityValue) {
                statValue += this.statNormal.calc(stat);
                // Include effect of stacking stat
                if (stat.stacks) {
                    statValue *= stat.stacks.max * this.STACKING_STAT_MODIFIER;
                }
                // Use sqrt to have diminishing priority returns
                statValue *= Math.sqrt(priorityValue);
                result += statValue;
            }
        });
        return result;
    }

    private getTimedFactor(cooldown: number, duration?: number) {
        if (duration) {
            return duration / cooldown;
        }
        return 1 / cooldown;
    }

    /**
     * Returns the sum of each stat's bonus * the stat's priority value as a 'build value'.
     */
    private calcStatsBuildValue(item: Item, priorities: DetailedPriorities) {
        let statsValue = 0;

        // Innate item stats
        statsValue += this.getValueForStats(item.stats, priorities); 

        // Active effect stats
        if (item.active) { 
            let activeStatsValue = this.getValueForStats(item.active.stats, priorities);
            if (item.active.condition) activeStatsValue *= this.CONDITIONAL_STATS_FACTOR;
            const { cooldown, duration } = item.active;
            activeStatsValue *= this.getTimedFactor(cooldown, duration);
            statsValue += activeStatsValue;
        }

        // Passive effect stats
        if (item.passive) {
            let passiveStatsValue = this.getValueForStats(item.passive.stats, priorities)
            if (item.passive.condition) passiveStatsValue *= this.CONDITIONAL_STATS_FACTOR;
            const { cooldown, duration } = item.passive;
            if (cooldown) {
                passiveStatsValue *= this.getTimedFactor(cooldown, duration);
            }
            statsValue += passiveStatsValue;
        }

        return statsValue;
    }

    private calcConditionsBuildValue(item: Item, priorities: DetailedPriorities) {
        let conditionsValue = 0;

        const activeCondition = item.active?.condition;
        if (activeCondition) {
            const activeConditionPriority = priorities.conditions[activeCondition];
            if (activeConditionPriority) {
                conditionsValue += Math.sqrt(activeConditionPriority);
            }

        }

        const passiveCondition = item.passive?.condition;
        if (passiveCondition) {
            const passiveConditionPriority = priorities.conditions[passiveCondition];
            if (passiveConditionPriority) {
                conditionsValue += Math.sqrt(passiveConditionPriority);
            }
        }

        return conditionsValue;
    }

    private calcTagsBuildValue(item: Item, priorities: DetailedPriorities) {
        let tagsValue = 0;
        if (item.tags) {
            item.tags.forEach(tag => {
                const tagPriority = priorities.tags[tag];
                if (tagPriority) {
                    tagsValue += Math.sqrt(tagPriority);
                }
            })
        }
        return tagsValue;
    }

    calcItemBuildValue(item: Item, priorities: DetailedPriorities): number {
        let result = 0;
        result += this.calcStatsBuildValue(item, priorities);
        result += this.calcConditionsBuildValue(item, priorities);
        result += this.calcTagsBuildValue(item, priorities);
        //result += this.calcComponentBuildValue(item, priorities);

        // TODO: add item shop tier stat priorities

        // TODO: consider stacking things in calc

        // TODO: add tag priority

        // TODO: Compute value of component and add to result, maybe with a scale factor?
        // This is to account for components and parents taking up a single item slot, increasing
        // the value of the parent
        // Since parent overrides component stats, should definitely be scaled down.
        // if (item.component) {
        //     const component = getItemByName(item.component);
        //     const value = this.calcItemBuildValue(component, priorities);
        //     result += value * this.COMPONENT_FACTOR;
        // }

        //result *= 10000 / getItemCost(item);
        return result;
    }

    /**
     * Calculates a build order as a list of items.
     * Considers the stats 'build value' based on priorities, as well as
     * item costs and other arguments.
     */
    getBuildOrder({ items, priorities, mandatedItems, settings }: BuildOptions) {
        const buildValues = items.map((item) => ({
            item,
            value: this.calcItemBuildValue(item, priorities),
        }));
        // const sortedItems = itemsWithBuildValues.sort((a, b) => b.buildValue! - a.buildValue!);
        // return sortedItems;
        return buildValues.filter((x) => x.value !== 0);
    }
}
