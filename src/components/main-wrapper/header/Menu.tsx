import Link from 'next/link'

import { menuData } from './menu.data'

export function Menu() {
	return (
		<ul className="flex flex-wrap items-center gap-10">
			{menuData.map((item, index) => (
				<li key={index}>
					<Link
						className="group hover:text-primary relative transition-colors"
						href={item.href}
					>
						{item.name}
						<span className="group-hover:bg-primary absolute top-8 left-0 h-0.5 w-full bg-transparent transition-colors" />
					</Link>
				</li>
			))}
		</ul>
	)
}
