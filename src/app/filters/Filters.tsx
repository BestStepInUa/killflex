'use client'

import { twMerge } from 'tailwind-merge'

import { useFilterStore } from '@/store/store'

import { filtersData } from './filters.data'

export function Filters() {
	const { currentFilter, setCurrentFilter } = useFilterStore()

	return (
		<div className="mx-auto mt-10 w-max gap-3 rounded border border-slate-400/30 text-center">
			{filtersData.map(filter => (
				<button
					key={filter}
					className={twMerge(
						'rounded-lg bg-transparent px-4 py-2 font-medium',
						filter === currentFilter && 'bg-primary'
					)}
					type="button"
					onClick={() => setCurrentFilter(filter)}
				>
					{filter}
				</button>
			))}
		</div>
	)
}
