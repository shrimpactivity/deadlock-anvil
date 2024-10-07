import type { Item } from "../types/item";

export const ITEMS: Item[] = [
  {
    name: "basic_magazine",
    category: "weapon",
    tier: 1,
    stats: [{ name: "ammo", amount: 0.24 }, {name: "weapon_damage", amount: 0.15}],
  },
  {
    name: "close_quarters",
    category: "weapon",
    tier: 1,
    stats: [{ name: "bullet_shield_health", amount: 85 }],
    effect: {
      passive: {
        condition: "close_range_15m",
        stats: [{ name: "weapon_damage", amount: 0.25 }],
      },
    },
  },
  {
    name: "headshot_booster",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "fire_rate", amount: 0.4 },
      { name: "bullet_shield_health", amount: 0.4 },
    ],
    effect: {
      passive: {
        condition: "headshot",
        stats: [{ name: "bonus_weapon_damage", amount: 40 }],
        cooldown: 7.5,
      },
    },
  },
];
