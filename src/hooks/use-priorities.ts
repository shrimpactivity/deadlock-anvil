import { useMemo, useState } from "react";
import { PriorityMapping } from "@/types/priority";

type Priorities = Record<string, number>;

function initializePriorities(priorityMapping: PriorityMapping) {
    const initPriorities: Priorities = {};
    Object.keys(priorityMapping).forEach((priorityName) => {
        initPriorities[priorityName] = 0;
    });
    return { initPriorities };
}

export function usePriorities(priorityMapping: PriorityMapping, maxPriorityValue?: number) {
    const { initPriorities } = useMemo(
        () => initializePriorities(priorityMapping),
        [priorityMapping],
    );

    const [priorities, setPriorities] = useState(initPriorities);

    const maxPriority = maxPriorityValue ?? 3;

    function increment(priority: string) {
        const newPriorityVal = priorities[priority] >= maxPriority ? 0 : priorities[priority] + 1;
        setPriorities({
            ...priorities,
            priority: newPriorityVal,
        });
    }

    function reset() {
        const newPriorities = Object.keys(priorities).reduce(
            (accum, prio) => {
                accum[prio] = 0;
                return accum;
            },
            {} as Record<string, number>,
        );
        setPriorities(newPriorities);
    }

    return {
        priorities,
        increment,
        reset,
    };
}
