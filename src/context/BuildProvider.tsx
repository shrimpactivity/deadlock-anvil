import { PropsWithChildren, useMemo, useState } from "react";
import { BuildCalculator } from "../lib/build-calc";
import { BuildContext } from "./use-build";
import { usePriorities } from "../hooks/use-priorities";
import { useDebounce } from "../hooks/use-debounce";
import { Settings } from "../types/build";
import { Item } from "@/types/item";
import { DetailedPriorities, PriorityGroupMapping } from "@/types/priority";

const initSettings: Settings = {
    openWeaponSlots: 0,
    openVitalitySlots: 0,
    openSpiritSlots: 0,
    openFlexSlots: 0,
    maxActiveItems: 4,
};

interface Props extends PropsWithChildren {
    items: Item[];
    priorityGroupMapping: PriorityGroupMapping;
}

export default function BuildProvider({ items, priorityGroupMapping, children }: Props) {
    const priorities = usePriorities(priorityGroupMapping);
    const [mandatedItems, setMandatedItems] = useState<string[]>([]);
    const [settings, setSettings] = useState(initSettings);

    const debouncedDetailedPriorities = useDebounce(priorities.detailed);
    const debouncedMandatedItems = useDebounce(mandatedItems);
    const debouncedSettings = useDebounce(settings);

    const calc = useMemo(() => new BuildCalculator(items), [items]);

    const buildOrder = useMemo(() => {
        const buildOptions = {
            items,
            priorities: debouncedDetailedPriorities,
            mandatedItems: debouncedMandatedItems,
            settings: debouncedSettings,
        };
        return calc.getBuildOrder(buildOptions);
    }, [debouncedDetailedPriorities, debouncedMandatedItems, debouncedSettings]);

    return (
        <BuildContext.Provider
            value={{
                priorities,
                mandatedItems,
                setMandatedItems,
                settings,
                setSettings,
                buildOrder,
            }}
        >
            {children}
        </BuildContext.Provider>
    );
}
