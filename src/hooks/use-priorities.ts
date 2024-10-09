import { useMemo, useState } from "react";
import { Item, ItemConditionName, ItemStatName } from "../types/item";

function initializeStatsAndConditions(items: Item[]) {
  const initStats: Record<string, number> = {};
  const initConditions: Record<string, number> = {};
  console.log('here');

  items.forEach((item) => {
    item.stats.forEach((stat) => {
      initStats[stat.name] = 0;
    });

    if (item.passive) {
      item.passive.stats.forEach((stat) => {
        initStats[stat.name] = 0;
      });
      if (item.passive.condition) {
        initConditions[item.passive.condition] = 0;
      }
    }

    if (item.active) {
      item.active.stats.forEach((stat) => {
        initStats[stat.name] = 0;
      });
      if (item.active.condition) {
        initConditions[item.active.condition] = 0;
      }
    }
  });

  return { initStats, initConditions };
}

export function usePriorities(items: Item[]) {
  // Memoize result of initializing priority dicts to not recompute every render.
  const { initStats, initConditions } = useMemo(
    () => initializeStatsAndConditions(items),
    [items]
  );

  const MAX_STAT_PRIORITY = 3;
  const MAX_CONDITION_PRIORITY = 1;

  const [statPriorities, setStatPriorities] = useState(initStats);
  const [conditionPriorities, setConditionPriorities] =
    useState(initConditions);

  function incrementStat(name: ItemStatName) {
    if (!(name in statPriorities)) {
      throw new Error(`Invalid stat name: ${name}`);
    }

    let newValue = statPriorities[name] + 1;
    if (newValue > MAX_STAT_PRIORITY) {
      newValue = 0;
    }
    const newPriorities = {
      ...statPriorities,
      [name]: newValue,
    };
    setStatPriorities(newPriorities);
  }

  function decrementStat(name: ItemStatName) {
    if (!(name in statPriorities)) {
      throw new Error(`Invalid stat name: ${name}`);
    }

    let newValue = statPriorities[name] - 1;
    if (newValue < 0) {
      newValue = MAX_STAT_PRIORITY;
    }
    const newPriorities = {
      ...statPriorities,
      [name]: newValue,
    };
    setStatPriorities(newPriorities);
  }

  function incrementCondition(name: ItemConditionName) {
    if (!(name in conditionPriorities)) {
      throw new Error(`Invalid condition name: ${name}`);
    }

    let newValue = conditionPriorities[name] + 1;
    if (newValue > MAX_CONDITION_PRIORITY) {
      newValue = 0;
    }
    const newPriorities = {
      ...conditionPriorities,
      [name]: newValue,
    };
    setConditionPriorities(newPriorities);
  }

  function decrementCondition(name: ItemConditionName) {
    if (!(name in conditionPriorities)) {
      throw new Error(`Invalid condition name: ${name}`);
    }

    let newValue = conditionPriorities[name] - 1;
    if (newValue < 0) {
      newValue = MAX_CONDITION_PRIORITY;
    }
    const newPriorities = {
      ...conditionPriorities,
      [name]: newValue,
    };
    setConditionPriorities(newPriorities);
  }

  function resetStats() {
    const newPriorities = Object.keys(statPriorities).reduce(
      (accum, stat) => {
        accum[stat] = 0;
        return accum;
      },
      {} as Record<string, number>
    );
    setStatPriorities(newPriorities);
  }

  function resetConditions() {
    const newPriorities = Object.keys(conditionPriorities).reduce(
      (accum, condition) => {
        accum[condition] = 0;
        return accum;
      },
      {} as Record<string, number>
    );
    setConditionPriorities(newPriorities);
  }

  return {
    stats: statPriorities,
    incrementStat,
    decrementStat,
    resetStats,
    conditions: conditionPriorities,
    incrementCondition,
    decrementCondition,
    resetConditions,
  };
}
