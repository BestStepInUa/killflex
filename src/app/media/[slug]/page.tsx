import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { mediaData } from '@/media/media.data'

import { MediaPage } from './MediaPage/MediaPage'

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return mediaData.map(item => ({ slug: item.slug }))
}

export async function generateMetadata(
	{ params }: Props,
	_parent: ResolvingMetadata
): Promise<Metadata> {
	const { slug } = await params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return {
		title: mediaItem.title
	}
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug)

	if (!mediaItem) {
		notFound()
	}

	return <MediaPage mediaItem={mediaItem} />
}
