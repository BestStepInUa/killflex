'use client'

import * as m from 'motion/react-m'

import { useMainAnimationStore } from '@/store/main-animation.store'

import { Carousel } from './carousel/Carousel'
import { Filters } from './filters/Filters'

export function Home() {
	const { isHideHeading } = useMainAnimationStore()

	return (
		<div className="mt-8 h-[86vh] overflow-y-hidden">
			<m.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: isHideHeading ? 0 : 1,
					translateY: isHideHeading ? -100 : 0
				}}
				transition={
					isHideHeading
						? {
								duration: 1.8,
								type: 'keyframes',
								ease: 'easeInOut'
							}
						: {}
				}
			>
				<h1 className="text-center text-4xl font-bold capitalize">
					Discover unlimited content
				</h1>
				<Filters />
			</m.div>
			<Carousel />
		</div>
	)
}
