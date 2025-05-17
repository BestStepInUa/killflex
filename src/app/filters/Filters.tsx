'use client';

import {twMerge} from "tailwind-merge";
import { filtersData } from "./filters.data";
import { useFilterStore } from "@/store/store";

export function Filters() {
  const { currentFilter, setCurrentFilter } = useFilterStore()

  return (
    <div className="text-center mt-10 gap-3 border border-slate-400/30 w-max mx-auto rounded">
      {filtersData.map((filter) => (
        <button
          key={filter}
          className={twMerge(
            "px-4 py-2 rounded-lg font-medium bg-transparent",
            filter === currentFilter && 'bg-primary'
            
          )}
          type="button"
          onClick={() => setCurrentFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}