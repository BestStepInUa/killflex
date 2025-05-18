import { TFilter } from "@/app/filters/types/TFilter.types";

export interface ICarousel {
    activeCardId: number;
    setActiveCardId: (id: number) => void;
}