import { DetailedPriorities } from "./priority";

export interface Settings {
    openWeaponSlots: number;
    openVitalitySlots: number;
    openSpiritSlots: number;
    openFlexSlots: number;
    maxActiveItems: number;
}

export interface BuildOptions {
    priorities: DetailedPriorities;
    mandatedItems: string[];
    settings: Settings;
}
