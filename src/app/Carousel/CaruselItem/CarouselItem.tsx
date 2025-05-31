'use client'

import { motion as m } from 'framer-motion'
import { AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { useCarouselStore } from '@/store/carousel.store'
import { useMainAnimationStore } from '@/store/main-animation.store'

import { CarouselItemDetails } from '../CarouselItemDetails/CarouselItemDetails'
import { carouselItemAnimation } from '../animation/carousel-item.animation'
import { useCarouselItemAngle } from '../hooks/useCarouselItemAngle'
import { useCarouselItemZIndex } from '../hooks/useCarouselItemZIndex'

import { ICarouselItem } from './types/ICaruselItem.types'

export function CarouselItem({ item, index, updateActiveCard }: ICarouselItem) {
	const { angle, radius } = useCarouselItemAngle({ index })

	const { isNewPageAnimation } = useMainAnimationStore()
	const { activeCardId } = useCarouselStore()

	const isActive = activeCardId === item.id

	const { zIndex } = useCarouselItemZIndex({ index, isActive })

	return (
		<div
			className="absolute top-1/2 left-1/2"
			style={{
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
				zIndex,
				perspective: '1000px'
			}}
		>
			<m.button
				{...carouselItemAnimation(isActive, isNewPageAnimation)}
				className={twMerge(
					'relative overflow-hidden rounded-xl transition will-change-transform',
					isActive && 'shadow-lg'
				)}
				style={{
					transformStyle: 'preserve-3d'
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
