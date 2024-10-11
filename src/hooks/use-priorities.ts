import { useMemo, useState } from "react";
import { PriorityMapping } from "@/types/priority";

type PriorityState = Record<string, Record<string, number>>;

function initializePriorities(priorityMapping: PriorityMapping) {
    const initPriorities: PriorityState = {};
    Object.keys(priorityMapping).forEach((category) => {
        initPriorities[category] = {};
        Object.keys(priorityMapping).forEach((priorityName) => {
            initPriorities[category][priorityName] = 0;
        });
    });
    return { initPriorities };
}

export function usePriorities(priorityMapping: PriorityMapping) {
    // Memoize result of initializing priority dicts to not recompute every render.
    const { initPriorities } = useMemo(() => initializePriorities(priorityMapping), [priorityMapping]);

    const MAX_PRIORITY = 3;

    function increment(name: string) {
        
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
            {} as Record<string, number>,
        );
        setStatPriority(newPriorities);
    }

    function resetConditions() {
        const newPriorities = Object.keys(conditionPriority).reduce(
            (accum, condition) => {
                accum[condition] = 0;
                return accum;
            },
            {} as Record<string, number>,
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
