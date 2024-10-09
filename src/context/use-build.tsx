import { useState } from "react";
import { StatPriority } from "../types/priority";

interface BuildContextType {
  
}

export function useBuild() {
  const [statPriorities, setStatPriorities] = useState<StatPriority>({});
}