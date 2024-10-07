import { Item } from "../types/item";
import { CATEGORY_TIER_BONUSES } from "../config/tiers.config";
import { ConditionPriority, StatPriority } from "../types/priority";

/**
 * Calculate the 'average' contribution of a stat based on its cooldown and duration
 */
function averageTimedStat(
  statAmount: number,
  cooldown?: number,
  duration?: number
) {
  let result = statAmount;
  if (cooldown) {
    result = result / cooldown;
  }
  if (duration) {
    result = result * duration;
  }
  return result;
}

/**
 * Calculate the priority contribution from an item's innate, passive effect, and active effect stats.
 */
function calculateItemStatPriority(
  item: Item,
  priority: StatPriority
): number {
  let result = 0;

  // Contribution from base item stats
  item.stats.forEach((stat) => {
    if (priority[stat.name]) {
      result += stat.amount * priority[stat.name]!;
    }
  });

  // Contribution from item tier bonus.
  const tier = CATEGORY_TIER_BONUSES[item.category];
  if (priority[tier.bonusStatName]) {
    result +=
      tier.tierBonusAmount[item.tier] * priority[tier.bonusStatName]!;
  }

  // Contribution from passive effect
  const passive = item.effect?.passive;
  if (passive) {
    passive.stats.forEach((stat) => {
      if (priority[stat.name]) {
        const statContribution = averageTimedStat(
          stat.amount,
          passive.cooldown,
          passive.duration
        );
        result += statContribution * priority[stat.name]!;
      }
    });
  }

  // Contribution from active effect
  const active = item.effect?.active;
  if (active) {
    active.stats.forEach((stat) => {
      if (priority[stat.name]) {
        const statContribution = averageTimedStat(
          stat.amount,
          active.cooldown,
          active.duration
        );
        result += statContribution * priority[stat.name]!;
      }
    });
  }

  return result;
}

/**
 * Calculate priority contribution from an item's effect conditions.
 */
function calculateItemConditionPriority(item: Item, priority: ConditionPriority) {
  let result = 0;
  const passiveCondition = item.effect?.passive?.condition;
  if (passiveCondition && priority[passiveCondition]) {
    result += priority[passiveCondition];
  }

  const activeCondition = item.effect?.active?.condition;
  if (activeCondition && priority[activeCondition]) {
    result += priority[activeCondition];
  }
  console.log('condition:', result);
  return result;
}

function calculateItemPriority(
  item: Item,
  statPriority: StatPriority,
  conditionPriority: ConditionPriority
) {
  const statContribution = calculateItemStatPriority(item, statPriority);
  const conditionContribution = calculateItemConditionPriority(item, conditionPriority);

  return statContribution + conditionContribution;
}

function calculateAllItemPriorities(items: Item[], statPriority: StatPriority, conditionPriority: ConditionPriority) {
  const result: {[key: string]: number} = {};
  items.forEach(item => {
    result[item.name] = calculateItemPriority(item, statPriority, conditionPriority);
  })
  console.log(result);
  return result;
}