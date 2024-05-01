/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
export interface TokenStore {
  token: string;
  setToken: (data: string) => void;
}
export const useTokenStore = create<TokenStore>()(
  devtools((set) => ({
    token: "",
    // setToken: set((state, data: string) => ({ token: data })),
    setToken: (data) => set(() => ({ token: data })),
  }))
);
