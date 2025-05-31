import * as m from 'motion/react-m'
import Image from 'next/image'
import { useState } from 'react'

import { episodeAnimation, episodesAnimation } from '../animation'
import { IEpisodes } from '../types/IMediaPage.types'

export function Episodes({ mediaItem }: IEpisodes) {
	const [currentSeason] = useState(mediaItem.seasons[0])

	return (
		<div className="px-8 py-6">
			<m.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				className="flex items-center"
			>
				<h2 className="border-r border-r-slate-400/30 pr-2 text-lg font-medium">
					Episodes
				</h2>
				<div className="ml-2 text-sm opacity-50">{currentSeason.title}</div>
			</m.div>

			<m.div
				variants={episodesAnimation}
				initial="hidden"
				animate="visible"
				className="mt-3.5 grid grid-cols-6 gap-6"
			>
				{currentSeason.episodes.map(episode => (
					<m.div
						key={episode.id}
						variants={episodeAnimation}
					>
						<div className="relative aspect-video max-h-[136px] max-w-[243px] overflow-hidden rounded-lg">
							<Image
								src={episode.poster}
								alt={episode.title}
								fill
								sizes="243px 136px"
								className="object-cover"
								draggable={false}
								priority={true}
							/>
						</div>
						<div className="mt-2 flex items-center gap-2 text-sm">
							<div>{episode.title}</div>
							<div className="opacity-50">• {episode.duration}m</div>
						</div>
					</m.div>
				))}
			</m.div>
		</div>
	)
}
