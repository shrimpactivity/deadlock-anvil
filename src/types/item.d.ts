export type ItemStatName = "weapon_damage" | "ammo" | "bullet_shield_health" | "weapon_damage_close_range";

export type ItemCategory = "weapon" | "vitality" | "spirit";

export type ItemCondition = "close_range" | "long_range" | "damage_over_time" | "sustain_damage"

export type ItemTier = "1" | "2" | "3" | "4";

export interface Item {
  name: string;
  category: ItemCategory;
  conditions: ItemCondition[];
  tier: ItemTier;
  prerequisite?: string;
  passive: {
    stats: Partial<{ [key in ItemStatName]: number }>;
    cooldown?: number;
    duration?: number;
  }
  active?: {
    stats: Partial<{ [key in ItemStatName]: number }>;
    cooldown: number;
    duration: number;
  }
}

export interface Stat {
  name: ItemStatName;
  amount: number;
}