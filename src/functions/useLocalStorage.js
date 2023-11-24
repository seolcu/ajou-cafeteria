import { useEffect, useState } from "react";

function useLocalStorage(key, fallbackValue) {
  const stored = localStorage.getItem(key);

  const [value, setValue] = useState(
    stored ? JSON.parse(stored) : fallbackValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
