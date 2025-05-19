import { ICarousel } from "./types/ICarousel.types";
import { create } from "zustand";

export const useCarouselStore = create<ICarousel>(set => ({
    activeCardId: 4,
    setActiveCardId: id => set({ activeCardId: id })
}));