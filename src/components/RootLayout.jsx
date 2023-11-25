export default function RootLayout({ children }) {
  return (
    <div className="latte dark:frappe bg-crust text-text min-h-screen w-screen">
      <div className="bg-mantle min-h-screen max-w-md mx-auto">{children}</div>
    </div>
  );
}
