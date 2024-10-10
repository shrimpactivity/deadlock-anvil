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
            stats: [{ name: "Bonus Weapon Damage", amount: 40 }],
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
        additionalInfo: "If you hit an NPC, it heals for 15. If you hit a hero, it heals for 40.",
    },
    {
        name: "Active Reload",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "Decrease Reload Time", amount: 20, units: "%" },
            { name: "Weapon Damage", amount: 10, units: "%" },
        ],
        passive: {
            condition: "Active Reload",
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
            { name: "Bullet Resist", amount: 70, units: "%" },
        ],
        additionalInfo:
            "Includes stacking: +5% weapon damage per stack, 100 damage taken to stack, Max Stacks 10, 10s duration.",
    },
    {
        name: "kinetic_dash",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "bonus_health", amount: 100 },
            { name: "health_regen", amount: 1.5 },
        ],
        passive: {
            condition: "kinetic_dash",
            stats: [
                { name: "fire_rate", amount: 0.2, units: "%" },
                { name: "temporary_ammo", amount: 5 },
            ],
            duration: 7,
            cooldown: 10.5,
        },
        additionalInfo: "The passive condition also makes your next dash jump free",
    },
    {
        name: "long_range",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "ammo", amount: 0.2, units: "%" },
            { name: "bullet_shield_health", amount: 140 },
        ],
        passive: {
            condition: "long_range_15m",
            stats: [{ name: "weapon_damage", amount: 0.4, units: "%" }],
        },
    },
    {
        name: "melee_charge",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "weapon_damage", amount: 0.15, units: "%" },
            { name: "bonus_health", amount: 100 },
            { name: "health_regen", amount: 1 },
            { name: "heavy_melee_distance", amount: 0.4, units: "%" },
        ],
        passive: {
            condition: "heavy_melee",
            stats: [
                { name: "bonus_heavy_melee_damage", amount: 0.2, units: "%" },
                { name: "bonus_ammo", amount: 1, units: "%" },
            ],
            cooldown: 10,
        },
        additionalInfo:
            "An additional passive effect is that you either instantly reload or get up to 100% free bonus ammo",
    },
    {
        name: "mystic_shot",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "weapon_damage", amount: 0.12, units: "%" },
            { name: "spirit_power", amount: 4 },
        ],
        passive: {
            condition: "next_bullet",
            stats: [{ name: "bonus_spirit_damage", amount: 60 }],
            cooldown: 5.2,
        },
    },
    {
        name: "slowing_bullets",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "weapon_damage", amount: 0.16, units: "%" },
            { name: "spirit_power", amount: 5 },
        ],
        passive: {
            condition: "hit_hero",
            stats: [{ name: "movement_slow", amount: 0.25, units: "%" }],
            duration: 1.3,
        },
    },
    {
        name: "soul_shredder_bullets",
        category: "weapon",
        tier: 2,
        stats: [{ name: "weapon_damage", amount: 0.07, units: "%" }],
        passive: {
            condition: "hit_hero",
            stats: [
                { name: "spirit_amp", amount: 0.1, units: "%" },
                { name: "spirit_lifesteal", amount: 0.2, units: "%" },
            ],
            duration: 6,
        },
    },
    {
        name: "swift_striker",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "fire_rate", amount: 0.22, units: "%" },
            { name: "ammo", amount: 0.1, units: "%" },
            { name: "bullet_resist", amount: -0.05, units: "%" },
        ],
    },
    {
        name: "fleetfoot",
        category: "weapon",
        tier: 2,
        stats: [
            { name: "bonus_health", amount: 90 },
            { name: "slide_distance", amount: 0.25, units: "%" },
        ],
        active: {
            stats: [
                { name: "movement_speed", amount: 3 },
                { name: "temporary_ammo", amount: 0.3, units: "%" },
            ],
            cooldown: 19,
            duration: 4,
        },
        additionalInfo:
            "This also has a passive that removes the movement speed penalty while shooting.",
    },
    {
        name: "burst_fire",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "bonus_health", amount: 70 },
            { name: "slide_distance", amount: 0.5, units: "%" },
            { name: "fire_rate", amount: 0.12, units: "%" },
        ],
        passive: {
            condition: "hit_hero",
            stats: [
                { name: "movement_speed", amount: 2 },
                { name: "fire_rate", amount: 0.3, units: "%" },
            ],
            cooldown: 8.5,
            duration: 4,
        },
    },
    {
        name: "escalating_resilience",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "fire_rate", amount: 0.12, units: "%" },
            { name: "weapon_damage", amount: 0.14, units: "%" },
        ],
        additionalInfo:
            "This also has stacks of bullet resist: 40% max, 2% bullet resist per stack, 20s stack duration",
    },
    {
        name: "headhunter",
        category: "weapon",
        tier: 3,
        component: "headshot_booster",
        stats: [
            { name: "weapon_damage", amount: 0.15, units: "%" },
            { name: "bullet_shield_health", amount: 150 },
            { name: "fire_rate", amount: 0.05, units: "%" },
        ],
        passive: {
            condition: "headshot",
            stats: [
                { name: "bonus_weapon_damage", amount: 140 },
                { name: "healing", amount: 0.08, units: "%" },
                { name: "movement_speed", amount: 2 },
            ],
            cooldown: 6,
            duration: 3,
        },
        additionalInfo: "Note: the duration is only relevant for the increased movement speed.",
    },
    {
        name: "hunters_aura",
        category: "weapon",
        tier: 3,
        stats: [{ name: "bonus_health", amount: 150, units: "%" }],
        passive: {
            condition: "radius",
            stats: [
                { name: "reduce_enemy_bullet_resist", amount: -0.09, units: "%" },
                { name: "reduce_enemy_fire_rate", amount: -0.1, units: "%" },
            ],
        },
    },
    {
        name: "intensifying_magazine",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "ammo", amount: 0.25, units: "%" },
            { name: "weapon_damage", amount: 0.2, units: "%" },
        ],
        passive: {
            condition: "continuous_fire",
            stats: [{ name: "max_weapon_damage", amount: 0.6, units: "%" }],
            duration: 3,
        },
    },
    {
        name: "point_blank",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "bullet_resist", amount: 0.15, units: "%" },
            { name: "stamina", amount: 1 },
        ],
        passive: {
            condition: "close_range_15m",
            stats: [
                { name: "weapon_damage", amount: 0.45, units: "%" },
                { name: "movement_slow", amount: 0.25, units: "%" },
            ],
            duration: 2,
        },
    },
    {
        name: "pristine_emblem",
        category: "weapon",
        tier: 3,
        component: "high_velocity_mag",
        stats: [
            { name: "bullet_velocity", amount: 0.35, units: "%" },
            { name: "weapon_damage", amount: 0.25, units: "%" },
            { name: "spirit_power", amount: 12 },
            { name: "spirit_resist", amount: 0.12, units: "%" },
        ],
        passive: {
            condition: "enemy_health_above_50%",
            stats: [{ name: "weapon_damage", amount: 0.25, units: "%" }],
        },
    },
    {
        name: "sharpshooter",
        category: "weapon",
        tier: 3,
        component: "long_range",
        stats: [
            { name: "ammo", amount: 0.2, units: "%" },
            { name: "weapon_falloff_range", amount: 0.15, units: "%" },
            { name: "weapon_zoom", amount: 0.35, units: "%" },
            { name: "bullet_shield_health", amount: 200 },
        ],
        passive: {
            condition: "long_range_15m",
            stats: [{ name: "weapon_damage", amount: 0.7, units: "%" }],
        },
    },
    {
        name: "tesla_bullets",
        category: "weapon",
        tier: 3,
        stats: [{ name: "fire_rate", amount: 0.14, units: "%" }],
        additionalInfo:
            "Your bullets have a chance to shock your target. The shock will jump to a nearby enemy. 30 shock damage, 60 damage on jump, 25% proc chance, 8m jump radius, 2 max jumps",
    },
    {
        name: "titanic_magazine",
        category: "weapon",
        tier: 3,
        component: "basic_magazine",
        stats: [
            { name: "ammo", amount: 1.2, units: "%" },
            { name: "weapon_damage", amount: 0.18, units: "%" },
            { name: "bullet_resist", amount: 0.18, units: "%" },
        ],
    },
    {
        name: "toxic_bullets",
        category: "weapon",
        tier: 3,
        stats: [{ name: "bonus_health", amount: 100 }],
        passive: {
            condition: "hit_hero",
            stats: [
                { name: "bleed_damage", amount: 0.05, units: "%" },
                { name: "healing_reduction", amount: -0.65, units: "%" },
            ],
            duration: 3,
        },
        additionalInfo: "Bleed builds up at 0.8% per shot",
    },
    {
        name: "alchemical_fire",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "bullet_shield_health", amount: 225 },
            { name: "weapon_damage", amount: 0.14, units: "%" },
            { name: "spirit_power", amount: 11 },
        ],
        active: {
            condition: "radius",
            stats: [
                { name: "spirit_dps", amount: 45 },
                { name: "weapon_damage", amount: 0.5, units: "%" },
            ],
            duration: 5,
            cooldown: 28,
        },
        additionalInfo: "Max Spirit DPS is 95",
    },
    {
        name: "heroic_aura",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "bullet_lifesteal", amount: 0.2, units: "%" },
            { name: "bonus_health", amount: 150 },
            { name: "movement_speed", amount: 1 },
        ],
        passive: {
            condition: "minions_nearby_20m",
            stats: [{ name: "minion_fire_rate", amount: 0.4, units: "%" }],
        },
        active: {
            condition: "radius",
            stats: [
                { name: "movement_speed", amount: 2 },
                { name: "fire_rate", amount: 0.25, units: "%" },
            ],
            duration: 6,
            cooldown: 32,
        },
    },
    {
        name: "warp_stone",
        category: "weapon",
        tier: 3,
        stats: [
            { name: "weapon_damage", amount: 0.2, units: "%" },
            { name: "spirit_power", amount: 8 },
        ],
        active: {
            condition: "teleport_11m",
            stats: [{ name: "bullet_resist", amount: 0.3, units: "%" }],
            duration: 5,
            cooldown: 16,
        },
    },
];
