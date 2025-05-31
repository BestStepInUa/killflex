'use client'

import { motion as m } from 'framer-motion'

import { backdropAnimation } from './animation'
import { Episodes } from './episodes/Episodes'
import { MediaDetails } from './media-details/MediaDetails'
import { Products } from './products/Products'
import { IMediaPage } from './types/IMediaPage.types'
import { useMediaBackdrop } from './useMediaBackdrop'

export function MediaPage({ mediaItem }: IMediaPage) {
	const { style } = useMediaBackdrop(mediaItem.backdrop)

	return (
		<div
			style={{
				perspective: '1500px'
			}}
		>
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
