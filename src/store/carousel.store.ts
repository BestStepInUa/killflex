import { create } from 'zustand'

import { ICarousel } from './types/ICarousel.types'

export const useCarouselStore = create<ICarousel>(set => ({
	activeCardId: 4,
	setActiveCardId: id => set({ activeCardId: id })
}))
