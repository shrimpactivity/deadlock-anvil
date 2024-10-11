import { GroupPriorities } from "./priority";

export interface Settings {
    openWeaponSlots: number;
    openVitalitySlots: number;
    openSpiritSlots: number;
    openFlexSlots: number;
    maxActiveItems: number;
}

export interface BuildOptions {
    groupPriorities: GroupPriorities;
    mandatedItems: string[];
    settings: Settings;
}
