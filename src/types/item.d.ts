export interface Item {
    name: string;
    category: ItemCategory;
    tier: ItemTier;
    component?: string;
    componentOf?: string;
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

export interface ItemStat {
    name: ItemStatName;
    amount: number;
    units?: ItemStatUnits;
    stacks?: {
        max: number;
        duration?: number;
    };
}

type ItemTier = 1 | 2 | 3 | 4;

type ItemCategory = "weapon" | "vitality" | "spirit";

export type ItemStatUnits =
    | "%"
    | "%/sec"
    | "%/stack"
    | "/sec"
    | "/stack"
    | "m"
    | "m/sec"
    | "sec"

type ItemStatName =
    | "Ability Duration"
    | "Ability Range"
    | "Ammo"
    | "Bleed Damage"
    | "Bonus Ability Charge"
    | "Bonus Health"
    | "Bullet Damage Returned"
    | "Bullet Lifesteal"
    | "Bullet Immunity"
    | "Bullet Resist"
    | "Bullet Resist vs. NPCs"
    | "Bullet Shield Health"
    | "Bullet Velocity"
    | "Cooldown Reduction"
    | "Charge Cooldown Reduction"
    | "Charge Time Reduction"
    | "Dash Jump Distance"
    | "Debuff Immunity"
    | "Debuff Resist"
    | "Disarm"
    | "Enemy Bullet Resist Reduction"
    | "Enemy Damage Reduction"
    | "Enemy Fire Rate Slow"
    | "Enemy Healing Reduction"
    | "Enemy Movement Silence"
    | "Enemy Movement Slow"
    | "Enemy Silence"
    | "Enemy Spirit Resist Reduction"
    | "Enemy Stun"
    | "Fire Rate"
    | "Healing"
    | "Healing Amp"
    | "Healing From NPCs"
    | "Healing Reduction Resistance"
    | "Health Regen"
    | "Heavy Melee Damage"
    | "Heavy Melee Distance"
    | "Invincible"
    | "Max Health"
    | "Max Health Lifesteal"
    | "Max Health Spirit Damage"
    | "Melee Damage"
    | "Melee Lifesteal"
    | "Minion Fire Rate"
    | "Move Speed"
    | "Movement Slow Resist"
    | "Reload Speed"
    | "Respawn Time"
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
    | "Stealth"
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
    | "Close Range 9m"
    | "Close Range 15m"
    | "Close Range 20m"
    | "Continuous Fire"
    | "Death"
    | "Enemy Ability Use"
    | "Enemy Health Above 50%"
    | "Pass Through Cosmic Veil"
    | "Health Above 60%"
    | "Health Above 75%"
    | "Health Below 50%"
    | "Long Range 15m"
    | "Minions Near 20m"
    | "Movement Locked"
    | "On Active Reload"
    | "On Bullet Hit"
    | "On Dash Jump"
    | "On Headshot"
    | "On Heavy Melee Hit"
    | "On Hero Kill"
    | "On Imbued Ability"
    | "On Soul Secure"
    | "On Ultimate"
    | "Pulse Radius 9m"
    | "Spirit Burst Damage 80+"
    | "Spirit Burst Damage 125+"
    | "Spirit Shield Up"
    | "Sustained Damage"

type ItemTag =
    | "mobility"
    | "bullet multi-hit"
    | "hero kill"
    | "respawn"
    | "spirit multi-hit"
