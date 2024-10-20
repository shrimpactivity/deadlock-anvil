import { useMemo, useState } from "react";
import { GroupPriorities, DetailedPriorities, PriorityGroupMapping } from "@/types/priority";

function initializePriorities(priorityMapping: PriorityGroupMapping) {
    const initPriorities: GroupPriorities = {};
    Object.keys(priorityMapping).forEach((priorityName) => {
        initPriorities[priorityName] = 0;
    });
    return initPriorities;
}

export function usePriorities(priorityMapping: PriorityGroupMapping) {
    const MAX_PRIORITY = 3;
    const [groupPriorities, setGroupPriorities] = useState(() => initializePriorities(priorityMapping));

    const detailedPriorities = useMemo(() => {
        const result: DetailedPriorities = {
            stats: {},
            conditions: {},
            tags: {},
        };
        Object.keys(priorityMapping).forEach((groupPriorityName) => {
            const { stats, conditions, tags } = priorityMapping[groupPriorityName];
            const priorityValue = groupPriorities[groupPriorityName];
            if (stats) {
                stats.forEach((stat) => {
                    if (result.stats[stat]) {
                        result.stats[stat] += priorityValue;
                    } else {
                        result.stats[stat] = priorityValue;
                    }
                });
            }
            if (conditions) {
                conditions.forEach((cond) => {
                    if (result.conditions[cond]) {
                        result.conditions[cond] += priorityValue;
                    } else {
                        result.conditions[cond] = priorityValue;
                    }
                });
            }
            if (tags) {
                tags.forEach((tag) => {
                    if (result.tags[tag]) {
                        result.tags[tag] += priorityValue;
                    } else {
                        result.tags[tag] = priorityValue;
                    }
                });
            }
        });
        return result;
    }, [groupPriorities, priorityMapping])

    /**
     * Increments specified group priority by one. If it exceeds the max value, resets back to 0.
     * @param priorityGroup The name of the priority group
     */
    function increment(priorityGroup: string) {
        let newValue = groupPriorities[priorityGroup] + 1;
        if (newValue > MAX_PRIORITY) {
            newValue = 0
        }
        setGroupPriorities({
            ...groupPriorities,
            [priorityGroup]: newValue,
        });
    }

    /**
     * Set all group priorities to 0.
     */
    function reset() {
        const newPriorities = Object.keys(groupPriorities).reduce(
            (accum, prio) => {
                accum[prio] = 0;
                return accum;
            },
            {} as Record<string, number>,
        );
        setGroupPriorities(newPriorities);
    }

    return {
        groups: groupPriorities,
        detailed: detailedPriorities,
        increment,
        reset,
    };
}
