import { ITEMS } from "../config/items.config";
import { Item, ItemStat } from "../types/item";
import { TIER_COSTS } from "../config/tiers.config";

/**
 * Returns the item with the specified name, or undefined if it does not exist.
 */
export function getItemByName(name: string): Item {
    const filtered = ITEMS.filter((item) => item.name === name);
    if (filtered.length === 0) {
        throw new Error(`Invalid item name: ${name}`);
    }
    if (filtered.length > 1) {
        throw new Error(`Duplicate items: ${name}`);
    }
    return filtered[0];
}

/**
 * Returns a list of all innate, active, and passive effect stats.
 */
export function getAllItemStats(item: Item): ItemStat[] {
    const baseStats = item.stats;
    const activeStats = item.active ? item.active.stats : [];
    const passiveStats = item.passive ? item.passive.stats : [];

    return baseStats.concat(activeStats).concat(passiveStats);
}

/**
 * Returns the stat's unit, or "flat" if it is undefined.
 */
export function getStatUnitsString(stat: ItemStat): string {
    if (!stat.units) return "flat";
    return stat.units;
}

/**
 * Returns the total cost of the item, including any component costs.
 */
export function getItemCost(item: Item): number {
    let cost = TIER_COSTS[item.tier];
    if (item.component) {
        const component = getItemByName(item.component);
        cost += getItemCost(component);
    }
    return cost;
}
