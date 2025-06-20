import type { Metadata } from 'next'
import { Main } from 'next/document'
import { Montserrat } from 'next/font/google'

import { MainWrapper } from '@/components/main-wrapper/MainWrapper'

import { Providers } from './Providers'
import './globals.css'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
	preload: true
})

export const metadata: Metadata = {
	title: 'KillFlex',
	description: 'More animated than the Netflix'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserrat.variable}>
				<Providers>
					<MainWrapper>{children}</MainWrapper>
				</Providers>
			</body>
		</html>
	)
}
