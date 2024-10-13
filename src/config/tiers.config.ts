import { ItemStatName, ItemStatUnits } from "../types/item";

export const TIER_COSTS = {
    1: 500,
    2: 1250,
    3: 3000,
    4: 6200,
};

interface CategoryTierBonusConfig {
    [key: string]: {
        bonusStatName: ItemStatName;
        tierBonusAmount: Record<number, number>;
        bonusStatUnits?: ItemStatUnits;
    };
}

export const CATEGORY_TIER_BONUSES: CategoryTierBonusConfig = {
    weapon: {
        bonusStatName: "Weapon Damage",
        tierBonusAmount: { 1: 6, 2: 10, 3: 14, 4: 18 },
        bonusStatUnits: "%"
    },
    vitality: {
        bonusStatName: "Bonus Health",
        tierBonusAmount: { 1: 11, 2: 14, 3: 17, 4: 20 },
        bonusStatUnits: "%"
    },
    spirit: {
        bonusStatName: "Spirit Power",
        tierBonusAmount: { 1: 4, 2: 8, 3: 12, 4: 16 },
    },
};
