import { ItemStatName } from "../types/item";

interface ArchetypeMapping {
  [key: string]: ItemStatName[];
}

export const Archetypes: ArchetypeMapping = {
  "tank": ["weapon_damage", "bullet_lifesteal", "base_health"]
}