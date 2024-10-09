import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import BuildRoot from "./routes/build/BuildRoot";
import BuildProvider from "./context/BuildProvider";
import { ITEMS } from "./config/items.config";

import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BuildProvider items={ITEMS}>
        <Root />
      </BuildProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "build",
        element: <BuildRoot />,
      },
      {
        path: "items",
        element: <div>item list</div>,
      },
      {
        path: "about",
        element: <div>about page</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
