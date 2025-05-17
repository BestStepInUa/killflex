import { IStore } from "./interfaces/IStore";
import { create } from "zustand";

export const useFilterStore = create<IStore>((set) => ({
    currentFilter: "Popular",
    setCurrentFilter: (filter) => set({ currentFilter: filter })
}));