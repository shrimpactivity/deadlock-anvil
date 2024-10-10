import { PropsWithChildren, useMemo } from "react";
import { usePriorities } from "../hooks/use-priorities";
import { BuildContext } from "./use-build";
import { BuildCalculator } from "../lib/build-calculator";
import { useDebounce } from "../hooks/use-debounce";
import { ITEMS } from "../config/items.config";

const calc = new BuildCalculator(ITEMS);

export default function BuildProvider({ children }: PropsWithChildren) {
    const priorities = usePriorities(ITEMS);
    const debouncedPriorities = useDebounce(priorities, 500);

    const buildOrder = useMemo(
        () => calc.getBuildOrder(debouncedPriorities.stats, debouncedPriorities.conditions),
        [debouncedPriorities],
    );

    return (
        <BuildContext.Provider value={{ priorities, buildOrder }}>{children}</BuildContext.Provider>
    );
}
