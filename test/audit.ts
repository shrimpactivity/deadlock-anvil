import { ITEMS } from "../src/config/items.config";

/**
 * Print a sorted list of all stat names used in the items list config.
 * Can be used to cross reference with ItemStatName type and avoid duplicate values.
 */
function printAllItemStats() {
  console.log("=== ITEM STATS ===")
  const stats = new Set<string>();
  ITEMS.forEach(item => {
    item.stats.forEach(stat => {
      stats.add(stat.name);
    })
    if (item.passive) {
      item.passive.stats.forEach(stat => {
        stats.add(stat.name);
      })
    }
    if (item.active) {
      item.active.stats.forEach(stat => {
        stats.add(stat.name);
      })
    }
  });

  const sortedStats = Array.from(stats).sort((a, b) => a.localeCompare(b));
  sortedStats.forEach(stat => console.log(stat));
  console.log("");
}

function printAllItemConditions() {
  console.log("=== ITEM CONDITIONS ===")
  const conditions = new Set<string>();
  ITEMS.forEach(item => {
    if (item.passive?.condition) {
      conditions.add(item.passive.condition);
    }
    if (item.active?.condition) {
      conditions.add(item.active.condition);
    }
  })
  const sortedConditions = Array.from(conditions).sort((a, b) => a.localeCompare(b));
  sortedConditions.forEach(cond => console.log(cond));
  console.log("");
}

printAllItemStats();
printAllItemConditions();

