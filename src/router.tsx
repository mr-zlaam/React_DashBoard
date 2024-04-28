import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/auth/Login/Login";
export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
]);
