import { useMemo, useState } from "react";
import { PriorityGroupMapping, GroupPriorities, DetailedPriorities } from "@/types/priority";

function initializePriorities(priorityMapping: PriorityGroupMapping) {
    const initPriorities: GroupPriorities = {};
    Object.keys(priorityMapping).forEach((priorityName) => {
        initPriorities[priorityName] = 0;
    });
    return { initPriorities };
}

export function usePriorities(mapping: PriorityGroupMapping, maxPriorityValue?: number) {
    const { initPriorities } = useMemo(() => initializePriorities(mapping), [mapping]);

    const [groupPriorities, setGroupPriorities] = useState(initPriorities);

    const maxPriority = maxPriorityValue ?? 3;

    /**
     * Increments specified group priority by one. If it exceeds the max value, resets back to 0.
     * @param priorityGroup The name of the priority group
     */
    function increment(priorityGroup: string) {
        const newPriorities =
            groupPriorities[priorityGroup] >= maxPriority ? 0 : groupPriorities[priorityGroup] + 1;
        setGroupPriorities({
            ...groupPriorities,
            priority: newPriorities,
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

    /**
     * Returns the sum of priority values for stats, conditions, and tags based
     * off of the group priority values.
     */
    function getDetailedPriorities(): DetailedPriorities {
        const result: DetailedPriorities = {
            stats: {},
            conditions: {},
            tags: {},
        };
        Object.keys(mapping).forEach((groupPriority) => {
            const { stats, conditions, tags } = mapping[groupPriority];
            const priorityValue = groupPriorities[groupPriority];
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
    }

    return {
        group: groupPriorities,
        detailed: getDetailedPriorities(),
        increment,
        reset,
    };
}
