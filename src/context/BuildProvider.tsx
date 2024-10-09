import { PropsWithChildren, useMemo } from "react";
import { Item } from "../types/item";
import { usePriorities } from "../hooks/use-priorities";
import { BuildContext } from "./use-build";
import { calculateAllItemPriorities } from "../lib/calc";

interface Props extends PropsWithChildren {
  items: Item[];
}

export default function BuildProvider({ items, children }: Props) {
  const priorities = usePriorities(items);

  const buildOrder = useMemo(
    () =>
      calculateAllItemPriorities(
        items,
        priorities.stats,
        priorities.conditions
      ),
    [items, priorities]
  );

  return (
    <BuildContext.Provider value={{ priorities, buildOrder }}>
      {children}
    </BuildContext.Provider>
  );
}
