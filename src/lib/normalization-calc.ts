import { Item, ItemStat } from "../types/item";
import { getAllItemStats, getStatUnitsString } from "./utils";

/**
 * We need to make sure different stats with different units are
 * treated somewhat similarly for priority calculations. 
 * 
 * We use a min-max scaling to normalize between 0 and 1.
 */

interface StatRanges {
  [key: string]: { // Stat Name - Units
    min: number;
    max: number;
  }
}

export class NormalizationCalculator {
  private statRanges: StatRanges = {};


  constructor(items: Item[]) {
    this.initStatRanges(items);
  }

  private getStatRangeKey(stat: ItemStat) {
    return `${stat.name} ${getStatUnitsString(stat)}`
  }

  private addStatToStatRange(stat: ItemStat) {
    const key = this.getStatRangeKey(stat);
    const range = this.statRanges[key]
    if (range) {
      range.min = Math.min(range.min, stat.amount);
      range.max = Math.min(range.max, stat.amount);
    } else {
      this.statRanges[key] = {
        min: stat.amount,
        max: stat.amount
      }
    }
  }

  private initStatRanges(items: Item[]) {
    items.forEach(item => {
      getAllItemStats(item).forEach(stat => {
        this.addStatToStatRange(stat);
      })
    })
  }

  normalizeStat(stat: ItemStat): number {
    const key = this.getStatRangeKey(stat);
    
  }
}