import { ItemConditionName, ItemStatName, ItemTag } from "./item";

export interface PriorityMapping {
    [key: string]: {
        stats?: ItemStatName[];
        conditions?: ItemConditionName[];
        tags?: ItemTag[];
    };
}

export type Priorities = Record<string, number>;