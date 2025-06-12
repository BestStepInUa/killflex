import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { IVideo } from '@/app/carousel/types/IMediaItem.types.'

import { useVideoPlayerStore } from '@/store/video-player.store'

import {
	episodeAnimation,
	episodeItemWhiteOverlayAnimation
} from '../animation'

interface Props {
	episode: IVideo
}

export function EpisodeItem({ episode }: Props) {
	const { setVideoUrl } = useVideoPlayerStore()
	const [isWhiteOverlay, setIsWhiteOverlay] = useState(false)

	const clickHandler = (videoUrl: string) => {
		setIsWhiteOverlay(true)
		setVideoUrl(videoUrl)

		setTimeout(() => {
			setIsWhiteOverlay(false)
		}, 250)
	}

	return (
		<m.button
			variants={episodeAnimation}
			initial="hidden"
			animate="visible"
			onClick={() => clickHandler(episode.videoUrl)}
		>
			<m.div
				className="relative aspect-video max-h-[136px] max-w-[243px] overflow-hidden rounded-lg"
				variants={episodeItemWhiteOverlayAnimation}
				initial="hidden"
				animate={isWhiteOverlay ? 'visible' : 'hidden'}
			>
				<Image
					src={episode.poster}
					alt={episode.title}
					fill
					sizes="243px 136px"
					draggable={false}
					priority
					className="object-cover"
				/>
			</m.div>

			{/* -- Or you can realize white overlay like this -- */}

			{/* <div className="relative aspect-video max-h-[136px] max-w-[243px] overflow-hidden rounded-lg">
				<AnimatePresence>
					{isWhiteOverlay && (
						<m.div
							{...episodeItemWhiteOverlayAnimation}
							className="absolute inset-0 z-10 bg-white/35"
						/>
					)}
				</AnimatePresence>
				<Image
					src={episode.poster}
					alt={episode.title}
					fill
					sizes="243px 136px"
					draggable={false}
					priority={true}
					className="object-cover"
				/>
			</div> */}
			<div className="mt-2 flex items-center gap-2 text-sm">
				<div>{episode.title}</div>
				<div className="opacity-50">• {episode.duration}m</div>
			</div>
		</m.button>
	)
}
