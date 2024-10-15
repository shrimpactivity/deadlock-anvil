import type { Item } from "../types/item";

export const ITEMS: Item[] = [
    {
        name: "Basic Magazine",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Ammo", amount: 26, units: "%" },
            { name: "Weapon Damage", amount: 15, units: "%" },
        ],
    },
    {
        name: "Close Quarters",
        category: "weapon",
        tier: 1,
        stats: [{ name: "Bullet Shield Health", amount: 85 }],
        passive: {
            condition: "Close Range 15m",
            stats: [{ name: "Weapon Damage", amount: 25, units: "%" }],
        },
    },
    {
        name: "Headshot Booster",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Fire Rate", amount: 4, units: "%" },
            { name: "Bullet Shield Health", amount: 40 },
        ],
        passive: {
            condition: "On Headshot",
            stats: [{ name: "Weapon Damage", amount: 40 }],
            cooldown: 7.5,
        },
    },
    {
        name: "High Velocity Mag",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Bullet Velocity", amount: 25, units: "%" },
            { name: "Weapon Damage", amount: 12, units: "%" },
            { name: "Bullet Shield Health", amount: 50 },
        ],
    },
    {
        name: "Hollow Point Ward",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Spirit Shield Health", amount: 95 },
            { name: "Spirit Power", amount: 4 },
        ],
        passive: {
            condition: "Health Above 60%",
            stats: [{ name: "Weapon Damage", amount: 22, units: "%" }],
        },
    },
    {
        name: "Monster Rounds",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Weapon Damage vs. NPCs", amount: 30, units: "%" },
            { name: "Bullet Resist vs. NPCs", amount: 30, units: "%" },
            { name: "Bonus Health", amount: 50 },
            { name: "Health Regen", amount: 1 },
        ],
    },
    {
        name: "Rapid Rounds",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Fire Rate", amount: 9, units: "%" },
            { name: "Sprint Speed", amount: 1, units: "m/sec" },
        ],
    },
    {
        name: "Restorative Shot",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Bullet Resist", amount: 7, units: "%" },
            { name: "Weapon Damage", amount: 7, units: "%" },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                { name: "Healing", amount: 40 },
                { name: "Healing From NPCs", amount: 15 },
            ],
            cooldown: 5.5,
        },
    },
    {
        name: "Active Reload",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Weapon Damage", amount: 10, units: "%" },
            { name: "Reload Speed", amount: 20, units: "%" },
        ],
        passive: {
            condition: "On Active Reload",
            stats: [
                { name: "Fire Rate", amount: 20, units: "%" },
                { name: "Bullet Lifesteal", amount: 20, units: "%" },
            ],
            duration: 7,
            cooldown: 18,
        },
    },
    {
        name: "Berserker",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Ammo", amount: 4 },
            { name: "Bullet Resist", amount: 7, units: "%" },
        ],
        passive: {
            condition: "Sustained Damage",
            stats: [
                {
                    name: "Weapon Damage",
                    amount: 5,
                    units: "%/stack",
                    stacks: { max: 10, duration: 10 },
                },
            ],
        },
        additionalInfo: "100 damage taken to stack",
    },
    {
        name: "Kinetic Dash",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 100 },
            { name: "Health Regen", amount: 1.5 },
        ],
        passive: {
            condition: "On Dash Jump",
            stats: [
                { name: "Fire Rate", amount: 20, units: "%" },
                { name: "Temporary Ammo", amount: 5 },
            ],
            duration: 7,
            cooldown: 10.5,
        },
        additionalInfo: "Your next dash jump does not cost extra stamina",
    },
    {
        name: "Long Range",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Ammo", amount: 20, units: "%" },
            { name: "Bullet Shield Health", amount: 140 },
        ],
        passive: {
            condition: "Long Range 15m",
            stats: [{ name: "Weapon Damage", amount: 40, units: "%" }],
        },
    },
    {
        name: "Melee Charge",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Weapon Damage", amount: 15, units: "%" },
            { name: "Bonus Health", amount: 100 },
            { name: "Health Regen", amount: 1 },
            { name: "Heavy Melee Distance", amount: 40, units: "%" },
        ],
        passive: {
            condition: "Heavy Melee Hit",
            stats: [
                { name: "Heavy Melee Damage", amount: 20, units: "%" },
                { name: "Ammo", amount: 100, units: "%" },
            ],
            cooldown: 16,
        },
        additionalInfo: "Either reload your weapon instantly, or gain +100% bonus ammo",
    },
    {
        name: "Mystic Shot",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Weapon Damage", amount: 12, units: "%" },
            { name: "Spirit Power", amount: 4 },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [{ name: "Spirit Damage", amount: 65 }],
            cooldown: 5.2,
        },
    },
    {
        name: "Slowing Bullets",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Weapon Damage", amount: 16, units: "%" },
            { name: "Spirit Power", amount: 5 },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [{ name: "Enemy Movement Slow", amount: 25, units: "%" }],
            duration: 1.3,
        },
    },
    {
        name: "Soul Shredder Bullets",
        category: "weapon",
        tier: 2,
        stats: [{ name: "Weapon Damage", amount: 7, units: "%" }],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                { name: "Spirit Amp", amount: 10, units: "%" },
                { name: "Spirit Lifesteal", amount: 20, units: "%" },
            ],
            duration: 6,
        },
    },
    {
        name: "Swift Striker",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Fire Rate", amount: 22, units: "%" },
            { name: "Ammo", amount: 10, units: "%" },
            { name: "Bullet Resist", amount: -5, units: "%" },
        ],
    },
    {
        name: "Fleetfoot",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 90 },
            { name: "Slide Distance", amount: 25, units: "%" },
        ],
        active: {
            stats: [
                { name: "Move Speed", amount: 3, units: "m/sec" },
                { name: "Temporary Ammo", amount: 30, units: "%" },
            ],
            cooldown: 19,
            duration: 4,
        },
        additionalInfo: "Removes momement speed penalty while shooting",
    },
    {
        name: "Burst Fire",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Fire Rate", amount: 12, units: "%" },
            { name: "Slide Distance", amount: 50, units: "%" },
            { name: "Bonus Health", amount: 70 },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                { name: "Fire Rate", amount: 30, units: "%" },
                { name: "Move Speed", amount: 2, units: "m/sec" },
            ],
            cooldown: 8.5,
            duration: 4,
        },
    },
    {
        name: "Escalating Resilience",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Fire Rate", amount: 12, units: "%" },
            { name: "Weapon Damage", amount: 14, units: "%" },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                {
                    name: "Bullet Resist",
                    amount: 2,
                    units: "%/stack",
                    stacks: { max: 20, duration: 20 },
                },
            ],
        },
    },
    {
        name: "Headhunter",
        category: "weapon",
        tier: 3,
        component: "Headshot Booster",
        stats: [
            { name: "Weapon Damage", amount: 15, units: "%" },
            { name: "Bullet Shield Health", amount: 150 },
            { name: "Fire Rate", amount: 5, units: "%" },
        ],
        passive: {
            condition: "On Headshot",
            stats: [
                { name: "Weapon Damage", amount: 140 },
                { name: "Healing", amount: 8, units: "%" },
                { name: "Move Speed", amount: 2, units: "m/sec" },
            ],
            cooldown: 6,
            duration: 3,
        },
        additionalInfo: "Note: the duration is only relevant for the increased movement speed.",
    },
    {
        name: "Hunter's Aura",
        category: "weapon",
        tier: 3,
        stats: [{ name: "Bonus Health", amount: 150 }],
        passive: {
            condition: "Close Range 15m",
            stats: [
                { name: "Enemy Bullet Resist Reduction", amount: 27, units: "%" },
                { name: "Enemy Fire Rate Slow", amount: 30, units: "%" },
            ],
        },
        additionalInfo: "Effect is cut in third with more than one enemy nearby.",
    },
    {
        name: "Intensifying Magazine",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Ammo", amount: 25, units: "%" },
            { name: "Weapon Damage", amount: 20, units: "%" },
        ],
        passive: {
            condition: "Continuous Fire",
            stats: [{ name: "Weapon Damage", amount: 60, units: "%" }],
        },
        additionalInfo: "Max buildup requires 3 seconds of continuous fire",
    },
    {
        name: "Point Blank",
        category: "weapon",
        tier: 3,
        component: "Close Quarters",
        stats: [
            { name: "Bullet Resist", amount: 15, units: "%" },
            { name: "Stamina", amount: 1 },
        ],
        passive: {
            condition: "Close Range 15m",
            stats: [
                { name: "Weapon Damage", amount: 45, units: "%" },
                { name: "Enemy Movement Slow", amount: 25, units: "%" },
            ],
            duration: 2,
        },
    },
    {
        name: "Pristine Emblem",
        category: "weapon",
        tier: 3,
        component: "High Velocity Mag",
        stats: [
            { name: "Bullet Velocity", amount: 35, units: "%" },
            { name: "Weapon Damage", amount: 25, units: "%" },
            { name: "Spirit Power", amount: 12 },
            { name: "Spirit Resist", amount: 12, units: "%" },
        ],
        passive: {
            condition: "Enemy Health Above 50%",
            stats: [{ name: "Weapon Damage", amount: 25, units: "%" }],
        },
    },
    {
        name: "Sharpshooter",
        category: "weapon",
        tier: 3,
        component: "Long Range",
        stats: [
            { name: "Ammo", amount: 25, units: "%" },
            { name: "Weapon Fall-off Range", amount: 15, units: "%" },
            { name: "Weapon Zoom", amount: 35, units: "%" },
            { name: "Bullet Shield Health", amount: 200 },
        ],
        passive: {
            condition: "Long Range 15m",
            stats: [{ name: "Weapon Damage", amount: 70, units: "%" }],
        },
    },
    {
        name: "Tesla Bullets",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Fire Rate", amount: 14, units: "%" },
            { name: "Spirit Damage", amount: 35 },
        ],
        tags: ["spirit multi-hit"],
        additionalInfo:
            "Your bullets have a chance to shock your target. The shock will jump to up to 2 nearby enemies.",
    },
    {
        name: "Titanic Magazine",
        category: "weapon",
        tier: 3,
        component: "Basic Magazine",
        stats: [
            { name: "Ammo", amount: 120, units: "%" },
            { name: "Weapon Damage", amount: 18, units: "%" },
            { name: "Bullet Resist", amount: 18, units: "%" },
        ],
    },
    {
        name: "Toxic Bullets",
        category: "weapon",
        tier: 3,
        stats: [{ name: "Bonus Health", amount: 100 }],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                { name: "Bleed Damage", amount: 0.05, units: "%/sec" },
                { name: "Healing Reduction", amount: -65, units: "%" },
            ],
            duration: 3,
        },
        additionalInfo: "Bullets build up bleed effect (different rate for each gun)",
    },
    {
        name: "Alchemical Fire",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Bullet Shield Health", amount: 225 },
            { name: "Weapon Damage", amount: 14, units: "%" },
            { name: "Spirit Power", amount: 11 },
        ],
        active: {
            stats: [
                { name: "Spirit Damage", amount: 104.5, units: "/sec" },
                { name: "Weapon Damage", amount: 50, units: "%" },
            ],
            duration: 5,
            cooldown: 28,
        },
        tags: ["spirit multi-hit"],
        additionalInfo: "Increasing DPS starting from 47 up to 99",
    },
    {
        name: "Heroic Aura",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Bullet Lifesteal", amount: 20, units: "%" },
            { name: "Bonus Health", amount: 150 },
            { name: "Move Speed", amount: 1, units: "m/sec" },
        ],
        passive: {
            condition: "Minions Near 20m",
            stats: [{ name: "Minion Fire Rate", amount: 40, units: "%" }],
        },
        active: {
            stats: [
                { name: "Move Speed", amount: 2 },
                { name: "Fire Rate", amount: 25, units: "%" },
            ],
            duration: 6,
            cooldown: 32,
        },
    },
    {
        name: "Warp Stone",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "Weapon Damage", amount: 20, units: "%" },
            { name: "Spirit Power", amount: 8 },
        ],
        active: {
            stats: [{ name: "Bullet Resist", amount: 30, units: "%" }],
            duration: 5,
            cooldown: 16,
        },
        tags: ["mobility"],
    },
    {
        name: "Crippling Headshot",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Weapon Damage", amount: 20, units: "%" },
            { name: "Bullet Lifesteal", amount: 10, units: "%" },
            { name: "Spirit Lifesteal", amount: 10, units: "%" },
        ],
        passive: {
            condition: "On Headshot",
            stats: [
                { name: "Enemy Bullet Resist Reduction", amount: 24, units: "%" },
                { name: "Enemy Spirit Resist Reduction", amount: 24, units: "%" },
            ],
            duration: 4,
        },
    },
    {
        name: "Frenzy",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Ammo", amount: 12 },
            { name: "Weapon Damage", amount: 30, units: "%" },
            { name: "Bonus Health", amount: 200 },
        ],
        passive: {
            condition: "Health Below 50%",
            stats: [
                { name: "Move Speed", amount: 4, units: "m/sec" },
                { name: "Fire Rate", amount: 40, units: "%" },
                { name: "Bullet Resist", amount: 45, units: "%" },
            ],
        },
    },
    {
        name: "Glass Cannon",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Weapon Damage", amount: 70, units: "%" },
            { name: "Fire Rate", amount: 10, units: "%" },
            { name: "Move Speed", amount: 1, units: "m/sec" },
            { name: "Max Health", amount: -15, units: "%" },
        ],
        passive: {
            condition: "On Hero Kill",
            stats: [{ name: "Weapon Damage", amount: 10, units: "%/stack", stacks: { max: 7 } }],
        },
        additionalInfo: "Death results in loss of one stack",
    },
    {
        name: "Lucky Shot",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Ammo", amount: 30, units: "%" },
            { name: "Weapon Damage", amount: 31.5, units: "%" },
        ],
        passive: {
            condition: "Bullet Proc Chance",
            stats: [{ name: "Enemy Movement Slow", amount: 30, units: "%" }],
            duration: 1.5,
        },
        additionalInfo: "35% proc chance, Weapon Damage bonus is average over time while shooting",
    },
    {
        name: "Ricochet",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Ammo", amount: 35, units: "%" },
            { name: "Fire Rate", amount: 10, units: "%" },
            { name: "Bonus Health", amount: 150 },
        ],
        passive: {
            stats: [{ name: "Ricochet Damage", amount: 60, units: "%" }],
        },
        additionalInfo: "Hits 2 ricochet targets with 11m of eachother",
    },
    {
        name: "Spiritual Overflow",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Cooldown Reduction", amount: 15, units: "%" },
            { name: "Spirit Lifesteal", amount: 10, units: "%" },
            { name: "Bullet Shield Health", amount: 225 },
        ],
        passive: {
            condition: "Bullet Hit Buildup",
            stats: [
                { name: "Fire Rate", amount: 35, units: "%" },
                { name: "Spirit Power", amount: 50 },
            ],
        },
        additionalInfo:
            "Spirit power and fire rate bonus builds up 0.8% per bullet, duration of 18sec",
    },
    {
        name: "Shadow Weave",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Health Regen", amount: 15 },
            { name: "Spirit Shield Health", amount: 300 },
            { name: "Ammo", amount: 30, units: "%" },
        ],
        active: {
            stats: [
                { name: "Fire Rate", amount: 30, units: "%" },
                { name: "Spirit Power", amount: 55 },
            ],
            cooldown: 41,
            duration: 8,
        },
        tags: ["stealth"],
        additionalInfo: "Become stealthed for 25sec, attacking enemies initiates 8sec ambush",
    },
    {
        name: "Silencer",
        category: "weapon",
        tier: 4,
        component: "Slowing Bullets",
        stats: [
            { name: "Weapon Damage", amount: 20, units: "%" },
            { name: "Spirit Power", amount: 18 },
        ],
        active: {
            stats: [{ name: "Enemy Silence", amount: 2, units: "sec" }],
            cooldown: 31,
            duration: 4,
        },
    },
    {
        name: "Vampiric Burst",
        category: "weapon",
        tier: 4,
        stats: [
            { name: "Move Speed", amount: 2, units: "m/sec" },
            { name: "Weapon Damage", amount: 25, units: "%" },
            { name: "Bonus Health", amount: 150 },
        ],
        active: {
            stats: [
                { name: "Bullet Lifesteal", amount: 100, units: "%" },
                { name: "Fire Rate", amount: 40, units: "%" },
                { name: "Ammo", amount: 75, units: "%" },
            ],
            cooldown: 34,
            duration: 4.5,
        },
    },
    {
        name: "Enduring Spirit",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Spirit Lifesteal", amount: 10, units: "%" },
            { name: "Bonus Health", amount: 75 },
            { name: "Spirit Power", amount: 4 },
        ],
    },
    {
        name: "Extra Health",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Bonus Health", amount: 160 },
            { name: "Weapon Damage", amount: 6, units: "%" },
        ],
    },
    {
        name: "Extra Regen",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Health Regen", amount: 3 },
            { name: "Ammo", amount: 10, units: "%" },
            { name: "Bonus Health", amount: 25 },
        ],
    },
    {
        name: "Extra Stamina",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Stamina", amount: 1 },
            { name: "Stamina Recovery", amount: 16, units: "%" },
            { name: "Fire Rate", amount: 6, units: "%" },
            { name: "Bonus Health", amount: 25 },
        ],
    },
    {
        name: "Melee Lifesteal",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Melee Damage", amount: 12, units: "%" },
            { name: "Bonus Health", amount: 75 },
        ],
        passive: {
            condition: "On Melee Hit",
            stats: [
                { name: "Melee Lifesteal", amount: 20, units: "%" },
                { name: "Melee Lifesteal", amount: 90 },
            ],
        },
    },
    {
        name: "Sprint Boots",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Sprint Speed", amount: 2, units: "m/sec" },
            { name: "Health Regen", amount: 1 },
            { name: "Weapon Damage", amount: 4, units: "%" },
        ],
    },
    {
        name: "Healing Rite",
        category: "vitality",
        tier: 1,
        stats: [
            { name: "Bonus Health", amount: 45 },
            { name: "Spirit Power", amount: 3 },
        ],
        active: {
            stats: [
                { name: "Healing", amount: 370 },
                { name: "Sprint Speed", amount: 2, units: "m/sec" },
            ],
            duration: 19,
            cooldown: 64,
        },
        additionalInfo: "Has a cast range of 30m",
    },
    {
        name: "Bullet Armor",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Bullet Resist", amount: 25, units: "%" },
            { name: "Weapon Damage", amount: 6, units: "%" },
        ],
    },
    {
        name: "Bullet Lifesteal",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Bullet Lifesteal", amount: 28, units: "%" },
            { name: "Bonus Health", amount: 75 },
        ],
    },
    {
        name: "Combat Barrier",
        category: "vitality",
        tier: 2,
        stats: [{ name: "Bullet Shield Health", amount: 325 }],
        passive: {
            condition: "Bullet Shield Up",
            stats: [
                { name: "Weapon Damage", amount: 22, units: "%" },
                { name: "Fire Rate", amount: 6, units: "%" },
            ],
        },
    },
    {
        name: "Debuff Reducer",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 75 },
            { name: "Weapon Damage", amount: 6, units: "%" },
            { name: "Debuff Resist", amount: 30, units: "%" },
        ],
    },
    {
        name: "Enchanter's Barrier",
        category: "vitality",
        tier: 2,
        stats: [{ name: "Spirit Shield Health", amount: 300 }],
        passive: {
            condition: "Spirit Shield Up",
            stats: [
                { name: "Spirit Power", amount: 20 },
                { name: "Cooldown Reduction", amount: 8, units: "%" },
            ],
        },
    },
    {
        name: "Enduring Speed",
        category: "vitality",
        tier: 2,
        component: "Sprint Boots",
        stats: [
            { name: "Move Speed", amount: 1.1, units: "m/sec" },
            { name: "Sprint Speed", amount: 2, units: "m/sec" },
            { name: "Bonus Health", amount: 75 },
            { name: "Health Regen", amount: 1.5 },
            { name: "Movement Slow Resist", amount: 35, units: "%" },
        ],
    },
    {
        name: "Healbane",
        category: "vitality",
        tier: 2,
        stats: [{ name: "Bonus Health", amount: 75 }],
        passive: {
            condition: "On Spirit Hit",
            stats: [{ name: "Healing Reduction", amount: 40, units: "%" }],
            duration: 6,
        },
        additionalInfo: "If the enemy hero dies under the healing reduction effect, heal 350",
    },
    {
        name: "Healing Booster",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Spirit Resist", amount: 6, units: "%" },
            { name: "Health Regen", amount: 2 },
            { name: "Healing Amp", amount: 25, units: "%" },
            { name: "Healing Reduction Resistance", amount: 15, units: "%" },
        ],
    },
    {
        name: "Reactive Barrier",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Ammo", amount: 15, units: "%" },
            { name: "Bonus Health", amount: 75 },
            { name: "Health Regen", amount: 2 },
        ],
        passive: {
            condition: "Movement Locked",
            stats: [
                { name: "Bullet Shield Health", amount: 400 },
                { name: "Spirit Shield Health", amount: 200 },
            ],
            cooldown: 32,
            duration: 9,
        },
    },
    {
        name: "Spirit Armor",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Spirit Resist", amount: 20, units: "%" },
            { name: "Spirit Power", amount: 5 },
        ],
    },
    {
        name: "Spirit Lifesteal",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Spirit Lifesteal", amount: 23, units: "%" },
            { name: "Bonus Health", amount: 75 },
        ],
    },
    {
        name: "Divine Barrier",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Ability Range", amount: 8, units: "%" },
            { name: "Bonus Health", amount: 50 },
            { name: "Sprint Speed", amount: 1, units: "m/sec" },
        ],
        active: {
            stats: [
                { name: "Bullet Shield Health", amount: 260 },
                { name: "Spirit Shield Health", amount: 260 },
                { name: "Move Speed", amount: 2, units: "m/sec" },
            ],
            duration: 5,
            cooldown: 30,
        },
        additionalInfo: "Cast Range is 35m",
    },
    {
        name: "Healing Nova",
        category: "vitality",
        tier: 2,
        component: "Healing Rite",
        stats: [
            { name: "Weapon Damage", amount: 12, units: "%" },
            { name: "Bonus Health", amount: 100 },
            { name: "Spirit Power", amount: 6 },
        ],
        active: {
            stats: [{ name: "Healing", amount: 260 }],
            cooldown: 64,
        },
        additionalInfo: "Heal an additional 20% per ally for 2 seconds if they're within 15m",
    },
    {
        name: "Restorative Locket",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Spirit Resist", amount: 10, units: "%" },
            { name: "Spirit Power", amount: 5 },
            { name: "Sprint Speed", amount: 1, units: "m/sec" },
        ],
        active: {
            stats: [{ name: "Healing", amount: 35, units: "/stack", stacks: { max: 15 } }],
            cooldown: 30,
        },
    },
    {
        name: "Return Fire",
        category: "vitality",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 125 },
            { name: "Spirit Power", amount: 9 },
        ],
        active: {
            stats: [
                { name: "Bullet Damage Returned", amount: 60, units: "%" },
                { name: "Spirit Damage Returned", amount: 30, units: "%" },
                { name: "Bullet Resist", amount: 20, units: "%" },
            ],
            duration: 7,
            cooldown: 30,
        },
    },
    {
        name: "Fortitude",
        category: "vitality",
        tier: 3,
        stats: [
            { name: "Bonus Health", amount: 325 },
            { name: "Health Regen", amount: 4, units: "%" },
        ],
        passive: {
            condition: "Health Above 75%",
            stats: [
                { name: "Weapon Damage", amount: 25, units: "%" },
                { name: "Move Speed", amount: 2, units: "m/sec" },
            ],
        },
        additionalInfo: "4% Max Health Regen only kicks in after not taking damage for 11 seconds",
    },
    {
        name: "Improved Bullet Armor",
        category: "vitality",
        tier: 3,
        component: "Bullet Armor",
        stats: [
            { name: "Bullet Resist", amount: 50, units: "%" },
            { name: "Weapon Damage", amount: 10, units: "%" },
        ],
    },
    {
        name: "Improved Spirit Armor",
        category: "vitality",
        tier: 3,
        component: "Spirit Armor",
        stats: [
            { name: "Spirit Resist", amount: 45, units: "%" },
            { name: "Spirit Power", amount: 8 },
        ],
    },
    {
        name: "Lifestrike",
        category: "vitality",
        tier: 3,
        component: "Melee Lifesteal",
        stats: [
            { name: "Melee Damage", amount: 35, units: "%" },
            { name: "Bonus Health", amount: 125 },
            { name: "Bullet Resist", amount: 8, units: "%" },
        ],
        passive: {
            condition: "On Melee Hit",
            stats: [
                { name: "Enemy Movement Slow", amount: 60, units: "%" },
                { name: "Melee Lifesteal", amount: 65, units: "%" },
                { name: "Melee Lifesteal", amount: 110 },
            ],
        },
        additionalInfo: "Melee Lifesteal is only 40% effective against non-heroes",
    },
    {
        name: "Superior Stamina",
        category: "vitality",
        tier: 3,
        component: "Extra Stamina",
        stats: [
            { name: "Stamina", amount: 3 },
            { name: "Stamina Recovery", amount: 25, units: "%" },
            { name: "Jump Dash Distance", amount: 30, units: "%" },
            { name: "Fire Rate", amount: 7, units: "%" },
            { name: "Spirit Power", amount: 8 },
        ],
        tags: ["mobility"],
    },
    {
        name: "Veil Walker",
        category: "vitality",
        tier: 3,
        stats: [
            { name: "Bullet Shield Health", amount: 200 },
            { name: "Spirit Shield Health", amount: 200 },
            { name: "Ammo", amount: 12, units: "%" },
            { name: "Weapon Damage", amount: 10, units: "%" },
        ],
        passive: {
            condition: "Pass Through Cosmic Veil",
            stats: [{ name: "Move Speed", amount: 4, units: "m/sec" }],
            duration: 5,
            cooldown: 18,
        },
        tags: ["stealth"],
        additionalInfo:
            "Walking through the cosmic veil also restores all bullet and spirit shields",
    },
    {
        name: "Debuff Remover",
        category: "vitality",
        tier: 3,
        component: "Debuff Reducer",
        stats: [
            { name: "Bonus Health", amount: 125 },
            { name: "Weapon Damage", amount: 20, units: "%" },
            { name: "Debuff Resist", amount: 35, units: "%" },
        ],
        active: {
            stats: [{ name: "Move Speed", amount: 3, units: "m/sec" }],
            duration: 3,
            cooldown: 48,
        },
    },
    {
        name: "Majestic Leap",
        category: "vitality",
        tier: 3,
        stats: [
            { name: "Spirit Power", amount: 10 },
            { name: "Bonus Health", amount: 125 },
        ],
        active: {
            stats: [{ name: "Launch", amount: 1, units: "ac" }],
            cooldown: 26,
        },
        tags: ["mobility"],
        additionalInfo: "Cannot be used for 5s if attacked by enemy Hero",
    },
    {
        name: "Metal Skin",
        category: "vitality",
        tier: 3,
        stats: [
            { name: "Bonus Health", amount: 125 },
            { name: "Spirit Power", amount: 8 },
            { name: "Fire Rate", amount: 8, units: "%" },
        ],
        active: {
            stats: [{ name: "Immunity", amount: 1, units: "ac" }],
            duration: 3.5,
            cooldown: 21,
        },
    },
    {
        name: "Rescue Beam",
        category: "vitality",
        tier: 3,
        stats: [
            { name: "Bonus Health", amount: 125 },
            { name: "Sprint Speed", amount: 2, units: "m/sec" },
            { name: "Spirit Power", amount: 9 },
        ],
        active: {
            stats: [{ name: "Healing", amount: 26, units: "%" }],
            duration: 2.5,
            cooldown: 26,
        },
        tags: ["mobility"],
        additionalInfo: "Cast range of 32m",
    },
    {
        name: "Inhibitor",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Weapon Damage", amount: 25, units: "%" },
            { name: "Bonus Health", amount: 175 },
        ],
        passive: {
            condition: "On Bullet Hit",
            stats: [
                { name: "Enemy Movement Slow", amount: 25, units: "%" },
                { name: "Damage Penalty", amount: 35, units: "%" },
            ],
            duration: 2.5,
        },
    },
    {
        name: "Leech",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Spirit Lifesteal", amount: 35, units: "%" },
            { name: "Bullet Lifesteal", amount: 35, units: "%" },
            { name: "Bonus Health", amount: 175 },
            { name: "Spirit Power", amount: 18 },
            { name: "Weapon Damage", amount: 20, units: "%" },
        ],
    },
    {
        name: "Siphon Bullets",
        category: "vitality",
        tier: 4,
        stats: [{ name: "Bullet Resist", amount: 18, units: "%" }],
        passive: {
            condition: "On Bullet Hit",
            stats: [{ name: "Max HP Lifesteal", amount: 50 }],
            duration: 20,
        },
        additionalInfo:
            "Max frequency is 0.8s. Permanently steal one stack of health if a siphoned target dies, and lose 2 stacks if you die.",
    },
    {
        name: "Soul Rebirth",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Respawn Time", amount: 15, units: "sec" },
            { name: "Cooldown Reduction", amount: 15, units: "%" },
            { name: "Spirit Power", amount: 12 },
        ],
        passive: {
            condition: "Death",
            stats: [
                { name: "Respawn", amount: 1, units: "ac" },
                { name: "Bonus Health", amount: 50, units: "%" },
            ],
            cooldown: 212,
        },
    },
    {
        name: "Colossus",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Bonus Health", amount: 600 },
            { name: "Melee Damage", amount: 20, units: "%" },
            { name: "Weapon Damage", amount: 20, units: "%" },
        ],
        active: {
            stats: [
                { name: "Bullet Resist", amount: 40, units: "%" },
                { name: "Spirit Resist", amount: 40, units: "%" },
                { name: "Enemy Movement Slow", amount: 35, units: "%" },
            ],
            duration: 7,
            cooldown: 37,
        },
        additionalInfo: "Your model size grows by 20%, 14m Radius for enemy movement and dash slow",
    },
    {
        name: "Phantom Strike",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Bullet Resist", amount: 15, units: "%" },
            { name: "Weapon Damage", amount: 30, units: "%" },
        ],
        active: {
            stats: [
                { name: "Teleport", amount: 1, units: "ac" },
                { name: "Disarm", amount: 1, units: "ac" },
                { name: "Enemy Movement Slow", amount: 50, units: "%" },
                { name: "Spirit Damage", amount: 75 },
            ],
            duration: 3,
            cooldown: 26,
        },
    },
    {
        name: "Unstoppable",
        category: "vitality",
        tier: 4,
        stats: [
            { name: "Bonus Health", amount: 150 },
            { name: "Spirit Resist", amount: 15, units: "%" },
            { name: "Move Speed", amount: 1, units: "m/sec" },
            { name: "Spirit Power", amount: 12 },
        ],
        active: {
            stats: [
                { name: "Immunity", amount: 1, units: "ac" },
                { name: "Debuff Resist", amount: 100, units: "%" },
            ],
            duration: 6,
            cooldown: 64,
        },
        additionalInfo: "Cannot be used while Stunned or Slept",
    },
    {
        name: "Ammo Scavenger",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Ammo", amount: 15, units: "%" },
            { name: "Bonus Health", amount: 40 },
        ],
        passive: {
            condition: "Hit Soul",
            stats: [
                { name: "Ammo", amount: 2, units: "/soul" },
                {
                    name: "Spirit Power",
                    amount: 1,
                    units: "/soul",
                    stacks: { max: 20, duration: 30 },
                },
            ],
        },
    },
    {
        name: "Extra Charge",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Bonus Ability Charge", amount: 1 },
            { name: "Cooldown Reduction", amount: 10, units: "%" },
            { name: "Weapon Damage", amount: 6, units: "%" },
        ],
    },
    {
        name: "Extra Spirit",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Spirit Power", amount: 10 },
            { name: "Health Regen", amount: 1 },
            { name: "Bonus Health", amount: 35 },
        ],
    },
    {
        name: "Mystic Burst",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Spirit Shield Health", amount: 40 },
            { name: "Weapon Damage", amount: 6, units: "%" },
        ],
        passive: {
            condition: "Ability Hit 80+ Damage",
            stats: [{ name: "Spirit Damage", amount: 35 }],
            cooldown: 6.2,
        },
    },
    {
        name: "Mystic Reach",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Ability Range", amount: 18, units: "%" },
            { name: "Bullet Resist", amount: 6, units: "%" },
        ],
    },
    {
        name: "Spirit Strike",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Melee Damage", amount: 12, units: "%" },
            { name: "Spirit Shield Health", amount: 80 },
        ],
        passive: {
            condition: "On Melee Hit",
            stats: [
                { name: "Spirit Damage", amount: 50 },
                { name: "Enemy Spirit Resist Reduction", amount: 12, units: "%" },
            ],
            duration: 12,
            cooldown: 8.5,
        },
    },
    {
        name: "Infuser",
        category: "spirit",
        tier: 1,
        stats: [
            { name: "Bonus Health", amount: 50 },
            { name: "Ammo", amount: 10, units: "%" },
        ],
        active: {
            stats: [
                { name: "Spirit Power", amount: 16 },
                { name: "Spirit Lifesteal", amount: 20, units: "%" },
            ],
            duration: 6,
            cooldown: 37,
        },
    },
    {
        name: "Bullet Resist Shredder",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 100 },
            { name: "Bullet Resist", amount: 5, units: "%" },
        ],
        passive: {
            condition: "On Spirit Hit",
            stats: [{ name: "Enemy Bullet Resist Reduction", amount: 12, units: "%" }],
            duration: 8,
        },
    },
    {
        name: "Duration Extender",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Ability Duration", amount: 16, units: "%" },
            { name: "Health Regen", amount: 1.75 },
        ],
    },
    {
        name: "Improved Cooldown",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Cooldown Reduction", amount: 16, units: "%" },
            { name: "Health Regen", amount: 1.5 },
        ],
    },
    {
        name: "Mystic Vulnerability",
        category: "spirit",
        tier: 2,
        stats: [{ name: "Spirit Resist", amount: 6, units: "%" }],
        passive: {
            condition: "On Spirit Hit",
            stats: [{ name: "Enemy Spirit Resist Reduction", amount: 12, units: "%" }],
            duration: 6,
        },
    },
    {
        name: "Quicksilver Reload",
        category: "spirit",
        tier: 2,
        stats: [],
        passive: {
            condition: "Use Imbued Ability",
            stats: [
                { name: "Spirit Damage", amount: 65 },
                { name: "Fire Rate", amount: 15, units: "%" },
            ],
        },
        additionalInfo: "Only activates when Ammo is not full. 12s Max Frequency",
    },
    {
        name: "Suppressor",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Bonus Health", amount: 50 },
            { name: "Health Regen", amount: 2.5 },
            { name: "Spirit Power", amount: 4 },
        ],
        passive: {
            condition: "On Spirit Hit",
            stats: [{ name: "Enemy Fire Rate Slow", amount: 25, units: "%" }],
            duration: 2,
        },
    },
    {
        name: "Cold Front",
        category: "spirit",
        tier: 2,
        stats: [{ name: "Spirit Resist", amount: 10, units: "%" }],
        active: {
            stats: [
                { name: "Spirit Damage", amount: 75 },
                { name: "Enemy Movement Slow", amount: 40, units: "%" },
            ],
            duration: 3,
            cooldown: 28,
        },
        additionalInfo: "End radius is 14m",
    },
    {
        name: "Decay",
        category: "spirit",
        tier: 2,
        stats: [{ name: "Spirit Power", amount: 7 }],
        active: {
            stats: [
                { name: "Enemy Healing Reduction", amount: 50, units: "%" },
                { name: "Bleed Damage", amount: 3.1, units: "%/sec" },
            ],
            duration: 10,
            cooldown: 45,
        },
        additionalInfo: "Cast range is 15m",
    },
    {
        name: "Slowing Hex",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Sprint Speed", amount: 1, units: "m/sec" },
            { name: "Spirit Power", amount: 5 },
        ],
        active: {
            stats: [
                { name: "Spirit Damage", amount: 70 },
                { name: "Enemy Movement Slow", amount: 25, units: "%" },
            ],
            duration: 3,
            cooldown: 26,
        },
        tags: ["silence"],
        additionalInfo: "Cast range is 25m",
    },
    {
        name: "Withering Whip",
        category: "spirit",
        tier: 2,
        stats: [
            { name: "Bullet Shield Health", amount: 100 },
            { name: "Spirit Power", amount: 6 },
            { name: "Sprint Speed", amount: 1, units: "m/sec" },
        ],
        active: {
            stats: [
                { name: "Enemy Fire Rate Slow", amount: 45, units: "%" },
                { name: "Enemy Bullet Resist Reduction", amount: 14, units: "%" },
            ],
            duration: 4.5,
            cooldown: 22,
        },
        additionalInfo: "Cast range is 30m",
    },
    {
        name: "Improved Burst",
        category: "spirit",
        tier: 3,
        component: "Mystic Burst",
        stats: [
            { name: "Spirit Shield Health", amount: 100 },
            { name: "Weapon Damage", amount: 8, units: "%" },
        ],
        passive: {
            condition: "Ability Hit 125+ Damage",
            stats: [{ name: "Spirit Damage", amount: 7, units: "%" }],
            cooldown: 5,
        },
    },
    {
        name: "Improved Reach",
        category: "spirit",
        tier: 3,
        component: "Mystic Reach",
        stats: [
            {name: ""}
        ]
    }
];
