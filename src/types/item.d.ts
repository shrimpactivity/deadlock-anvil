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
    additionalInfo?: string;
    buildValue?: number;
}

type ItemTier = 1 | 2 | 3 | 4;

type ItemCategory = "weapon" | "vitality" | "spirit";

interface ItemStat {
    name: ItemStatName;
    amount: number;
    units?: "%" | "m/s";
}

// List of all stat names, useful for typescript name hinting.
export type ItemStatName =
    | "Alchemical Fire"
    | "Ammo"
    | "Ammo Scavenger"
    | "Base Ammo"
    | "Base Health"
    | "Bleed Damage"
    | "Bonus Ammo"
    | "Bonus Health"
    | "Bonus Spirit Damage"
    | "Bonus Weapon Damage"
    | "Bonus Heavy Melee Damage"
    | "Boundless Spirit"
    | "Bullet Armor"
    | "Bullet Heal"
    | "Bullet Lifesteal"
    | "Bullet Shield Health"
    | "Bullet Velocity"
    | "Bullet Resist"
    | "Bullet Resist Shredder"
    | "Bullet Resist Vs Npcs"
    | "Cold Front"
    | "Colossus"
    | "Combat Barrier"
    | "Crippling Headshot"
    | "Curse"
    | "Dash Jump"
    | "Debuff Reducer"
    | "Debuff Remover"
    | "Decay"
    | "Decrease Reload Time"
    | "Diviners Kevlar"
    | "Duration Extender"
    | "Divine Barrier"
    | "Echo Shard"
    | "Enchanters Barrier"
    | "Enduring Speed"
    | "Enduring Spirit"
    | "Escalating Exposure"
    | "Ethereal Shift"
    | "Extra Charge"
    | "Extra Health"
    | "Extra Regen"
    | "Extra Spririt"
    | "Extra Stamina"
    | "Fire Rate"
    | "Fire Rate Slow"
    | "Fortitude"
    | "Frenzy"
    | "Glass Cannon"
    | "Healbane"
    | "Healing"
    | "Healing Booster"
    | "Healing Reduction"
    | "Health Nova"
    | "Health Regen"
    | "Healing Rite"
    | "Heavy Melee Distance"
    | "Heroic Aura"
    | "Improved Bullet Armor"
    | "Improved Burst"
    | "Improved Cooldown"
    | "Improved Reach"
    | "Improved Spirit"
    | "Improved Spirit Armor"
    | "Infuser"
    | "Inhibitor"
    | "Intensifying Magazine"
    | "Knockdown"
    | "Leech"
    | "Lifestrike"
    | "Lucky Shot"
    | "Max Weapon Damage"
    | "Magic Carpet"
    | "Majestic Leap"
    | "Melee Lifesteal"
    | "Metal Skin"
    | "Minion Fire Rate"
    | "Movement Slow"
    | "Movement Speed"
    | "Mystic Burst"
    | "Mystic Reach"
    | "Mystic Reverb"
    | "Mystic Slow"
    | "Mystic Vulnerability"
    | "Phantom Strike"
    | "Point Blank"
    | "Pristine Emblem"
    | "Quicksilver Reload"
    | "Rapid Recharge"
    | "Reactive Barrier"
    | "Reduce Enemy Bullet Resist"
    | "Reduce Enemy Fire Rate"
    | "Refresher"
    | "Rescue Beam"
    | "Restorative Locket"
    | "Return Fire"
    | "Ricochet"
    | "Shadow Weave"
    | "Sharpshooter"
    | "Shock Damage"
    | "Shock Change"
    | "Silence Glyph"
    | "Silencer"
    | "Siphon Bullets"
    | "Slide Distance"
    | "Slowing Hex"
    | "Soul Rebirth"
    | "Spirit Amp"
    | "Spirit Armor"
    | "Spirit Dps"
    | "Spirit Lifesteal"
    | "Spirit Power"
    | "Spirit Resist"
    | "Spirit Shield Health"
    | "Spirit Strike"
    | "Sprint Speed"
    | "Spiritual Overflow"
    | "Sprint Boots"
    | "Stamina"
    | "Superior Cooldown"
    | "Superior Duration"
    | "Superior Stamina"
    | "Suppressor"
    | "Surge Of Power"
    | "Temporary Ammo"
    | "Tesla Bullets"
    | "Titanic Magazine"
    | "Torment Pulse"
    | "Toxic Bullets"
    | "Unstoppable"
    | "Vampiric Burst"
    | "Veil Walker"
    | "Warp Stone"
    | "Weapon Damage"
    | "Weapon Damage Vs Npcs"
    | "Weapon Falloff Range"
    | "Weapon Zoom"
    | "Withering Whip";

// List of all stat conditions, useful for typescript name hinting.
export type ItemConditionName =
    | "Active Reload"
    | "Close Range 15m"
    | "Continuous Fire"
    | "Damage Over Time"
    | "Enemy Health Above 50%"
    | "Headshot"
    | "Health Above 60%"
    | "Heavy Melee"
    | "Hit Hero"
    | "Kinetic Dash"
    | "Long Range 15m"
    | "Minions Nearby 20m"
    | "Next Bullet"
    | "Sustain Damage From Enemies"
    | "Stacking"
    | "Teleport 11m"
    | "Radius";
