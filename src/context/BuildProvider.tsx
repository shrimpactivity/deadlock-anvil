import { PropsWithChildren, useMemo, useState } from "react";
import { BuildCalculator } from "../lib/build-calc";
import { BuildContext } from "./use-build";
import { usePriorities } from "../hooks/use-priorities";
import { useDebounce } from "../hooks/use-debounce";
import { ITEMS } from "../config/items.config";
import { PRIORITY_MAPPING } from "../config/priorities.config";
import { Settings } from "../types/build";

const calc = new BuildCalculator(ITEMS);

const initSettings: Settings = {
    openWeaponSlots: 0,
    openVitalitySlots: 0,
    openSpiritSlots: 0,
    openFlexSlots: 0,
    maxActiveItems: 4,
};

export default function BuildProvider({ children }: PropsWithChildren) {
    const priorities = usePriorities(PRIORITY_MAPPING);
    const [mandatedItems, setMandatedItems] = useState<string[]>([]);
    const [settings, setSettings] = useState(initSettings);

    const debouncedDetailedPriorities = useDebounce(priorities.detailed);
    const debouncedMandatedItems = useDebounce(mandatedItems);
    const debouncedSettings = useDebounce(settings);

    const buildOrder = useMemo(() => {
        const buildOptions = {
            items: ITEMS,
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
