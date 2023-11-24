import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">Page Not Found</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  );
}

export default ErrorPage;
