import { IMediaItem } from "../../types/IMediaItem.types.";

export interface ICarouselItem {    
	index: number
	item: IMediaItem
	length: number
	updateActiveCard: () => void
}