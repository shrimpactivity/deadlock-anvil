import { ItemConditionName, ItemStatName, ItemTag } from "../types/item";

interface PriorityMapping {
    [key: string]: Record<string, (ItemStatName | ItemConditionName | ItemTag)[]>;
}

export const PRIORITY_MAPPING: PriorityMapping = {
    Weapon: {
        "Weapon Damage": [],
        "Fire Rate": [],
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
