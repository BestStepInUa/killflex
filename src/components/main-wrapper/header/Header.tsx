'use client'

import { Bell, Grip, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import PageConfig from '@/config/page.config'

import { Menu } from './Menu'

const checkMediaPath = (pathname: string | null) => {
	return !pathname?.includes('/media/')
}

export function Header({ pathname }: { pathname: string | null }) {
	const [isShowMenu, setIsShowMenu] = useState(checkMediaPath(pathname))

	const clientPathName = usePathname()

	useEffect(() => {
		setIsShowMenu(checkMediaPath(clientPathName))
	}, [clientPathName])

	return (
		<header
			className={twMerge(
				'relative z-1 flex items-center justify-between p-7',
				!isShowMenu && 'text-white'
			)}
		>
			<div className="flex items-center gap-6">
				<Link
					className="hover:text-primary transition-colors"
					href={PageConfig.HOME}
				>
					<Grip />
				</Link>
				{isShowMenu && <Menu />}
			</div>

			<div className="flex items-center gap-6">
				<Search className="hover:text-primary transition-colors" />
				<Bell className="hover:text-primary transition-colors" />
				<Image
					src="/avatar-killflex.jpg"
					alt="Profile picture"
					width={40}
					height={40}
					className="rounded-full"
					priority={true}
					draggable={false}
				/>
			</div>
		</header>
	)
}
