import { HTMLMotionProps, Variants } from 'motion/react'

export const episodesAnimation: Variants = {
	hidden: { opacity: 0.5 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			duration: 1,
			ease: 'linear',
			delayChildren: 0.8
		}
	}
}

export const episodeAnimation: Variants = {
	hidden: { opacity: 0, x: 200 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			type: 'spring',
			bounce: 0.27
		}
	}
}

export const backdropAnimation: HTMLMotionProps<'div'> = {
	initial: {
		clipPath: 'inset(6.5% 40.5% round 20px)',
		rotateX: 89,
		opacity: 0.3,
		y: 92
	},
	animate: {
		clipPath: 'inset(0% 0% 0% 0%)',
		rotateX: 0,
		opacity: 1,
		y: 0
	},
	transition: {
		type: 'keyframes',
		duration: 1.5,
		ease: 'easeInOut'
	}
}

export const episodeItemWhiteOverlayAnimation: Variants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 0,
		transition: { duration: 0.4 }
	}
}

// -- episodeItemWhiteOverlayAnimation for another white overlay realization --

// export const episodeItemWhiteOverlayAnimation: HTMLMotionProps<'div'> = {
// 	initial: { opacity: 0 },
// 	animate: { opacity: 1 },
// 	exit: { opacity: 0 },
// 	transition: { duration: 0.4 }
// }
