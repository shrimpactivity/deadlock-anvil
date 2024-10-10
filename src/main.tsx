import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import BuildRoot from "./routes/build/BuildRoot";
import ItemsPage from "./routes/ItemsPage";
import AboutPage from "./routes/AboutPage";
import BuildProvider from "./context/BuildProvider";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <BuildProvider>
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
                element: <ItemsPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
