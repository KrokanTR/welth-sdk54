import { create } from "zustand";

interface UserStore {
  currency: string;
  setCurrency: (value: string) => void;
  needsOnboarding: boolean | null; //null = not yet determind
  setNeedsOnboarding: (value: boolean | null) => void;
}

export const useUseStore = create<UserStore>((set) => ({
  currency: "INR",
  setCurrency: (value) => set({ currency: value }),
  needsOnboarding: null,
  setNeedsOnboarding: (value) => set({ needsOnboarding: value }),
}));
