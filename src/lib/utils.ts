import { ITEMS } from "../config/items.config";
import { Item, ItemCategory, ItemStat, ItemTier } from "../types/item";
import { CATEGORY_TIER_BONUSES, TIER_COSTS } from "../config/tiers.config";

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

export function getTierBonusStat(tier: ItemTier, category: ItemCategory): ItemStat {
    const name = CATEGORY_TIER_BONUSES[category].bonusStatName;
    const amount = CATEGORY_TIER_BONUSES[category].tierBonusAmount[tier];
    const units = CATEGORY_TIER_BONUSES[category].bonusStatUnits; 
    return {
        name,
        amount,
        units,
    }
}