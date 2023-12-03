import { useEffect, useState } from "react";

export default function useTheme() {
  const stored = localStorage.getItem("theme");
  const [theme, setTheme] = useState(stored ? stored : "system");
  useEffect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return [theme, setTheme];
}
