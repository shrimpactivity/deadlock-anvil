import { CATEGORY_TIER_BONUSES } from "../config/tiers.config";
import { NormalCalculator } from "./normal-calc";
import { getItemByName, getItemCost } from "./utils";
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
    private readonly CONDITION_MET_FACTOR = 0.5;
    private readonly CONDITION_NOT_MET_FACTOR = 0.25;

    // Value factor for component items. Components are 'valuable' since they fill
    // the same slot, but the stats are overridden by the parents.
    private readonly COMPONENT_FACTOR = 0.5;

    // Additional value from prioritized tags
    private readonly TAG_VALUE = 0.5;

    constructor(items: Item[]) {
        this.items = items;
        this.statNormal = new NormalCalculator(items);
    }

    /**
     * Returns the sum of each stat's bonus * the stat's priority value
     */
    private calcStatsPriorityValue(stats: ItemStat[], priorities: DetailedPriorities) {
        let result = 0;
        stats.forEach((stat) => {
            const priorityValue = priorities.stats[stat.name];
            if (priorityValue) {
                const normValue = this.statNormal.calc(stat);
                result += normValue * priorityValue; // TODO: potentially square root this or something to have diminishing priority stacking
            }
        });
        return result;
    }

    private calcEffectStatsPriorityValue(
        effect: "active" | "passive",
        item: Item,
        priorities: DetailedPriorities,
    ) {
        let result = 0;
        if (item[effect]) {
            result += this.calcStatsPriorityValue(item[effect].stats, priorities);
            // TODO: potentially change how active timers affect priority
            if (item[effect].duration) {
                result *= item[effect].duration;
            }
            if (item[effect].cooldown) {
                result /= item[effect].cooldown;
            }
            if (item[effect].condition) {
                if (item[effect].condition in priorities.conditions) {
                    result *= priorities.conditions[item[effect].condition] * this.CONDITION_MET_FACTOR;
                } else {
                    result *= this.CONDITION_NOT_MET_FACTOR;
                }
            }
        }
        return result;
    }

    private calcItemBuildValue(item: Item, priorities: DetailedPriorities): number {
        let result = 0;
        result += this.calcStatsPriorityValue(item.stats, priorities);
        result += this.calcEffectStatsPriorityValue("active", item, priorities);
        result += this.calcEffectStatsPriorityValue("passive", item, priorities);

        // TODO: add item shop tier stat priorities

        // TODO: consider stacking things in calc

        // TODO: add tag priority

        // TODO: Compute value of component and add to result, maybe with a scale factor?
        // This is to account for components and parents taking up a single item slot, increasing
        // the value of the parent
        // Since parent overrides component stats, should definitely be scaled down.
        if (item.component) {
            const component = getItemByName(item.component);
        }

        return result / getItemCost(item) * 100000;
    }

    getBuildOrder({ items, priorities, mandatedItems, settings }: BuildOptions) {
        const buildValues: any[] = [];
        items.forEach(item => {
            buildValues.push({
                item,
                value: this.calcItemBuildValue(item, priorities)
            })
        });
        // const sortedItems = itemsWithBuildValues.sort((a, b) => b.buildValue! - a.buildValue!);
        // return sortedItems;
        return buildValues;
    }
}