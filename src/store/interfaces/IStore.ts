import { TFilter } from "@/app/filters/types/TFilter";

export interface IStore {
    currentFilter: TFilter;
    setCurrentFilter: (filter: TFilter) => void;
}