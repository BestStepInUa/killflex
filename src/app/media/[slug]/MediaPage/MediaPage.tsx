'use client'

import { AnimatePresence, motion as m } from 'framer-motion'
import { CSSProperties, useLayoutEffect } from 'react'

import { useVideoPlayerStore } from '@/store/video-player.store'

import { backdropAnimation } from './animation'
import { Episodes } from './episodes/Episodes'
import { MediaDetails } from './media-details/MediaDetails'
import { Products } from './products/Products'
import { IMediaPage } from './types/IMediaPage.types'
import { useMediaBackdrop } from './useMediaBackdrop'
import { VideoPlayer } from './video-player/VideoPlayer'

export function MediaPage({ mediaItem }: IMediaPage) {
	const { style } = useMediaBackdrop(mediaItem.backdrop)

	const { videoUrl, setVideoUrl } = useVideoPlayerStore()

	useLayoutEffect(() => {
		setVideoUrl('')
	}, [])

	const styleWhenOverlayOpened: CSSProperties = videoUrl
		? {
				position: 'relative',
				zIndex: 2
			}
		: ({} as CSSProperties)

	return (
		<div
			style={{
				perspective: '1500px',
				...styleWhenOverlayOpened
			}}
		>
			<AnimatePresence>{videoUrl && <VideoPlayer />}</AnimatePresence>
			<m.div
				{...backdropAnimation}
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
