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
        conditions: ["Bullet Proc Chance", "Bullet Hit Buildup"],
    },
    Ammo: { stats: ["Ammo", "Temporary Ammo"], conditions: ["Continuous Fire"] },
    "Bullet Velocity": { stats: ["Bullet Velocity"] },
    "Reload Speed": { stats: ["Reload Speed"], conditions: ["On Active Reload"] },

    // WEAPON EFFECTS / CONDITIONS
    "Weapon Multi Hit": {
        stats: ["Ricochet Damage"],
        conditions: ["Bullet Proc Chance"],
        tags: ["bullet multi-hit"],
    },
    Headshots: { conditions: ["On Headshot"] },
    "Close Range": { conditions: ["Close Range 9m", "Close Range 15m", "Close Range 20m"] },
    "Long Range": {
        stats: ["Weapon Fall-off Range", "Weapon Zoom"],
        conditions: ["Long Range 15m"],
    },

    // SPIRIT
    "Spirit Damage": {
        stats: ["Spirit Power", "Spirit Damage", "Spirit Amp", "Enemy Spirit Resist Reduction"],
    },
    "Spirit Burst Damage": {
        stats: ["Spirit Amp", "Enemy Spirit Resist Reduction", "Max Health Spirit Damage"],
        conditions: ["Spirit Burst Damage 125+", "Spirit Burst Damage 80+"],
    },
    "Cooldown Reduction": { stats: ["Cooldown Reduction"] },
    "Ability Charges": {
        stats: ["Bonus Ability Charge", "Charge Cooldown Reduction", "Charge Time Reduction"],
    },
    "Ability Range": { stats: ["Ability Range"] },
    "Ability Duration": { stats: ["Ability Duration"] },
    "Imbue Ability": { conditions: ["On Imbued Ability"] },
    AOE: { tags: ["spirit multi-hit"] },

    // VITALITY
    Health: {
        stats: ["Bonus Health", "Max Health", "Max Health Lifesteal"],
        conditions: ["Health Above 60%", "Health Above 75%"],
    },
    // Healing
    "Health Regen": {
        stats: ["Health Regen"],
        conditions: ["Health Above 60%", "Health Above 75%"],
    },
    "Healing Tools": {
        stats: ["Healing", "Healing From NPCs"],
        conditions: ["Health Above 60%", "Health Above 75%"],
    },
    "Amplify Healing": {
        stats: ["Healing Amp", "Healing Reduction Resistance"],
    },
    "Bullet Lifesteal": { stats: ["Bullet Lifesteal"] },
    "Spirit Lifesteal": { stats: ["Spirit Lifesteal"] },
    // Survivability
    "Bullet Resist": {
        stats: [
            "Bullet Resist",
            "Enemy Fire Rate Slow",
            "Bullet Immunity",
            "Bullet Damage Returned",
        ],
        conditions: ["Sustained Damage"],
    },
    "Bullet Shields": {
        stats: ["Bullet Shield Health"],
        conditions: ["Bullet Shield Up"],
    },
    "Spirit Resist": {
        stats: ["Spirit Resist", "Spirit Damage Returned"],
        conditions: ["Sustained Damage"],
    },
    "Spirit Shields": {
        stats: ["Spirit Shield Health"],
        conditions: ["Spirit Shield Up"],
    },

    // MOBILITY
    "Move Speed": { stats: ["Move Speed"] },
    "Sprint Speed": { stats: ["Sprint Speed"] },
    "Stamina - Dash Jump Slide": {
        stats: ["Slide Distance", "Stamina", "Stamina Recovery", "Dash Jump Distance"],
        conditions: ["On Dash Jump"],
    },
    "Initiation / Escape Tools": { tags: ["mobility"] },

    // CROWD CONTROL
    "Movement Slow": { stats: ["Enemy Movement Slow", "Enemy Movement Silence"] },
    "Reduce Enemy Damage": { stats: ["Enemy Damage Reduction", "Disarm"] },
    "Anti-tank": {
        stats: [
            "Bleed Damage",
            "Enemy Healing Reduction",
            "Max Health Lifesteal",
            "Max Health Spirit Damage",
        ],
        conditions: ["Enemy Health Above 50%"],
    },
    Silence: { stats: ["Enemy Silence", "Enemy Movement Silence"] },
    Stun: { stats: ["Enemy Stun"] },
    "Resist Crowd Control": {
        stats: ["Movement Slow Resist", "Debuff Immunity", "Debuff Resist", "Invincible"],
        conditions: ["Movement Locked"],
        tags: ["mobility"],
    },

    // MISCELLANEOUS
    Revive: {
        conditions: ["Death"],
        tags: ["respawn"],
    },
    "Melee Damage": {
        stats: ["Melee Damage"],
    },
    "Heavy Melee Damage (Unga Bunga Mode)": {
        stats: ["Heavy Melee Damage", "Heavy Melee Distance"],
        conditions: ["Health Below 50%", "On Heavy Melee Hit", "Sustained Damage"],
    },
    "Melee Lifesteal": {
        stats: ["Melee Lifesteal"],
    },
    Assassinations: {
        conditions: ["On Hero Kill"],
        tags: ["hero kill"],
    },
    Stealth: {
        stats: ["Stealth"],
    },
    "NPC Destroyer": {
        stats: [
            "Bullet Resist vs. NPCs",
            "Healing From NPCs",
            "Minion Fire Rate",
            "Weapon Damage vs. NPCs",
        ],
        conditions: ["Minions Near 20m", "On Soul Secure"],
    },
};
