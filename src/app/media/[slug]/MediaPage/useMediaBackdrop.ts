import { getImageProps } from 'next/image'
import { CSSProperties } from 'react'

import { getBackgroundImage } from '@/utils/get-background-image'

export function useMediaBackdrop(backdrop: string) {
	const {
		props: { srcSet }
	} = getImageProps({
		alt: '',
		width: 1282,
		height: 540,
		src: backdrop,
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

	return {
		style
	}
}
