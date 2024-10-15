import { PriorityGroupMapping } from "../types/priority";

/**
 * A mapping of UI priority inputs to item stats, conditions, and tags.
 */
export const PRIORITY_MAPPING: PriorityGroupMapping = {
    // WEAPON
    "Weapon Damage": {
        stats: ["Weapon Damage", "Enemy Bullet Resist Reduction"],
        conditions: ["On Bullet Hit"]
    },
    "Fire Rate": {
        stats: ["Fire Rate"],
        conditions: ["Bullet Proc Chance"],
    },
    Ammo: { stats: ["Ammo", "Temporary Ammo"], conditions: ["Continuous Fire"] },
    "Bullet Velocity": { stats: ["Bullet Velocity"] },
    "Reload Speed": { stats: ["Reload Speed"], conditions: ["On Active Reload"] },
    
    // WEAPON EFFECTS / CONDITIONS
    "Multi Hit": { stats: ["Ricochet Damage"], conditions: ['On Bullet Hit', 'Bullet Proc Chance'], tags: ["bullet multi-hit"] },
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
    "Ability Charges": {},
    "Ability Range": {},
    "Ability Duration": {},
    
    // SPIRIT EFFECTS / CONDITIONS
    "Spirit Burst Damage": { stats: ["Spirit Amp", "Enemy Spirit Resist Reduction"] },
    "Multi-hit & AOE": {tags: ["spirit multi-hit"]},


    // VITALITY
    Health: { stats: ["Bonus Health", "Max Health"], conditions: ["Health Above 60%"] },
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
        conditions: ["Bullet Shield Up"]
    },
    "Spirit Lifesteal": { stats: ["Spirit Lifesteal"] },
    "Spirit Resist": {
        stats: ["Spirit Resist"]
    },
    "Spirit Shields": {
        stats: ["Spirit Shield Health"],
        conditions: ["Spirit Shield Up"],
    },
    "Melee Lifesteal": {},

    // MOBILITY
    "Move Speed": { stats: ["Move Speed"] },
    "Sprint Speed": { stats: ["Sprint Speed"] },
    "Stamina - Dash Jump Slide": {
        stats: ["Slide Distance", "Stamina"],
        conditions: ["On Dash Jump"],
    },
    "Mobility / Escape Tools": { tags: ["mobility"]},

    // CROWD CONTROL
    "Movement Slow": { stats: ["Enemy Movement Slow"] },
    "Anti-tank": {
        stats: ["Bleed Damage", "Healing Reduction"],
        conditions: ["Enemy Health Above 50%"],
    },
    Silence: { stats: ["Enemy Silence"] },
    Stun: {},
    "Resist Crowd Control": {tags: ["mobility"]},

    // MISCELLANEOUS
    "Melee Damage (Unga Bunga Mode)": {
        stats: ["Heavy Melee Damage", "Heavy Melee Distance"],
        conditions: ["Health Below 50%", "Heavy Melee Hit"],
    },
    Assassinations: {
        conditions: ["On Hero Kill"],
    },
    Stealth: {
        tags: ["stealth"]
    },
    "NPC Destroyer": {
        stats: [
            "Bullet Resist vs. NPCs",
            "Healing From NPCs",
            "Minion Fire Rate",
            "Weapon Damage vs. NPCs",
        ],
        conditions: [
            "Minions Near 20m"
        ]
    },
};
