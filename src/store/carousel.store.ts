import { ICarousel } from "./types/ICarousel.types";
import { create } from "zustand";

export const useCarouselStore = create<ICarousel>(set => ({
    activeCardId: 1,
    setActiveCardId: id => set({ activeCardId: id })
}));