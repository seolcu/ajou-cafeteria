import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import RootLayout from "./components/RootLayout.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Cafeteria, { loader as cafeteriaLoader } from "./routes/Cafeteria.jsx";
import Settings from "./routes/settings.jsx";
import Shop, { loader as shopLoader } from "./routes/Shop.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cafeteria/:cafeteriaID",
    element: <Cafeteria />,
    loader: cafeteriaLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cafeteria/:cafeteriaID/shop/:shopID",
    element: <Shop />,
    loader: shopLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);
