import { IUseCircularIndex } from '../CaruselItem/types/ICaruselItem.types'

export function useCircularIndex({
	index,
	activeIndex,
	totalItems
}: IUseCircularIndex): number {
	const directDistance = index - activeIndex
	const wrappedDistance =
		directDistance > 0
			? directDistance - totalItems
			: directDistance + totalItems
	return Math.abs(directDistance) < Math.abs(wrappedDistance)
		? directDistance
		: wrappedDistance
}
