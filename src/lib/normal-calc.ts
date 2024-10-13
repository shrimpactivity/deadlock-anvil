import { Item, ItemStat } from "../types/item";
import { getAllItemStats, getStatUnitsString, getTierBonusStat } from "./utils";

/*
Suppose you had weapon damage 20% and move speed 1m/s.
That means weapon damage would get prioritized 20 times more than move speed without manually specifying
a factor for each stat bonus.
So we normalize stat bonuses by unit (%, m/s, etc.) to a range of [0, 1]. This way flat bonuses are
normalized separately from percantage bonuses, or any other unit type.
Therefore values 10, 20, and 30 would become 0.333, 0.666, 1.0 (0 is assumed to be the minimum), where 0 is 
no value and 1 is the max value an item can provide.

But this causes an issue with negative valued stats. For example, Swift Striker has -5% bullet resist.
If we normalized with bonuses -5, 5, and 10, Swift Striker would have a value of 0 and items without bullet
resist would have a value of 0.333.

To fix this, we always set the minimum bonus value for normalization as 0, instead of a negative value.
With this altered min-max scaling, bonuses of -5, 5, and 10 would normalize to -0.5, 0.5, 1.

Theoretically, this means there's no lower bound then on the normalized value range. Bonuses of -100, 1, and 2
would produce values of -50, 0.5, and 1. In practice, there aren't any extreme negative stat bonuses
to warrant setting a lower bound. In the above case, we could normalize to values -1, 0.01, 0.02, 
but I prefer to have the max item bonus normalize to 1.0.

All of this is a lot of hooplah for what boils down to dividing a value by the max value.
And all for only one item with negative stats, Swift Striker. 
But hey, it works for future item updates.
 */

export class NormalCalculator {
    private statMaximums: Record<string, number> = {};

    constructor(items: Item[]) {
        this.initStatMaximums(items);
    }

    private getKey(stat: ItemStat) {
        return `${stat.name} ${getStatUnitsString(stat)}`;
    }

    private addToStatMaximums(stat: ItemStat) {
        const key = this.getKey(stat);
        if (this.statMaximums[key] !== undefined) {
            this.statMaximums[key] = Math.max(this.statMaximums[key], stat.amount);
        } else {
            this.statMaximums[key] = stat.amount;
        }
    }

    private initStatMaximums(items: Item[]) {
        items.forEach((item) => {
            getAllItemStats(item).forEach((stat) => {
                this.addToStatMaximums(stat);
            });
        });
        // Include base item 
        // const weaponBonusStat = getTierBonusStat(4, 'weapon');
        // this.addToStatMaximums(weaponBonusStat);
        // const vitBonusStat = getTierBonusStat(4, 'vitality');
        // this.addToStatMaximums(vitBonusStat);
        // const spiritBonusStat = getTierBonusStat(4, 'spirit');
        // this.addToStatMaximums(spiritBonusStat);
    }

    calc(stat: ItemStat): number {
        const key = this.getKey(stat);
        const max = this.statMaximums[key];
        if (!max) {
          console.error(`Error while normalizing: stat ${key} has no max value`);
          return 0;
        }
        
        return stat.amount / max;
    }
}
