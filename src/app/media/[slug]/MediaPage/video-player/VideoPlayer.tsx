'use client'

import { ChevronLeft } from 'lucide-react'
import * as m from 'motion/react-m'
import ReactPlayer from 'react-player'

import { useVideoPlayerStore } from '@/store/video-player.store'

export function VideoPlayer() {
	const { videoUrl, setVideoUrl } = useVideoPlayerStore()

	return (
		<m.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.4 }}
			className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-white/50 backdrop-blur-lg"
		>
			<div className="relative aspect-video h-[85%] w-max overflow-hidden rounded-xl shadow-lg">
				<m.button
					initial={{
						opacity: 0,
						x: -15
					}}
					animate={{
						opacity: 1,
						x: 0
					}}
					transition={{
						duration: 0.2,
						delay: 0.4
					}}
					onClick={() => setVideoUrl('')}
					className="absolute top-7 left-7 z-20 cursor-pointer text-white"
				>
					<ChevronLeft />
				</m.button>
				<ReactPlayer
					url={videoUrl || ''}
					controls={false}
					width="100%"
					height="100%"
				/>
			</div>
		</m.div>
	)
}
