import { TFilter } from "@/app/filters/types/TFilter.types";

export interface IStore {
    currentFilter: TFilter;
    setCurrentFilter: (filter: TFilter) => void;
}