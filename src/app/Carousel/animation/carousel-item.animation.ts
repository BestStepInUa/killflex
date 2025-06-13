import { HTMLMotionProps } from 'motion/react'

const FILTER_ON = 'grayscale(100%) contrast(75%)'
const FILTER_OFF = 'grayscale(0%) contrast(100%)'

export const carouselItemAnimation = (
	isActive: boolean,
	isNewPageAnimation: boolean
): HTMLMotionProps<'button'> => {
	const isActiveNewPageAnimation = isNewPageAnimation && isActive
	const isNotActiveNewPageAnimation = isNewPageAnimation && !isActive

	return {
		initial: {
			filter: isActive ? FILTER_OFF : FILTER_ON,
			scale: isActive ? 1.2 : 1
		},
		animate: isActiveNewPageAnimation
			? {
					scale: 1.3,
					y: -180,
					rotateX: -98,
					filter: FILTER_OFF
				}
			: isNotActiveNewPageAnimation
				? {
						scale: 0,
						opacity: 0
					}
				: {
						scale: isActive ? 1.2 : 1,
						filter: isActive ? FILTER_OFF : FILTER_ON
					},
		transition: {
			type: 'keyframes',
			duration:
				isActiveNewPageAnimation || isNotActiveNewPageAnimation ? 1.3 : 0.4,
			ease:
				isActiveNewPageAnimation || isNotActiveNewPageAnimation
					? 'easeOut'
					: 'easeIn'
		}
	}
}
