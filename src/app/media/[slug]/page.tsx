import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { mediaData } from '@/media/media.data'

import { MediaPage } from './MediaPage/MediaPage'

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const params = await props.params
	const { slug } = params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return {
		title: mediaItem.title
	}
}

export default async function Page(props: { params: { slug: string } }) {
	const params = await props.params
	const { slug } = params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return <MediaPage mediaItem={mediaItem} />
}
