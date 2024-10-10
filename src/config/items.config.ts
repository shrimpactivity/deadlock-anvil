import type { Item } from "../types/item";

export const ITEMS: Item[] = [
    {
        name: "Basic Magazine",
        category: "weapon",
        tier: 1,
        stats: [
            { name: "Ammo", amount: 24, units: "%" },
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
            condition: "Headshot",
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
            { name: "Weapon Damage vs. NPCs", amount: 35, units: "%" },
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
            { name: "Weapon Damage", amount: 8, units: "%" },
        ],
        passive: {
            condition: "Bullet Hit",
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
            condition: "Dash Jump",
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
                { name: "Bonus Ammo", amount: 100, units: "%" },
            ],
            cooldown: 10,
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
            condition: "Bullet Hit",
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
            condition: "Bullet Hit",
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
            condition: "Bullet Hit",
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
            condition: "Bullet Hit",
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
            condition: "Bullet Hit",
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
            condition: "Headshot",
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
            condition: "Continuous Fire for 3 Seconds",
            stats: [{ name: "Weapon Damage", amount: 60, units: "%" }],
            duration: 3,
        },
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
            { name: "Ammo", amount: 20, units: "%" },
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
        tags: ["multi-hit"],
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
            condition: "Bullet Hit",
            stats: [
                { name: "Bleed Damage", amount: 0.05, units: "%/sec" },
                { name: "Healing Reduction", amount: -65, units: "%" },
            ],
            duration: 3,
        },
        additionalInfo: "47% buildup per shot",
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
                { name: "Spirit Damage", amount: 73, units: "/sec" },
                { name: "Weapon Damage", amount: 50, units: "%" },
            ],
            duration: 5,
            cooldown: 28,
        },
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
            condition: "Close Range 20m",
            stats: [{ name: "Minion Fire Rate", amount: 40, units: "%" }],
        },
        active: {
            condition: "Close Range 30m",
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
            condition: "Headshot",
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
            condition: "Health Below 40%",
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
            condition: "Hero Kill",
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
            { name: "Weapon Damage", amount: 31.5 },
        ],
        passive: {
            condition: "Bullet Proc Chance",
            stats: [{ name: "Enemy Movement Slow", amount: 30, units: "%" }],
            duration: 1.5,
        },
        additionalInfo: "35% proc chance, Weapon Damage bonus is average over time while shooting"
    },
    {
        name: 'Ricochet',
        category: "weapon",
        tier: 4,
        stats: [
            {name: 'Ammo', amount: 35, units: '%'},
            {name: 'Fire Rate', amount: 10, units: '%'},
            {name: 'Bonus Health', amount: 150},
        ],
        passive: {
            condition: "Bullet Ricochet",
            stats: [
                {name: "Ricochet Damage", amount: 60, units: '%'}
            ]
        },
        additionalInfo: "Hits 2 ricochet targets with 14m of eachother"
    },
    {
        name: "Spiritual Overflow",
        category: "weapon",
        tier: 4,
        stats: [
            {name: 'Fire Rate', amount: 20, units: '%'},
            {name: 'Cooldown Reduction', amount: 15, units: '%'},
            {name: "Spirit Lifesteal", amount: 10, units: '%'},
            {name: "Bullet Shield Health", amount: 225},
            {name: "Spirit Power", amount: 45}
        ],
        additionalInfo: "Spirit power bonus requires two shots on enemies, duration of 18sec"
    },
    {
        name: "Shadow Weave",
        category: "weapon",
        tier: 4,
        stats: [
            {name: "Health Regen", amount: 15},
            {name: "Spirit Shield Health", amount: 300},
            {name: "Ammo", amount: 30, units: '%'},
        ],
        active: {
            stats: [
                {name: "Fire Rate", amount: 30, units: '%'},
                {name: "Spirit Power", amount: 55},
            ],
            cooldown: 41,
            duration: 8
        },
        tags: ["stealth"],
        additionalInfo: "Become stealthed for 25sec, attacking enemies initiates 8sec ambush"
    },
    {
        name: "Silencer",
        category: "weapon",
        tier: 4,
        component: "Slowing Bullets",
        stats: [
            {name: "Weapon Damage", amount: 20, units: '%'},
            {name: "Spirit Power", amount: 12},
        ],
        active: {
            stats: [{name: "Enemy Silence", amount: 2}],
            cooldown: 31,
            duration: 4
        },
        tags: ["silence"]
    },
    {
        name: "Vampiric Burst",
        category: "weapon",
        tier: 4,
        stats: [
            {name: "Move Speed", amount: 2, units: "m/sec"},
            {name: "Weapon Damage", amount: 25, units: '%'},
            {name: "Bonus Health", amount: 150},
        ],
        active: {
            stats: [
                {name: "Bullet Lifesteal", amount: 100, units: "%"},
                {name: "Fire Rate", amount: 40, units: "%"},
                {name: "Ammo", amount: 50, units: "%"}
            ],
            cooldown: 37,
            duration: 4.5
        }
    }
];
