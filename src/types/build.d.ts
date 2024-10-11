import { Priorities } from "./priority";

export interface Settings {
    openWeaponSlots: number;
    openVitalitySlots: number;
    openSpiritSlots: number;
    openFlexSlots: number;
    maxActiveItems: number;
}

export interface BuildOptions {
    priorities: Priorities;
    mandatedItems: string[];
    settings: Settings;
}
