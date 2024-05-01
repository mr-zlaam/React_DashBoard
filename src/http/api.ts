import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5173",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};
export const register = async (data: {
  email: string;
  password: string;
  username: string;
  displayName: string;
}) => {
  return api.post("/api/users/register", data);
};
