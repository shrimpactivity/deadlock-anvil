import { PropsWithChildren, useMemo, useState } from "react";
import { usePriorities } from "../hooks/use-priorities";
import { BuildContext } from "./use-build";
import { useDebounce } from "../hooks/use-debounce";
import { BuildCalculator } from "../lib/build-calculator";
import { ITEMS } from "../config/items.config";
import { PRIORITY_MAPPING } from "../config/priorities.config";
import { SettingsType } from "../types/settings";

const calc = new BuildCalculator(ITEMS, PRIORITY_MAPPING);

const initSettings: SettingsType = {
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

    const buildOptions = { priorities: priorities.all, mandatedItems, settings };
    const debouncedBuildOptions = useDebounce(buildOptions);

    const buildOrder = useMemo(() => calc.getBuildOrder(debouncedBuildOptions), [debouncedBuildOptions]);

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
