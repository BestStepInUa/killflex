export interface IMainAnimationState {
	isNewPageAnimation: boolean
	isHideOtherCards: boolean
	isHideHeading: boolean
}

export type TMainAnimationState = keyof IMainAnimationState

export interface IMainAnimation extends IMainAnimationState {
	changeState: (stateName: TMainAnimationState, value: boolean) => void
	resetState: () => void
}
