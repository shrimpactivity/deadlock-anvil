
# Thoughts

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

### Stat Priorities
Populated from archetype choices, but can be overridden.
List of stats with checkboxes, and list of conditions with checkboxes.
Maybe split into three categories.

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
