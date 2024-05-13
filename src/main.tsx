import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./styles/global.css";
import "remixicon/fonts/remixicon.css";

import { ReactQueryProvider } from "./providers";
import { AuthLayout, DashboardLayout, MainLayout } from "./layouts";
import { HomePage } from "./pages";

import { SignUpComp, SignInComp } from "./components/auth";

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
    children: [
      {
        path: "signup",
        element: <SignUpComp />,
      },
      {
        path: "signin",
        element: <SignInComp />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </ReactQueryProvider>
  </React.StrictMode>
);
