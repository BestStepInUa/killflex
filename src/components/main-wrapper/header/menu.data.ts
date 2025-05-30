import Page from '@/app/media/[slug]/page'

import PageConfig from '@/config/page.config'

import { IMenuItem } from './types/IMenuItem.types'

export const menuData: IMenuItem[] = [
	{
		name: 'Home',
		href: PageConfig.HOME
	},
	{
		name: 'Movies',
		href: PageConfig.MOVIES
	},
	{
		name: 'TV Shows',
		href: PageConfig.TV_SHOWS
	},
	{
		name: 'Watchlist',
		href: PageConfig.WATCHLIST
	}
]
