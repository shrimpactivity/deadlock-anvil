import { ItemConditionName, ItemStatName, ItemTag } from "../types/item";

interface PriorityMapping {
    [key: string]: Record<string, (ItemStatName | ItemConditionName | ItemTag)[]>;
}

// TODO: map ui priorities to stats/conditions/tags
export const PRIORITY_MAPPING: PriorityMapping = {
    Weapon: {
        "Weapon Damage": ["Weapon Damage", "Enemy Bullet Resist Reduction", "Bullet Hit"],
        "Fire Rate": ["Bullet Proc Chance"],
        Ammo: ["Ammo", ],
        "Bullet Velocity": [],
        "Reload Speed": [],
        Headshots: [],
        "Close Range": [],
        "Long Range": [],
        "Multi Hit": [],
    },
    Spirit: {},
    Health: {},
    Mobility: {},
    "Crowd Control": {},
    Misc: {},
};
