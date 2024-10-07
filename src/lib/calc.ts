import { Item } from "../types/item";
import {
  ConditionPriority,
  SeedPriority,
  StatPriority,
} from "../types/priority";

interface Priorities {
  statPriority: StatPriority;
  conditionPriority: ConditionPriority;
  seedPriority: SeedPriority;
}

function calculateItemStatPriority(item: Item, statPriority: StatPriority): number {
  
}

function calculateItemPriority(item: Item, priorities: Priorities) {
  const { stats, effect } = item;
  let statContribution = 0;
  for (let i = 0; i < stats.length, i += 1) {
    const stat = stats[i];
    if (priorities.statPriority[stat])
  }
  
}
