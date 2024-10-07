import { ItemStatName } from "../types/item";

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
  }
}

export const CATEGORY_TIER_BONUSES: CategoryTierBonusConfig = {
  weapon: {
    bonusStatName: "weapon_damage",
    tierBonusAmount: { 1: 0.06, 2: 0.1, 3: 0.14, 4: 0.18 },
  },
  vitality: {
    bonusStatName: "base_health",
    tierBonusAmount: { 1: 0.11, 2: 0.14, 3: 0.17, 4: 0.2 },
  },
  spirit: {
    bonusStatName: "spirit_power",
    tierBonusAmount: { 1: 4, 2: 8, 3: 12, 4: 16 },
  },
};
