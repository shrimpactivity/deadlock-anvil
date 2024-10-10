import { Item } from "../types/item";

export function underscoreToUpperCase(str: string): string {
    const words = str.split("_");
    const capitalWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalWords.join(" ");
}

export function getItemByName(items: Item[], name: string): Item | undefined {
    return items.filter(item => item.name === name)[0];
}