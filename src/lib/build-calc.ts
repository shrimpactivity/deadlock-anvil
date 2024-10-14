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
    private readonly CONDITION_MET_FACTOR = 0.6;
    private readonly CONDITION_NOT_MET_FACTOR = 0.25;

    // Value factor for component items. Components are 'valuable' since they fill
    // the same slot, but the stats are overridden by the parents.
    private readonly COMPONENT_FACTOR = 0.5;

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

    /**
     * Returns the sum of each stat's bonus * the stat's priority value as a 'build value'.
     */
    private calcStatsBuildValue(stats: ItemStat[], priorities: DetailedPriorities) {
        let result = 0;
        stats.forEach((stat) => {
            const priorityValue = priorities.stats[stat.name];
            if (priorityValue) {
                const normValue = this.statNormal.calc(stat);
                result += normValue * Math.sqrt(priorityValue); // TODO: potentially square root this or something to have diminishing priority stacking
            }
        });
        return result;
    }

    // FIXME: fix bullet hit being double counted with weapon damage

    /**
     * Returns either the active or passive effect stats 'build value' for an item.
     */
    private calcEffectStatsBuildValue(
        effect: "active" | "passive",
        item: Item,
        priorities: DetailedPriorities,
    ) {
        let result = 0;
        if (item[effect]) {
            // Start with the effect stats' value.
            result += this.calcStatsBuildValue(item[effect].stats, priorities);

            // Effects with a cooldown / duration don't have 100% uptime, so we decrease the value a bit.
            // Current function is sqrt(duration / cooldown).
            if (item[effect].cooldown) {
                let timedFactor = 1;
                timedFactor /= item[effect].cooldown;
                if (item[effect].duration) {
                    // Only include duration in calc if there's a cooldown.
                    timedFactor *= item[effect].duration;
                }
                result *= Math.sqrt(timedFactor);
            }

            if (item[effect].condition) {
                const conditionPriority = priorities.conditions[item[effect].condition] + 1;
                console.log(item[effect].condition, conditionPriority);
                result += Math.sqrt(conditionPriority) * this.CONDITION_MET_FACTOR;
                // if (conditionPriority) {
                //     result *= Math.sqrt(conditionPriority) * this.CONDITION_MET_FACTOR;
                // } else {
                //     // Item does not have prioritized condition
                //     result *= this.CONDITION_NOT_MET_FACTOR;
                // }
            }
        }
        return result;
    }

    private calcItemBuildValue(item: Item, priorities: DetailedPriorities): number {
        let result = 0;
        result += this.calcStatsBuildValue(item.stats, priorities);
        result += this.calcEffectStatsBuildValue("active", item, priorities);
        result += this.calcEffectStatsBuildValue("passive", item, priorities);

        if (item.tags) {
            item.tags.forEach((tag) => {
                const tagPriority = priorities.tags[tag];
                if (tagPriority) {
                    result += Math.sqrt(tagPriority);
                }
            });
        }

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
