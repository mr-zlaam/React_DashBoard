/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

export const useTokenStore = create((set) => ({
  token: "",
  setToken: () => set((_: any, data: string) => ({ token: data })),
}));
