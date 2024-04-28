import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/Login/LoginPage";
import HomePage from "@/pages/Home/HomePage";
export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
]);
