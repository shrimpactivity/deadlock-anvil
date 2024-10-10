
# Thoughts

Calculating Build:
- if an item has a component, the component and item build value should be added together since that only takes up a single slot
- normalize build values to be between 1 and 100
- empty available slots should appear on build screen
- priorities ui inputs should map to groups of stats + conditions

## Flow

### Character Archetype
Pick from:
- Tank
- Gunner
- Spellcaster
- Sniper
- Support
- Ganker
- Jungler
- Custom

### Priorities
Populated from archetype choices, but can be overridden.
- these will map to multiple stats / conditions / tags. So, ammo would map to ammo%, bonus ammo, intesifying magazine effect, 

- Weapon
    - Weapon Damage
    - Fire Rate
    - Ammo
    - Bullet Velocity
    - Decrease Reload Time
    - Headshots
    - Close Range
    - Long Range
    - Multi Hit

- Spirit
    - Spirit Damage
    - Burst Damage
    - Silence enemies
    - Ability Charges
    - Ability Range
    - Ability Duration

- Health
    - Health
    - Health Regen
    - Bullet Lifesteal
    - Spirit Lifesteal
    - Melee Lifesteal
    - Bullet Armor / Shield
    - Spirit Armor / Shield

- Mobility
    - Move speed / Sprint speed
    - stamina
    - slide distance
    - mobility burst

- Debuffs and Crowd Control
    - movement slow
    - resist movement slow
    - silence
    - stun
    - cancel cc
    - 

- Misc
    - Melee Damage
    - NPC Damage
    - Stacking Effects
    - 


### Mandated Items
List of items that can be selected to always be included in build.

### Other Settings
- set max number of active items
- set max number of free slots in each category for reaction items

### Build Order
Calculates relative value of item based on stats and cost, and displays items in order.
- item order is broken into categories by total cost breakpoints
    - potential breakpoints are 5000, 15000, then any
- checkbox to show utility item categories
- total stats from items, including item effect stats and their conditions

## Features
- associate items / conditions with eachother to form synergy priorities
    - for example, condition `health_above_60%` synergizes with `bullet_lifesteal`, `spirit_lifesteal`, `health_regen` etc.
    - maybe this is a matrix? With items, conditions, and stats.
        - so `alchemical_fire` might map to `movement_slow` and `duration`
        - 3D matrix
- active effects / effects with cooldowns have their stat priorities calculated as a percentage of their uptime
- cooldown reduction affects other item priority calculations?
- show 'recent as of ... (patch #)' at top of page
- allow download of list of items json
- build orders should be deterministic based on selections
- show the current item build order as a right side bar that dynamically updates


## Audit Script
- print out stats in alpha order
- print out conditions in alpha order
- check component items exist
- check that each stat/condition is included in a priority category
- generate many random builds and print percentage of item inclusion in each build