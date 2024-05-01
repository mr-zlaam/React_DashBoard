/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export interface TokenStore {
  token: string;
  setToken: (data: string) => void;
}
export const useTokenStore = create<TokenStore>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        setToken: (data) => set(() => ({ token: data })),
      }),
      { name: "token_ustad" }
    )
  )
);
