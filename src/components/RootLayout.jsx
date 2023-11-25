export default function RootLayout({ children }) {
  return (
    <div className="latte dark:frappe bg-crust text-text h-screen w-screen">
      <div className="bg-mantle h-screen max-w-md mx-auto">{children}</div>
    </div>
  );
}
