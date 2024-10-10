import type { Item } from "../types/item";

export const ITEMS: Item[] = [
  {
    name: "basic_magazine",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "ammo", amount: 0.24, type: "percentage" },
      { name: "weapon_damage", amount: 0.15, type: "percentage" },
    ],
  },
  {
    name: "close_quarters",
    category: "weapon",
    tier: 1,
    stats: [{ name: "bullet_shield_health", amount: 85, type: "flat" }],
    passive: {
      condition: "close_range_15m",
      stats: [{ name: "weapon_damage", amount: 0.25, type: "percentage" }],
    },
  },
  {
    name: "headshot_booster",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "fire_rate", amount: 0.04, type: "percentage" },
      { name: "bullet_shield_health", amount: 40, type: "flat" },
    ],
    passive: {
      condition: "headshot",
      stats: [{ name: "bonus_weapon_damage", amount: 40, type: "flat" }],
      cooldown: 7.5,
    },
  },
  {
    name: "high_velocity_mag",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "bullet_velocity", amount: 0.25, type: "percentage" },
      { name: "weapon_damage", amount: 0.12, type: "percentage" },
      { name: "bullet_shield_health", amount: 50, type: "flat" },
    ],
  },
  {
    name: "hollow_point_ward",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "spirit_shield_health", amount: 95, type: "flat" },
      { name: "spirit_power", amount: 4, type: "flat" },
    ],
    passive: {
      condition: "health_above_60%",
      stats: [
        { name: "bonus_weapon_damage", amount: 0.22, type: "percentage" },
      ],
    },
  },
  {
    name: "monster_rounds",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "weapon_damage_vs_npcs", amount: 0.35, type: "percentage" },
      { name: "bullet_resist_vs_npcs", amount: 0.3, type: "percentage" },
      { name: "bonus_health", amount: 50, type: "flat" },
      { name: "health_regen", amount: 1, type: "flat" },
    ],
  },
  {
    name: "rapid_rounds",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "fire_rate", amount: 0.09, type: "percentage" },
      { name: "sprint_speed", amount: 1, type: "flat" },
    ],
  },
  {
    name: "restorative_shot",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "bullet_resist", amount: 0.07, type: "percentage" },
      { name: "weapon_damage", amount: 0.08, type: "percentage" },
    ],
    passive: {
      condition: "hit_hero",
      stats: [{ name: "healing", amount: 40, type: "flat" }],
      cooldown: 5.5,
    },
    additionalInfo: "If you hit an NPC, it heals for 15. If you hit a hero, it heals for 40."
  },
  {
    name: "active_reload",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "reload_time", amount: -0.2, type: "percentage" },
      { name: "weapon_damage", amount: 0.1, type: "percentage" },
    ],
    passive: {
      condition: "active_reload",
      stats: [
        { name: "fire_rate", amount: 0.2, type: "percentage" },
        { name: "bullet_lifesteal", amount: 0.2, type: "percentage" },
      ],
      duration: 7,
      cooldown: 18,
    },
  },
  {
    name: "berserker",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "ammo", amount: 4, type: "flat" },
      { name: "bullet_resist", amount: 0.7, type: "percentage" },
    ],
    additionalInfo: "Includes stacking: +5% weapon damage per stack, 100 damage taken to stack, Max Stacks 10, 10s duration."
  },
  {
    name: "kinetic_dash",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "bonus_health", amount: 100, type: "flat" },
      { name: "health_regen", amount: 1.5, type: "flat" },
    ],
    passive: {
      condition: "kinetic_dash",
      stats: [
        {name: "fire_rate", amount: 0.2, type: "percentage"},
        {name: "temporary_ammo", amount: 5, type: "flat"}],
      duration: 7,
      cooldown: 10.5,
    },
    additionalInfo: "The passive condition also makes your next dash jump free"
  },
  {
    name: "long_range",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "ammo", amount: 0.2, type: "percentage" },
      { name: "bullet_shield_health", amount: 140, type: "flat" },
    ],
    passive: {
      condition: "long_range_15m",
      stats: [{ name: "weapon_damage", amount: 0.4, type: "percentage" }],
    },
  },
  {
    name: "melee_charge",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "weapon_damage", amount: 0.15, type: "percentage" },
      { name: "bonus_health", amount: 100, type: "flat" },
      { name: "health_regen", amount: 1, type: "flat" },
      { name: "heavy_melee_distance", amount: 0.4, type: "percentage" },
    ],
    passive: {
      condition: "heavy_melee",
      stats: [{ name: "bonus_heavy_melee_damage", amount: 0.2, type: "percentage"}, {name: "bonus_ammo", amount: 1, type: "percentage"}],
      cooldown: 10 
    },
    additionalInfo: "An additional passive effect is that you either instantly reload or get up to 100% free bonus ammo"
    },
  {
    name: "mystic_shot",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "weapon_damage", amount: 0.12, type: "percentage"},
      { name: "spirit_power", amount: 4, type: "flat"}
    ],
    passive: {
      condition: "next_bullet", 
      stats: [{name:"bonus_spirit_damage", amount: 60, type: "flat"}],
      cooldown: 5.2
    }
  },
  {
    name: "slowing_bullets",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "weapon_damage", amount: 0.16, type: "percentage"},
      { name: "spirit_power", amount: 5, type: "flat"}
    ],
    passive: {
      condition: "hit_hero", 
      stats: [{name:"movement_slow", amount: 0.25, type: "percentage"}],
      duration: 1.3
    }
  },
  {
    name: "soul_shredder_bullets",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "weapon_damage", amount: 0.07, type: "percentage"}
    ],
    passive: {
      condition: "hit_hero", 
      stats: [{name:"spirit_amp", amount: 0.1, type: "percentage"},
        {name: "spirit_lifesteal", amount: 0.2, type: "percentage"}
      ],
      duration: 6
    }
  },
  {
    name: "swift_striker",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "fire_rate", amount: 0.22, type: "percentage"},
      { name: "ammo", amount: 0.1, type: "percentage"},
      { name: "bullet_resist", amount: -0.05, type: "percentage"}
    ],
  },
  {
    name: "fleetfoot",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "bonus_health", amount: 90, type: "flat"},
      { name: "slide_distance", amount: 0.25, type: "percentage"}
    ],
    active: {
      stats: [{name: "movement_speed", amount: 3, type: "flat"},
        {name: "temporary_ammo", amount: 0.3, type: "percentage"}
      ],
      cooldown: 19,
      duration: 4
    },
    additionalInfo: "This also has a passive that removes the movement speed penalty while shooting."
  },
  {
    name: "burst_fire",
    category: "weapon",
    tier: 3,
    stats: [
      { name: "bonus_health", amount: 70, type: "flat"},
      { name: "slide_distance", amount: 0.5, type: "percentage"},
      { name: "fire_rate", amount: 0.12, type: "percentage"}
    ],
    passive: {
      condition: "hit_hero",
      stats: [{name: "movement_speed", amount: 2, type: "flat"},
        {name: "fire_rate", amount: 0.3, type: "percentage"}
      ],
      cooldown: 8.5,
      duration: 4
    }
  },
  {
    name: "escalating_resilience",
    category: "weapon",
    tier: 3,
    stats: [
      { name: "fire_rate", amount: 0.12, type: "percentage"},
      { name: "weapon_damage", amount: 0.14, type: "percentage"}
    ],
    additionalInfo: "This also has stacks of bullet resist: 40% max, 2% bullet resist per stack, 20s stack duration"
  },
  {
    name: "headhunter",
    category: "weapon",
    tier: 3,
    component: "headshot_booster",
    stats: [
      { name: "weapon_damage", amount: 0.15, type: "percentage"},
      { name: "bullet_shield_health", amount: 150, type: "flat"},
      { name: "fire_rate", amount: 0.05, type: "percentage"}
    ],
    passive: {
      condition: "headshot",
      stats: [
        {name: "bonus_weapon_damage", amount: 140, type: "flat"},
        {name: "healing", amount: 0.08, type: "percentage"},
        {name: "movement_speed", amount: 2, type: "flat"}
      ],
      cooldown: 6,
      duration: 3 
    },
    additionalInfo: "Note: the duration is only relevant for the increased movement speed."
  },
  {
    name: "hunters_aura",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "bonus_health", amount: 150, type: "percentage"}
    ],
    passive: {
      condition: "radius",
      stats: [
        {name: "reduce_enemy_bullet_resist", amount: -0.09, type: "percentage"},
        {name: "reduce_enemy_fire_rate", amount: -0.1, type: "percentage"}
      ]
    }
  },
  {
    name: "intensifying_magazine",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "ammo", amount: 0.25, type: "percentage"},
      {name: "weapon_damage", amount: 0.2, type: "percentage"}
    ],
    passive: {
      condition: "continuous_fire",
      stats: [
        {name: "max_weapon_damage", amount: 0.6, type: "percentage"}
      ],
      duration: 3
    }
  },
  {
    name: "point_blank",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "bullet_resist", amount: 0.15, type: "percentage"},
      {name: "stamina", amount: 1, type: "flat"}
    ],
    passive: {
      condition: "close_range_15m",
      stats: [
        {name: "weapon_damage", amount: 0.45, type: "percentage"},
        {name: "movement_slow", amount: 0.25, type: "percentage"}
      ],
      duration: 2
    }
  },
  {
    name: "pristine_emblem",
    category: "weapon",
    tier: 3,
    component: "high_velocity_mag",
    stats: [
      {name: "bullet_velocity", amount: 0.35, type: "percentage"},
      {name: "weapon_damage", amount: 0.25, type: "percentage"},
      {name: "spirit_power", amount: 12, type: "flat"},
      {name: "spirit_resist", amount: 0.12, type: "percentage"}
    ],
    passive: {
      condition: "enemy_health_above_50%",
      stats: [
        {name: "weapon_damage", amount: 0.25, type: "percentage"}
      ]
    }
  },
  {
    name: "sharpshooter",
    category: "weapon",
    tier: 3,
    component: "long_range",
    stats: [
      {name: "ammo", amount: 0.2, type: "percentage"},
      {name: "weapon_falloff_range", amount: 0.15, type: "percentage"},
      {name: "weapon_zoom", amount: 0.35, type: "percentage"},
      {name: "bullet_shield_health", amount: 200, type: "flat"}
    ],
    passive: {
      condition: "long_range_15m",
      stats: [
        {name: "weapon_damage", amount: 0.7, type: "percentage"}
      ]
    }
  },
  {
    name: "tesla_bullets",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "fire_rate", amount: 0.14, type: "percentage"}
    ],
    additionalInfo: "Your bullets have a chance to shock your target. The shock will jump to a nearby enemy. 30 shock damage, 60 damage on jump, 25% proc chance, 8m jump radius, 2 max jumps"
  },
  {
    name: "titanic_magazine",
    category: "weapon",
    tier: 3,
    component: "basic_magazine",
    stats: [
      {name: "ammo", amount: 1.2, type: "percentage"},
      {name: "weapon_damage", amount: 0.18, type: "percentage"},
      {name: "bullet_resist", amount: 0.18, type: "percentage"}
    ]
  },
  {
    name: "toxic_bullets",
    category: "weapon",
    tier: 3, 
    stats: [
      {name: "bonus_health", amount: 100, type: "flat"}
    ],
    passive: {
      condition: "hit_hero",
      stats: [
        {name: "bleed_damage", amount: 0.05, type: "percentage"},
        {name: "healing_reduction", amount: -0.65, type: "percentage"}
      ],
      duration: 3
    },
    additionalInfo: "Bleed builds up at 0.8% per shot"
  },
  {
    name: "alchemical_fire",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "bullet_shield_health", amount: 225, type: "flat"},
      {name: "weapon_damage", amount: 0.14, type: "percentage"},
      {name: "spirit_power", amount: 11, type: "flat"},
    ],
    active: {
      condition: "radius",
      stats: [
        {name: "spirit_dps", amount: 45, type: "flat"},
        {name: "weapon_damage", amount: 0.5, type: "percentage"}
      ],
      duration: 5,
      cooldown: 28
    },
    additionalInfo: "Max Spirit DPS is 95"
  },
  {
    name: "heroic_aura",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "bullet_lifesteal", amount: 0.2, type: "percentage"},
      {name: "bonus_health", amount: 150, type: "flat"},
      {name: "movement_speed", amount: 1, type: "flat"}
    ],
    passive: {
      condition: "minions_nearby_20m",
      stats: [
        {name: "minion_fire_rate", amount: 0.4, type: "percentage"}
      ]
    },
    active: {
      condition: "radius",
      stats: [
        {name: "movement_speed", amount: 2, type: "flat"},
        {name: "fire_rate", amount: 0.25, type: "percentage"}
      ],
      duration: 6,
      cooldown: 32
    }
  },
  {
    name: "warp_stone",
    category: "weapon",
    tier: 3,
    stats: [
      {name: "weapon_damage", amount: 0.2, type: "percentage"},
      {name: "spirit_power", amount: 8, type: "flat"}
    ],
    active: {
      condition: "teleport_11m",
      stats: [
        {name: "bullet_resist", amount: 0.3, type: "percentage"}
      ],
      duration: 5,
      cooldown: 16
    }
  }
];
