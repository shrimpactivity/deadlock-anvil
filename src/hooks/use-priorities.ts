import { useMemo, useState } from "react";
import { Item } from "../types/item";

function initializeStatsAndConditions(items: Item[]) {
  const initStats: Record<string, number> = {};
  const initConditions: Record<string, number> = {};

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

  const [statPriority, setStatPriority] = useState(initStats);
  const [conditionPriority, setConditionPriority] =
    useState(initConditions);

  function incrementStat(name: string) {
    if (!(name in statPriority)) {
      throw new Error(`Invalid stat name: ${name}`);
    }

    let newValue = statPriority[name] + 1;
    if (newValue > MAX_STAT_PRIORITY) {
      newValue = 0;
    }
    const newPriorities = {
      ...statPriority,
      [name]: newValue,
    };
    setStatPriority(newPriorities);
  }

  function decrementStat(name: string) {
    if (!(name in statPriority)) {
      throw new Error(`Invalid stat name: ${name}`);
    }

    let newValue = statPriority[name] - 1;
    if (newValue < 0) {
      newValue = MAX_STAT_PRIORITY;
    }
    const newPriorities = {
      ...statPriority,
      [name]: newValue,
    };
    setStatPriority(newPriorities);
  }

  function incrementCondition(name: string) {
    if (!(name in conditionPriority)) {
      throw new Error(`Invalid condition name: ${name}`);
    }

    let newValue = conditionPriority[name] + 1;
    if (newValue > MAX_CONDITION_PRIORITY) {
      newValue = 0;
    }
    const newPriorities = {
      ...conditionPriority,
      [name]: newValue,
    };
    setConditionPriority(newPriorities);
  }

  function decrementCondition(name: string) {
    if (!(name in conditionPriority)) {
      throw new Error(`Invalid condition name: ${name}`);
    }

    let newValue = conditionPriority[name] - 1;
    if (newValue < 0) {
      newValue = MAX_CONDITION_PRIORITY;
    }
    const newPriorities = {
      ...conditionPriority,
      [name]: newValue,
    };
    setConditionPriority(newPriorities);
  }

  function resetStats() {
    const newPriorities = Object.keys(statPriority).reduce(
      (accum, stat) => {
        accum[stat] = 0;
        return accum;
      },
      {} as Record<string, number>
    );
    setStatPriority(newPriorities);
  }

  function resetConditions() {
    const newPriorities = Object.keys(conditionPriority).reduce(
      (accum, condition) => {
        accum[condition] = 0;
        return accum;
      },
      {} as Record<string, number>
    );
    setConditionPriority(newPriorities);
  }

  return {
    stats: statPriority,
    incrementStat,
    decrementStat,
    resetStats,
    conditions: conditionPriority,
    incrementCondition,
    decrementCondition,
    resetConditions,
  };
}
