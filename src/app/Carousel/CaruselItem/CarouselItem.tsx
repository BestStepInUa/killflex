'use client'

import { AnimatePresence } from 'motion/react'
import * as m from 'motion/react-m'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { mediaData } from '@/media/media.data'

import { useCarouselStore } from '@/store/carousel.store'
import { useMainAnimationStore } from '@/store/main-animation.store'

import { CarouselItemDetails } from '../CarouselItemDetails/CarouselItemDetails'

import { ICarouselItem } from './types/ICaruselItem.types'

export function CarouselItem({ item, index, updateActiveCard }: ICarouselItem) {
	const { activeCardId, setActiveCardId } = useCarouselStore()
	const isActive = activeCardId === item.id

	const angleStep = 360 / mediaData.length
	const angle = -90 + angleStep * index

	const radius = 430

	const { isNewPageAnimation } = useMainAnimationStore()

	const isActiveNewPageAnimation = isNewPageAnimation && isActive
	const isNotActiveNewPageAnimation = isNewPageAnimation && !isActive

	const activeIndex = mediaData.findIndex(media => media.id === activeCardId)
	const totalItems = mediaData.length

	const getCircularIndex = (
		index: number,
		activeInden: number,
		total: number
	) => {
		const directDistance = index - activeInden
		const wrappedDistance =
			directDistance > 0 ? directDistance - total : directDistance + total
		return Math.abs(directDistance) < Math.abs(wrappedDistance)
			? directDistance
			: wrappedDistance
	}

	const distanceFromActive = getCircularIndex(index, activeIndex, totalItems)

	const zIndex = isActive ? 20 : 10 - Math.abs(distanceFromActive)

	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
				zIndex,
				perspective: '1000px'
			}}
		>
			<m.button
				className={twMerge(
					'relative overflow-hidden rounded-xl transition will-change-transform',
					isActive && 'shadow-lg'
				)}
				style={{
					transformStyle: 'preserve-3d'
				}}
				initial={{
					filter: isActive
						? 'grayscale(0%) contrast(100%)'
						: 'grayscale(100%) contrast(75%)',
					scale: isActive ? 1.2 : 1
				}}
				animate={
					isActiveNewPageAnimation
						? {
								scale: 1.3,
								translateY: -180,
								rotateX: -98,
								filter: 'grayscale(0%) contrast(100%)'
							}
						: isNotActiveNewPageAnimation
							? {
									scale: 0,
									opacity: 0
								}
							: {
									scale: isActive ? 1.2 : 1,
									filter: isActive
										? 'grayscale(0%) contrast(100%)'
										: 'grayscale(100%) contrast(75%)'
								}
				}
				transition={{
					type: 'keyframes',
					duration:
						isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 1.3 : 0.4,
					ease:
						isActiveNewPageAnimation || isNotActiveNewPageAnimation
							? 'easeOut'
							: 'easeIn'
				}}
				onClick={updateActiveCard}
			>
				<AnimatePresence>
					{isActive && <CarouselItemDetails item={item} />}
				</AnimatePresence>
				<Image
					width={252}
					height={378}
					src={item.poster}
					alt={item.title}
					draggable="false"
					className="will-change-transform"
					priority={index > 6 ? false : true}
				/>
			</m.button>
		</div>
	)
}
