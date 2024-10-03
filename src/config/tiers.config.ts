export const TIER_COSTS = {
  1: 500,
  2: 1250,
  3: 3000,
  4: 6200,
};

export const TIER_BONUSES = {
    weapon: {
        stat: "weapon_damage",
        bonuses: [0.06, 0.1, 0.14, 0.18]
    },
    vitality: {
      stat: "base_health",
      bonuses: [0.11, 0.14, 0.17, 0.2]
    },
    spirit: {
      stat: "spirit_power",
      bonuses: [4, 8, 12, 16]
    }
}
