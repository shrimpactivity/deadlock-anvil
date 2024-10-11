

// TODO: map ui priorities to stats/conditions/tags
export const PRIORITY_MAPPING: PriorityMapping = {

        "Weapon Damage": {
            stats: ["Weapon Damage", "Enemy Bullet Resist Reduction"],
            conditions: ["Bullet Hit"],
        },
        "Fire Rate": {
            conditions: ["Bullet Proc Chance"],
        },
        Ammo: { stats: ["Ammo"] },
        "Bullet Velocity": {},
        "Reload Speed": {},
        Headshots: {},
        "Close Range": {},
        "Long Range": {},
        "Multi Hit": {},

    Spirit: {
        "Spirit Damage": {},
        "Burst Damage": {},
        "Silence enemies": {},
        "Ability Charges": {},
        "Ability Range": {},
        "Ability Duration": {},
    },
    Health: {
        Health: {},
        "Health Regen": {},
        "Bullet Lifesteal": {},
        "Spirit Lifesteal": {},
        "Melee Lifesteal": {},
        "Bullet Armor / Shield": {},
        "Spirit Armor / Shield": {},
    },
    Mobility: {
        "Move Speed": {},
        "Sprint Speed": {},
        Stamina: {},
        "Slide Distance": {},
        "Mobility/Escape Tools": {},
    },
    "Crowd Control": {
        "Movement Slow": {},
        Silence: {},
        Stun: {},
        "Resist Crowd Control": {},
    },
    Misc: {
        "Melee Damage": {},
        "NPC Damage": {},
    },
};
