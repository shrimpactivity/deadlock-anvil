import { ItemConditionName, ItemStatName } from "./item";

export type StatPriority = Partial<Record<ItemStatName, number>>;

export type ConditionPriority = Partial<Record<ItemConditionName, number>>;