export default function setTheme(theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
  } else if (theme === "light") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
}
