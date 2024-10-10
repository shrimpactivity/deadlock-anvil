import { ITEMS } from "../src/config/items.config";

/**
 * Print a sorted list of all stat names used in the items list config.
 * Can be used to cross reference with ItemStatName type and avoid duplicate values.
 */
function getAllItemStats() {
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
  return Array.from(stats).sort((a, b) => a.localeCompare(b));
}

function getAllItemConditions() {
  const conditions = new Set<string>();
  ITEMS.forEach(item => {
    if (item.passive?.condition) {
      conditions.add(item.passive.condition);
    }
    if (item.active?.condition) {
      conditions.add(item.active.condition);
    }
  })
  return Array.from(conditions).sort((a, b) => a.localeCompare(b));
}

function getAllItemTags() {
  const tags = new Set<string>();
  ITEMS.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => tags.add(tag));
    }
  })
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

function getDuplicatesBetween(stats: string[], conditions: string[], tags: string[]) {
  const result = new Set<string>();
  stats.forEach(stat => {
    if (conditions.includes(stat)) {
      result.add(stat);
    }
    if (tags.includes(stat)) {
      result.add(stat);
    }
  });
  conditions.forEach(cond => {
    if (tags.includes(cond)) {
      result.add(cond);
    }
  })
  return Array.from(result).sort((a, b) => a.localeCompare(b));
}

// TODO:
// function getValuesNotInPriorityMapping(stats: string[], conditions: string[], tags: string[]) {

// }

function printResults() {
  const stats = getAllItemStats();
  const conditions = getAllItemConditions();
  const tags = getAllItemTags();

  const duplicates = getDuplicatesBetween(stats, conditions, tags);

  console.log("=== ITEM STATS ===")
  stats.forEach(v => console.log(v));
  console.log("");

  console.log("=== ITEM CONDITIONS ===")
  conditions.forEach(v => console.log(v));
  console.log("");

  console.log("=== ITEM TAGS ===")
  tags.forEach(v => console.log(v));
  console.log("");

  if (duplicates.length) {
    console.log("WARNING: The following names appear duplicated between item stats, conditions, and tags.")
    console.log("This may result in item over-prioritization.")
    duplicates.forEach(dup => console.log(dup));
  }
}

printResults();

