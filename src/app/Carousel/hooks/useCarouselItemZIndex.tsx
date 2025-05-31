import { mediaData } from '@/media/media.data'

import { useCarouselStore } from '@/store/carousel.store'

import { useCircularIndex } from './useCircularIndex'

export function useCarouselItemZIndex({
	index,
	isActive
}: {
	index: number
	isActive: boolean
}) {
	const { activeCardId } = useCarouselStore()
	const activeIndex = mediaData.findIndex(media => media.id === activeCardId)
	const totalItems = mediaData.length
	const distanceFromActive = useCircularIndex({
		index,
		activeIndex,
		totalItems
	})
	const zIndex = isActive ? 20 : 10 - Math.abs(distanceFromActive)

	return { zIndex }
}
