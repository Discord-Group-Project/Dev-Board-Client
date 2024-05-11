import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";
import { ReactQueryProvider } from "./providers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, DashboardLayout, MainLayout } from "./layouts";
import { HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router}></RouterProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);
