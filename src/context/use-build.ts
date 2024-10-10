import { createContext, useContext } from "react";
import { usePriorities } from "../hooks/use-priorities"

interface BuildContextType {
  priorities: ReturnType<typeof usePriorities>;
  buildOrder: Record<string, number>;
}

export const BuildContext = createContext<BuildContextType>(null!);

export function useBuild() {
  const context = useContext(BuildContext);
  if (!context) {
    throw new Error("useBuild must be in child of BuildProvider")
  }
  return context;
}