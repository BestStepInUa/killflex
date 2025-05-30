import { ISeason } from '@/app/carousel/types/IMediaItem.types.'

import { episodes } from './episodes.data'

export const seasons: ISeason[] = [
	{
		id: 1,
		episodes,
		slug: 'season-1',
		title: 'Season 1'
	},
	{
		id: 2,
		episodes,
		slug: 'season-2',
		title: 'Season 2'
	},
	{
		id: 3,
		episodes,
		slug: 'season-3',
		title: 'Season 3'
	},
	{
		id: 4,
		episodes,
		slug: 'season-4',
		title: 'Season 4'
	}
]
