import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, fallbackValue: T) {
  const stored = window.localStorage.getItem(key);

  const [value, setValue] = useState<T>(
    stored ? JSON.parse(stored) : fallbackValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
