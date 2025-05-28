import { create } from "zustand";
import { IMainAnimation, IMainAnimationState } from "./types/IMainAnimation.types";


const initialState: IMainAnimationState = {
    isNewPageAnimation: false,
    isHideOtherCards: false,
    isHideHeading: false
}

export const useMainAnimationStore = create<IMainAnimation>(set => ({
    ...initialState,
    changeState: (stateName, value) => set({ [stateName]: value }),
    resetState: () => set(initialState)
}));