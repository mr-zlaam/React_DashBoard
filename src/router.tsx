import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/Login/LoginPage";
import HomePage from "@/pages/Home/HomePage";
import RegisterPage from "@/pages/auth/Login/RegisterPage";
export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);
