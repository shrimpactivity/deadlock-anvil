export interface Item {
  name: string;
  category: ItemCategory;
  tier: ItemTier;
  component?: string;
  stats: ItemStat[];
  effect?: {
    passive?: {
      condition: ItemCondition;
      stats: ItemStat[];
      cooldown?: number;
      duration?: number;
    };
    active?: {
      stats: ItemStat[];
      cooldown: number;
      duration?: number;
    };
  };
}

export type ItemTier = 1 | 2 | 3 | 4;

export type ItemCategory = "weapon" | "vitality" | "spirit";

export interface ItemStat {
  name: ItemStatName;
  amount: number;
  type?: "percentage" | "flat";
}

export type ItemStatName =
  | "ammo"
  | "bleed_damage"
  | "bonus_health"
  | "bonus_spirit_damage"
  | "bonus_weapon_damage"
  | "bullet_heal"
  | "bullet_lifesteal"
  | "bullet_shield_health"
  | "bullet_velocity"
  | "bullet_resist_vs_npcs"
  | "bullet_resist"
  | "fire_rate"
  | "fire_rate_slow"
  | "healing_reduction"
  | "health_regen"
  | "heavy_melee_distance"
  | "movement_slow"
  | "movement_speed"
  | "reduce_enemy_bullet_resist"
  | "reload_time"
  | "shock_damage"
  | "shock_change"
  | "slide_distance"
  | "spirit_amp"
  | "spirit_lifesteal"
  | "spirit_power"
  | "spirit_resist"
  | "spirit_shield_health"
  | "sprint_speed"
  | "temporary_ammo"
  | "weapon_damage"
  | "weapon_damage_vs_npcs"
  | "weapon_falloff_range"
  | "weapon_zoom";

export type ItemConditionName =
  | "active_reload"
  | "close_range_15m"
  | "damage_over_time"
  | "enemy_health_above_50%"
  | "headshot"
  | "health_above_60%"
  | "long_range_15m"
  | "sustain_damage_from_enemies"
  | "stacking";
