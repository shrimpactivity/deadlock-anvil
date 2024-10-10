export interface Item {
    name: string;
    category: ItemCategory;
    tier: ItemTier;
    component?: string;
    stats: ItemStat[];
    passive?: {
        stats: ItemStat[];
        cooldown?: number;
        duration?: number;
        condition?: ItemConditionName;
    };
    active?: {
        stats: ItemStat[];
        cooldown: number;
        duration?: number;
        condition?: ItemConditionName;
    };
    tags?: ItemTag[];
    additionalInfo?: string;
    buildValue?: number;
}

type ItemTier = 1 | 2 | 3 | 4;

type ItemCategory = "weapon" | "vitality" | "spirit";

interface ItemStat {
    name: ItemStatName;
    amount: number;
    units?: "%" | "%/sec" | "%/stack" | "/sec" | "m" | "m/sec";
    stacks?: {
        max: number;
        duration?: number;
    };
}

// List of all stat names, useful for typescript name hinting.
type ItemStatName =
    | "Ammo"
    | "Base Ammo"
    | "Base Health"
    | "Bleed Damage"
    | "Bonus Ammo"
    | "Bonus Health"
    | "Bonus Spirit Damage"
    | "Bonus Weapon Damage"
    | "Bonus Heavy Melee Damage"
    | "Bullet Armor"
    | "Bullet Heal"
    | "Bullet Lifesteal"
    | "Bullet Shield Health"
    | "Bullet Velocity"
    | "Bullet Resist"
    | "Bullet Resist vs. NPCs"
    | "Cooldown Reduction"
    | "Duration Extender"
    | "Enemy Bullet Resist Reduction"
    | "Enemy Fire Rate Slow"
    | "Enemy Movement Slow"
    | "Enemy Spirit Resist Reduction"
    | "Enemy Silence"
    | "Fire Rate"
    | "Healing"
    | "Healing From NPCs"
    | "Healing Reduction"
    | "Health Regen"
    | "Heavy Melee Damage"
    | "Heavy Melee Distance"
    | "Max Health"
    | "Max Weapon Damage"
    | "Minion Fire Rate"
    | "Move Speed"
    | "Reload Speed"
    | "Ricochet Damage"
    | "Slide Distance"
    | "Spirit Amp"
    | "Spirit Armor"
    | "Spirit Damage"
    | "Spirit Lifesteal"
    | "Spirit Power"
    | "Spirit Resist"
    | "Spirit Shield Health"
    | "Sprint Speed"
    | "Stamina"
    | "Temporary Ammo"
    | "Weapon Damage"
    | "Weapon Damage vs. NPCs"
    | "Weapon Fall-off Range"
    | "Weapon Zoom";

// List of all stat conditions, useful for typescript name hinting.
type ItemConditionName =
    | "Bullet Hit"
    | "Bullet Proc Chance"
    | "Bullet Ricochet"
    | "Close Range 15m"
    | "Close Range 20m"
    | "Close Range 30m"
    | "Continuous Fire for 3 Seconds"
    | "Damage Over Time"
    | "Dash Jump"
    | "Enemy Health Above 50%"
    | "Headshot"
    | "Health Above 60%"
    | "Health Below 50%"
    | "Heavy Melee Hit"
    | "Hero Kill"
    | "Long Range 15m"
    | "Minions Nearby 20m"
    | "On Active Reload"
    | "Sustained Damage"
    | "Stacking"
    | "Teleport 11m"
    | "Radius";

type ItemTag = "mobility" | "multi-hit" | "silence" | "stealth";
