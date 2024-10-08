import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "build",
        element: <div>build tool</div>,
        children: [
          {
            path: "stats",
            element: <div>stat priorities</div>,
          },
          {
            path: "required-items",
            element: <div>required item selection</div>,
          },
          {
            path: "settings",
            element: <div>other build settings</div>,
          },
          {
            path: "result",
            element: <div>build result</div>,
          },
        ],
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
