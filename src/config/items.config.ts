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
    name: "restorative_shot",//TODO: consider NPC hit is different - heals for 15, not 40
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
    name: "berserker", //TODO: this one has stacks. Unsure how we want to handle (+5% weapon damage per stack, 100 damage taken to stack, Max Stacks 10, 10s duration)
    category: "weapon",
    tier: 2,
    stats: [
      { name: "ammo", amount: 4, type: "flat" },
      { name: "bullet_resist", amount: 0.7, type: "percentage" },
    ],
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
      stats: [ //TODO: consider free dash jump?
        {name: "fire_rate", amount: 0.2, type: "percentage"},
        {name: "temporary_ammo", amount: 5, type: "flat"}],
     /* stats: [
        { name: "dash_jump", amount: 0, type: "flat" }, //TODO: it makes your next dash jump free, so I'm wondering if it makes sense for this modifier to be for stamina? I'm not sure how we want to remove the cost of something
        { name: "fire_rate", amount: 0.2, type: "percentage" },
        { name: "temporary_ammo", amount: 5, type: "flat" },
      ],*/
      duration: 7,
      cooldown: 10.5,
    },
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
    }
      //TODO: there's an additional either/or passive. You either instantly reload or get up to 100% bonus ammo
      /*condition: "heavy_melee",
      stats: [
        { name: "bonus_heavy_melee_damage", amount: 0.2, type: "percentage" },
      ],
      cooldown: 10,*/
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
    name: "fleetfoot",//TODO: this also has a passive that removes the movement speed penalty while shooting
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
    }
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
    name: "escalating_resilience", //TODO: consider bullet resist stacks (40% max, 2% bullet resist per stack, 20s stack duration)
    category: "weapon",
    tier: 3,
    stats: [
      { name: "fire_rate", amount: 0.12, type: "percentage"},
      { name: "weapon_damage", amount: 0.14, type: "percentage"}
    ]
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
      duration: 3 //TODO: duration is only relevant for the increased movement speed
    }
  },
];
