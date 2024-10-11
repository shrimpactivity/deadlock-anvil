import { Item, ItemStat } from "../types/item";

export function underscoreToUpperCase(str: string): string {
    const words = str.split("_");
    const capitalWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalWords.join(" ");
}

export function getItemByName(items: Item[], name: string): Item | undefined {
    return items.filter(item => item.name === name)[0];
}

export function getAllItemStats(item: Item): ItemStat[] {
    const baseStats = item.stats;
    const activeStats = item.active ? item.active.stats : [];
    const passiveStats = item.passive ? item.passive.stats : [];

    return baseStats.concat(activeStats).concat(passiveStats);
}

export function getStatUnitsString(stat: ItemStat): string {
    if (!stat.units) return "none";
    return stat.units;
}