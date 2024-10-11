import { Item, ItemStatName } from "../types/item";
import { CATEGORY_TIER_BONUSES } from "../config/tiers.config";
import { NormalCalculator } from "./normal-calc";
import { BuildOptions } from "../types/build";
import { DetailedPriorities } from "../types/priority";
import { getItemByName } from "./utils";

/**
 * Handles calculating build based off of selected priorities.
 */
export class BuildCalculator {
    private items: Item[];
    private statNormal: NormalCalculator;

    // Value factor of stats associated with an un-prioritized effect condition
    private readonly CONDITION_NOT_MET_FACTOR = 0.5;

    // Additional value from prioritized tags
    private readonly TAG_VALUE = 0.5;

    constructor(items: Item[]) {
        this.items = items;
        this.statNormal = new NormalCalculator(items);
    }

    /**
     * Calculate the 'average' contribution of a stat based on its cooldown and duration
     */
    private averageTimedStat(statAmount: number, cooldown?: number, duration?: number) {
        let result = statAmount;
        if (cooldown) {
            result = result / cooldown;
        }
        if (duration) {
            result = result * duration;
        }
        return result;
    }

    /**
     * Calculate the priority contribution from an item's innate, passive effect, and active effect stats.
     */
    private calculateItemStatPriority(item: Item, priority: Record<string, number>): number {
        let result = 0;

        // Contribution from base item stats
        item.stats.forEach((stat) => {
            if (priority[stat.name]) {
                result += stat.amount * priority[stat.name]!;
            }
        });

        // Contribution from item tier bonus.
        const tier = CATEGORY_TIER_BONUSES[item.category];
        if (priority[tier.bonusStatName]) {
            result += tier.tierBonusAmount[item.tier] * priority[tier.bonusStatName]!;
        }

        // Contribution from passive effect
        const passive = item.passive;
        if (passive) {
            passive.stats.forEach((stat) => {
                if (priority[stat.name]) {
                    const statContribution = this.averageTimedStat(
                        stat.amount,
                        passive.cooldown,
                        passive.duration,
                    );
                    result += statContribution * priority[stat.name]!;
                }
            });
        }

        // Contribution from active effect
        const active = item.active;
        if (active) {
            active.stats.forEach((stat) => {
                if (priority[stat.name]) {
                    const statContribution = this.averageTimedStat(
                        stat.amount,
                        active.cooldown,
                        active.duration,
                    );
                    result += statContribution * priority[stat.name]!;
                }
            });
        }

        return result;
    }

    /**
     * Calculate priority contribution from an item's effect conditions.
     */
    private calculateItemConditionPriority(item: Item, priority: Record<string, number>) {
        let result = 0;

        const passiveCondition = item.passive?.condition;
        if (passiveCondition && priority[passiveCondition]) {
            result += priority[passiveCondition];
        }

        const activeCondition = item.active?.condition;
        if (activeCondition && priority[activeCondition]) {
            result += priority[activeCondition];
        }

        return result;
    }

    private calculateItemBuildValue(
        item: Item,
        statPriority: Record<string, number>,
        conditionPriority: Record<string, number>,
    ) {
        const statContribution = this.calculateItemStatPriority(item, statPriority);
        const conditionContribution = this.calculateItemConditionPriority(item, conditionPriority);

        return statContribution + conditionContribution;
    }

    private addPriorityValueToItems(
        statPriority: Record<string, number>,
        conditionPriority: Record<string, number>,
    ) {
        this.items.forEach((item) => {
            item.buildValue = this.calculateItemBuildValue(item, statPriority, conditionPriority);
        });
    }
    /*


*/
    private getItemBuildValue(item: Item, priorities: DetailedPriorities) {
        let result = 0;
        item.stats.forEach((stat) => {
            const priorityValue = priorities.stats[stat.name];
            if (priorityValue) {
                const normValue = this.statNormal.calc(stat);
                result += normValue * priorityValue; // TODO: potentially square root this or something to have diminishing priority stacking
            }
        });

        if (item.component) {
            const component = getItemByName(item.component);
        }
    }

    getBuildOrder({ priorities, mandatedItems, settings }: BuildOptions) {
        // const buildValues = generateBuildValues();
        // const sortedItems = itemsWithBuildValues.sort((a, b) => b.buildValue! - a.buildValue!);
        // return sortedItems;
        return [];
    }
}
