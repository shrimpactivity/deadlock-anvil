import { ItemConditionName, ItemStatName, ItemTag } from "./item";

export interface PriorityMapping {
  label: "Weapon Damage",
  category: "Weapon"

  [key: string]: {
      [key: string]: {
          stats?: ItemStatName[];
          conditions?: ItemConditionName[];
          tags?: ItemTag[];
      };
  };
}