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

export type ItemStatUnits = "%" | "%/sec" | "%/stack" | "/sec" | "/stack" | "m" | "m/sec" | "sec" | "ac" | "/soul"; //TODO: ac = action, ideally for just like, you do it or you don't

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
    | "Ability Cooldown Reduction"
    | "Ability Duration"
    | "Ability Range"
    | "Ammo"
    | "Bleed Damage"
    | "Bonus Ability Charge"
    | "Bonus Health"
    | "Bullet Damage Returned"
    | "Bullet Lifesteal"
    | "Bullet Resist"
    | "Bullet Resist vs. NPCs"
    | "Bullet Shield Health"
    | "Bullet Velocity"
    | "Cooldown Reduction"
    | "Damage Penalty"
    | "Debuff Resist"
    | "Disarm" //TODO: used for Phantom Strike
    | "Enemy Bullet Resist Reduction"
    | "Enemy Fire Rate Slow"
    | "Enemy Healing Reduction"
    | "Enemy Movement Slow"
    | "Enemy Silence"
    | "Enemy Spirit Resist Reduction"
    | "Enemy Stun" //TODO: used for Knockdown
    | "Fire Rate"
    | "Healing"
    | "Healing Amp"
    | "Healing From NPCs"
    | "Healing Reduction"
    | "Healing Reduction Resistance"
    | "Health Regen"
    | "Heavy Melee Damage"
    | "Heavy Melee Distance"
    | "Immunity" //TODO: used for Metal Skin, Unstoppable, and Ethereal Shift
    | "Jump Dash Distance"
    | "Launch" //TODO: used for majestic leap
    | "Max Health"
    | "Max HP Lifesteal"
    | "Melee Damage"
    | "Melee Lifesteal"
    | "Minion Fire Rate"
    | "Move Speed"
    | "Movement Slow Resist"
    | "Reload Speed"
    | "Respawn" //TODO: used for Soul Rebirth
    | "Respawn Time"
    | "Ricochet Damage"
    | "Silence" //TODO: used for Silence Glyph and Curse
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
    | "Teleport" //TODO: used for Phantom Strike
    | "Temporary Ammo"
    | "Time Between Charges Reduction"
    | "Weapon Damage"
    | "Weapon Damage vs. NPCs"
    | "Weapon Fall-off Range"
    | "Weapon Zoom";

type ItemConditionName =
    | "Ability Hit 80+ Damage"
    | "Ability Hit 125+ Damage"
    | "Avoid Damage"
    | "Bullet Hit Buildup"
    | "Bullet Proc Chance"
    | "Bullet Shield Up"
    | "Close Range 15m"
    | "Close Range 20m"
    | "Continuous Fire"
    | "Death"
    | "Enemy Health Above 50%"
    | "Pass Through Cosmic Veil"
    | "Health Above 60%"
    | "Health Above 75%"
    | "Health Below 50%"
    | "Heavy Melee Hit"
    | "Hit Soul"
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
    | "Pulse Radius 9m"
    | "Spirit Shield Up"
    | "Sustained Damage"
    | "Use Imbued Ability"
    | "Use Ultimate";

type ItemTag = "mobility" | "bullet multi-hit" | "silence" | "spirit multi-hit" | "stealth";
