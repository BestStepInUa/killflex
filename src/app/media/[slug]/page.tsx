import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { mediaData } from '@/media/media.data'

import { MediaPage } from './MediaPage/MediaPage'

export async function generateMetadata(
	{
		params
	}: {
		params: { slug: string }
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { slug } = params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return {
		title: mediaItem.title
	}
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return <MediaPage mediaItem={mediaItem} />
}
