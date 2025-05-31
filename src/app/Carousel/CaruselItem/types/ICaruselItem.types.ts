import { IMediaItem } from '../../types/IMediaItem.types.'

export interface ICarouselItem {
	index: number
	item: IMediaItem
	updateActiveCard: () => void
}

export interface IUseCircularIndex {
	index: number
	activeIndex: number
	totalItems: number
}
