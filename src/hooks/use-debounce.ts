import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ? delay : 300);

    return () => {
      clearTimeout(timeout);
    }
  }, [value, delay]);

  return debouncedValue;
}