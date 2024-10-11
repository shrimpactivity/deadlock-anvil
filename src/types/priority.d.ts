import { ItemConditionName, ItemStatName, ItemTag } from "./item";

export interface PriorityGroupMapping {
    [key: string]: {
        stats?: ItemStatName[];
        conditions?: ItemConditionName[];
        tags?: ItemTag[];
    };
}

export type GroupPriorities = Record<string, number>;

export interface DetailedPriorities {
    stats: Record<string, number>;
    conditions: Record<string, number>;
    tags: Record<string, number>;
}
