import { create } from 'zustand'

import { IStore } from './types/IStore.types'

export const useFilterStore = create<IStore>(set => ({
	currentFilter: 'Popular',
	setCurrentFilter: filter => set({ currentFilter: filter })
}))
