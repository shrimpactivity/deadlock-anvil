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
    effect: {
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
    effect: {
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
      {name: "bullet_shield_health", amount: 50, type: "flat"}
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
    effect: {
      condition: "health_above_60%",
      stats: [{ name: "bonus_weapon_damage", amount: 0.22, type: "percentage" }],
    },
  },
  {
    name: "monster_rounds",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "weapon_damage_vs_npcs", amount: 0.35, type: "percentage" },
      { name: "bullet_resist_vs_npcs", amount: 0.3, type: "percentage" },
      {name: "bonus_health", amount: 50, type: "flat"},
      {name: "health_regen", amount: 1, type: "flat"}
    ]
  },
  {
    name: "rapid_rounds",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "fire_rate", amount: 0.09, type: "percentage" },
      { name: "sprint_speed", amount: 1, type: "flat" },
    ]
  },
  {
    name: "restorative_shot",
    category: "weapon",
    tier: 1,
    stats: [
      { name: "bullet_resist", amount: .07, type: "percentage" },
      { name: "weapon_damage", amount: .08, type: "percentage" },
    ],
    effect: {
      condition: "hit_hero",
      stats: [{ name: "healing", amount: 40, type: "flat" }],
      cooldown: 5.5
    },
    //effect: { TODO: //this one's weird because it has an either/or effect. If you hit a hero, you heal 40, if you hit a NPC you heal 15. Should this be 2 properties, or is there a way to add an If/Then?
    //  condition: "hit_npc",
    //  stats: [{name: "healing", amount: 15, type: "flat"}]
    //  cooldown: 5.5
    //}
  },
  {
    name: "active_reload",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "reload_time", amount: -0.2, type: "percentage" },// TODO: making sure it's clear that this is a negative percentage
      { name: "weapon_damage", amount: 0.1, type: "percentage" },
    ],
    effect: {
      condition: "active_reload",
      stats: [{ name: "fire_rate", amount: 0.2, type: "percentage" },
        {name: "bullet_lifesteal", amount: 0.2, type: "percentage"}
      ],
      duration: 7,
      cooldown: 18
    },
  },
  {
    name: "berserker", //TODO: this one has stacks. Unsure how we want to handle (+5% weapon damage per stack, 100 damage taken to stack, Max Stacks 10, 10s duration)
    category: "weapon",
    tier: 2,
    stats: [
      { name: "ammo", amount: 4, type: "flat" },
      { name: "bullet_resist", amount: 0.7, type: "percentage" },
    ]
  },
  {
    name: "kinetic_dash",
    category: "weapon",
    tier: 2,
    stats: [
      { name: "bonus_health", amount: 100, type: "flat" },
      { name: "health_regen", amount: 1.5, type: "flat" },
    ],
    effect: {
      condition: "kinetic_dash",
      stats: [{name: "dash_jump", amount: 0, type: "flat"}, //TODO: it makes your next dash jump free, so I'm wondering if it makes sense for this modifier to be for stamina? I'm not sure how we want to remove the cost of something
        {name: "fire_rate", amount: 0.2, type: "percentage"},
        {name: "temporary_ammo", amount: 5, type: "flat"}
      ],
      duration: 7,
      cooldown: 10.5
    }
  },
  {
    name: "long_range", 
    category: "weapon",
    tier: 2,
    stats: [
      { name: "ammo", amount: 0.2, type: "percentage" },
      { name: "bullet_shield_health", amount: 140, type: "flat" },
    ],
    effect: {
      condition: "long_range_15m",
      stats: [{name: "weapon_damage", amount: 0.4, type: "percentage"}]
    }
  },
  {
    name: "melee_charge", 
    category: "weapon",
    tier: 2,
    stats: [
      { name: "weapon_damage", amount: 0.15, type: "percentage" },
      { name: "bonus_health", amount: 100, type: "flat" },
      { name: "health_regen", amount: 1, type: "flat"},
      { name: "heavy_melee_distance", amount: 0.4, type: "percentage"}
    ],
    effect: { //TODO: there's an additional either/or effect. You either instantly reload or get up to 100% bonus ammo
      condition: "heavy_melee",
      stats: [{ name: "bonus_heavy_melee_damage", amount: 0.2, type: "percentage"}],
      cooldown: 10 
    }
  },
];
