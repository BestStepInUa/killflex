'use client'

import * as m from 'motion/react-m'
import { getImageProps } from 'next/image'
import { CSSProperties } from 'react'

import { getBackgroundImage } from '@/utils/get-background-image'

import { Episodes } from './Episodes'
import { MediaDetails } from './MediaDetails'
import { Products } from './Products'
import { IMediaPage } from './types/IMediaPage.types'

export function MediaPage({ mediaItem }: IMediaPage) {
	const {
		props: { srcSet }
	} = getImageProps({
		alt: '',
		width: 1282,
		height: 540,
		src: mediaItem.backdrop,
		priority: true,

		quality: 100
	})
	const backgroundImage = getBackgroundImage(srcSet)
	const style: CSSProperties = {
		height: 540,
		width: '100%',
		backgroundImage,
		transformStyle: 'preserve-3d'
	}

	return (
		<div
			style={{
				perspective: '1500px'
			}}
		>
			<m.div
				initial={{
					clipPath: 'inset(6.5% 40.5% round 20px)',
					rotateX: 89,
					opacity: 0.3,
					translateY: 92
				}}
				animate={{
					clipPath: 'inset(0% 0% 0% 0%)',
					rotateX: 0,
					opacity: 1,
					translateY: 0
				}}
				transition={{
					type: 'keyframes',
					duration: 1.5,
					ease: 'easeInOut'
				}}
				style={style}
				className="relative left-0 z-0 -mt-25 bg-cover bg-center bg-no-repeat"
			>
				<div className="absolute bottom-0 left-0 z-1 flex w-full items-end justify-between p-8">
					<MediaDetails mediaItem={mediaItem} />
					<Products />
				</div>
			</m.div>
			<Episodes mediaItem={mediaItem} />
		</div>
	)
}
