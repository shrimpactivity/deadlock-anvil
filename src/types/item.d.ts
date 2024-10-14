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
}

type ItemTier = 1 | 2 | 3 | 4;

type ItemCategory = "weapon" | "vitality" | "spirit";

export type ItemStatUnits = "%" | "%/sec" | "%/stack" | "/sec" | "/stack" | "m" | "m/sec" | "sec";

export interface ItemStat {
    name: ItemStatName;
    amount: number;
    units?: ItemStatUnits;
    stacks?: {
        max: number;
        duration?: number;
    };
}

type ItemStatName =
    | "Ability Range"
    | "Ammo"
    | "Bleed Damage"
    | "Bonus Health"
    | "Bullet Damage Returned"
    | "Bullet Lifesteal"
    | "Bullet Resist"
    | "Bullet Resist vs. NPCs"
    | "Bullet Shield Health"
    | "Bullet Velocity"
    | "Cooldown Reduction"
    | "Debuff Resist"
    | "Enemy Bullet Resist Reduction"
    | "Enemy Fire Rate Slow"
    | "Enemy Movement Slow"
    | "Enemy Silence"
    | "Enemy Spirit Resist Reduction"
    | "Fire Rate"
    | "Healing"
    | "Healing Amp"
    | "Healing From NPCs"
    | "Healing Reduction"
    | "Healing Reduction Resistance"
    | "Health Regen"
    | "Heavy Melee Damage"
    | "Heavy Melee Distance"
    | "Jump Dash Distance"
    | "Max Health"
    | "Melee Damage"
    | "Melee Lifesteal"
    | "Minion Fire Rate"
    | "Move Speed"
    | "Movement Slow Resist"
    | "Reload Speed"
    | "Ricochet Damage"
    | "Slide Distance"
    | "Spirit Amp"
    | "Spirit Damage"
    | "Spirit Damage Returned"
    | "Spirit Lifesteal"
    | "Spirit Power"
    | "Spirit Resist"
    | "Spirit Shield Health"
    | "Sprint Speed"
    | "Stamina"
    | "Stamina Recovery"
    | "Temporary Ammo"
    | "Weapon Damage"
    | "Weapon Damage vs. NPCs"
    | "Weapon Fall-off Range"
    | "Weapon Zoom";

type ItemConditionName =
    | "Avoid Damage"
    | "Bullet Hit Buildup"
    | "Bullet Proc Chance"
    | "Bullet Shield Up"
    | "Close Range 15m"
    | "Close Range 20m"
    | "Continuous Fire"
    | "Enemy Health Above 50%"
    | "Pass Through Cosmic Veil"
    | "Health Above 60%"
    | "Health Above 75%"
    | "Health Below 50%"
    | "Heavy Melee Hit"
    | "Long Range 15m"
    | "Minions Near 20m"
    | "Movement Locked"
    | "On Active Reload"
    | "On Bullet Hit"
    | "On Dash Jump"
    | "On Headshot"
    | "On Hero Kill"
    | "On Melee Hit"
    | "On Spirit Hit"
    | "Spirit Shield Up"
    | "Sustained Damage";

type ItemTag = "mobility" | "bullet multi-hit" | "spirit multi-hit" | "stealth";
