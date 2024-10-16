import { PriorityGroupMapping } from "../types/priority";

/**
 * A mapping of UI priority inputs to item stats, conditions, and tags.
 */
export const PRIORITY_MAPPING: PriorityGroupMapping = {
    // WEAPON
    "Weapon Damage": {
        stats: ["Weapon Damage", "Enemy Bullet Resist Reduction", "Bullet Damage Returned"],
    },
    "Fire Rate": {
        stats: ["Fire Rate"],
        conditions: ["Bullet Proc Chance"],
    },
    Ammo: { stats: ["Ammo", "Temporary Ammo"], conditions: ["Continuous Fire"] },
    "Bullet Velocity": { stats: ["Bullet Velocity"] },
    "Reload Speed": { stats: ["Reload Speed"], conditions: ["On Active Reload"] },

    // WEAPON EFFECTS / CONDITIONS
    "Multi Hit": {
        stats: ["Ricochet Damage"],
        conditions: ["Bullet Proc Chance"],
        tags: ["bullet multi-hit"],
    },
    Headshots: { conditions: ["On Headshot"] },
    "Close Range": { conditions: ["Close Range 15m", "Close Range 20m"] },
    "Long Range": {
        stats: ["Weapon Fall-off Range", "Weapon Zoom"],
        conditions: ["Long Range 15m"],
    },

    // SPIRIT
    "Spirit Damage": {
        stats: ["Spirit Power", "Spirit Damage", "Spirit Amp", "Enemy Spirit Resist Reduction"],
    },
    "Cooldown Reduction": { stats: ["Cooldown Reduction"] },
    "Ability Charges": { stats: ["Bonus Ability Charge"] },
    "Ability Range": { stats: ["Ability Range"] },
    "Ability Duration": { stats: ["Ability Duration"] },

    // SPIRIT EFFECTS / CONDITIONS
    "Spirit Burst Damage": { stats: ["Spirit Amp", "Enemy Spirit Resist Reduction"] },
    "Multi-hit & AOE": { tags: ["spirit multi-hit"] },

    // VITALITY
    Health: {
        stats: ["Bonus Health", "Max Health", "Max Health Lifesteal"],
        conditions: ["Health Above 60%"],
    },
    "Health Regen": { stats: ["Health Regen"], conditions: ["Health Above 60%"] },
    "General Healing": {
        stats: ["Healing", "Healing From NPCs"],
        conditions: ["Health Above 60%"],
    },
    "Bullet Lifesteal": { stats: ["Bullet Lifesteal"] },
    "Bullet Resist": {
        stats: ["Bullet Resist", "Enemy Fire Rate Slow"],
    },
    "Bullet Shields": {
        stats: ["Bullet Shield Health"],
        conditions: ["Bullet Shield Up"],
    },
    "Spirit Lifesteal": { stats: ["Spirit Lifesteal"] },
    "Spirit Resist": {
        stats: ["Spirit Resist"],
    },
    "Spirit Shields": {
        stats: ["Spirit Shield Health"],
        conditions: ["Spirit Shield Up"],
    },

    // MOBILITY
    "Move Speed": { stats: ["Move Speed"] },
    "Sprint Speed": { stats: ["Sprint Speed"] },
    "Stamina - Dash Jump Slide": {
        stats: ["Slide Distance", "Stamina"],
        conditions: ["On Dash Jump"],
    },
    "Mobility / Escape Tools": { tags: ["mobility"] },

    // CROWD CONTROL
    "Movement Slow": { stats: ["Enemy Movement Slow"] },
    "Reduce Enemy Damage": { stats: ["Enemy Damage Reduction"] },
    "Anti-tank": {
        stats: ["Bleed Damage", "Enemy Healing Reduction", "Max HP Lifesteal"],
        conditions: ["Enemy Health Above 50%"],
    },
    Silence: { stats: ["Enemy Silence"] },
    Stun: {},
    "Resist Crowd Control": {
        stats: ["Movement Slow Resist", "Debuff Immunity"],
        tags: ["mobility"],
    },

    // MISCELLANEOUS
    "Melee Damage": {
        stats: ["Melee Damage", "Melee Lifesteal"],
        conditions: ["On Melee Hit"],
    },
    "Heavy Melee Damage (Unga Bunga Mode)": {
        stats: ["Heavy Melee Damage", "Heavy Melee Distance", "Melee Lifesteal"],
        conditions: ["Health Below 50%", "On Heavy Melee Hit", "On Melee Hit"],
    },
    Assassinations: {
        conditions: ["On Hero Kill"],
        tags: ["hero kill"],
    },
    Stealth: {
        tags: ["stealth"],
    },
    "NPC Destroyer": {
        stats: [
            "Bullet Resist vs. NPCs",
            "Healing From NPCs",
            "Minion Fire Rate",
            "Weapon Damage vs. NPCs",
        ],
        conditions: ["Minions Near 20m"],
    },
};
