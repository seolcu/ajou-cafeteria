import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import RootLayout from "./components/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Cafeteria from "./routes/Cafeteria.jsx";
import Settings from "./routes/settings.jsx";
import Shop from "./routes/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cafeteria/:cafeteriaID",
    element: <Cafeteria />,
  },
  {
    path: "/cafeteria/:cafeteriaID/shop/:shopID",
    element: <Shop />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);
