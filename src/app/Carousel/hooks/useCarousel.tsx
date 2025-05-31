import { useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

import { mediaData } from '@/media/media.data'

import { useCarouselStore } from '@/store/carousel.store'
import { useMainAnimationStore } from '@/store/main-animation.store'

import PageConfig from '@/config/page.config'

import { IUseCarousel } from '../types/IUseCarousel.types'

const getCardIndex = (cardId: number) =>
	mediaData.findIndex(item => item.id === cardId)

export function useCarousel({ setRotateAngle }: IUseCarousel) {
	const { activeCardId, setActiveCardId } = useCarouselStore()
	const { changeState, resetState, isHideOtherCards } = useMainAnimationStore()

	useLayoutEffect(() => {
		resetState()
		setActiveCardId(4)
	}, [])

	const router = useRouter()

	useEffect(() => {
		mediaData.forEach(media => {
			router.prefetch(PageConfig.MEDIA(media.slug))
		})
	}, [])

	const totalCards = mediaData.length
	const rotateAngleStep = 360 / totalCards

	const updateActiveCard = (id: number) => {
		if (activeCardId === id) {
			const url = PageConfig.MEDIA(mediaData[getCardIndex(id)].slug)
			// router.prefetch(url);

			changeState('isNewPageAnimation', true)
			changeState('isHideHeading', true)
			changeState('isHideOtherCards', true)

			setTimeout(() => {
				router.push(url)
			}, 1300)

			return
		}

		const oldIndex = getCardIndex(activeCardId)
		const newIndex = getCardIndex(id)

		let diff = newIndex - oldIndex

		if (diff > totalCards / 2) {
			diff -= totalCards
		} else if (diff < -totalCards / 2) {
			diff += totalCards
		}

		const newRotateAngle = -(diff * rotateAngleStep)

		setRotateAngle(prev => prev + newRotateAngle)
		setActiveCardId(id)
	}
	return { updateActiveCard, isHideOtherCards }
}
