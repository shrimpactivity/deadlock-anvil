import { useMemo, useState } from "react";
import { GroupPriorities, DetailedPriorities, PriorityGroupMapping } from "@/types/priority";

function initializePriorities(priorityMapping: PriorityGroupMapping) {
    const initPriorities: GroupPriorities = {};
    Object.keys(priorityMapping).forEach((priorityName) => {
        initPriorities[priorityName] = 1;
    });
    return { initPriorities };
}

export function usePriorities(priorityMapping: PriorityGroupMapping, maxPriorityValue?: number) {
    const { initPriorities } = initializePriorities(priorityMapping);

    const [groupPriorities, setGroupPriorities] = useState(initPriorities);

    const maxPriority = maxPriorityValue ?? 3;

    /**
     * Increments specified group priority by one. If it exceeds the max value, resets back to 0.
     * @param priorityGroup The name of the priority group
     */
    function increment(priorityGroup: string) {
        let newValue = groupPriorities[priorityGroup] + 1;
        if (newValue > maxPriority) {
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

    /**
     * Returns the sum of priority values for stats, conditions, and tags based
     * off of the group priority values.
     */
    function getDetailedPriorities(groupPriorities: GroupPriorities): DetailedPriorities {
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
    }

    const detailedPriorities = useMemo(() => getDetailedPriorities(groupPriorities), [groupPriorities])

    return {
        groups: groupPriorities,
        detailed: detailedPriorities,
        increment,
        reset,
    };
}
