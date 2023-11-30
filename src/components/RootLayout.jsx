import useLocalStorage from "../functions/useLocalStorage";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "system");
  return (
    <div
      className={
        "bg-crust text-text min-h-screen w-screen " +
        (theme == "light"
          ? "latte"
          : theme == "dark"
          ? "frappe"
          : "latte dark:frappe")
      }
    >
      <div className="bg-mantle min-h-screen max-w-md mx-auto">{children}</div>
    </div>
  );
}
