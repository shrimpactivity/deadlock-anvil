import { createContext, useContext } from "react";
import { usePriorities } from "../hooks/use-priorities";
import { Item } from "../types/item";
import { SettingsType } from "../types/settings";

interface BuildContextType {
    priorities: ReturnType<typeof usePriorities>;
    mandatedItems: string[];
    setMandatedItems: (items: string[]) => void;
    settings: SettingsType;
    setSettings: (settings: SettingsType) => void;
    buildOrder: Item[];
}

export const BuildContext = createContext<BuildContextType>(null!);

export function useBuild() {
    const context = useContext(BuildContext);
    if (!context) {
        throw new Error("useBuild must be in child of BuildProvider");
    }
    return context;
}
