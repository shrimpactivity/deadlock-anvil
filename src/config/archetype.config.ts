import { ItemStatName } from "../types/item";

interface ArchetypeMapping {
    [key: string]: ItemStatName[];
}

export const Archetypes: ArchetypeMapping = {
    tank: ["base_health"],
    gunner: ["weapon_damage"],
    spellcaster: ["spirit_power"],
};
