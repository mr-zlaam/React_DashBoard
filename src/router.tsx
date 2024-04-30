import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import HomePage from "@/pages/Home/HomePage";
import RegisterPage from "@/pages/auth/RegisterPage";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import BookPage from "@/pages/Books/BookPage";
import AuthLayout from "@/layouts/AuthLayout";
export const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
