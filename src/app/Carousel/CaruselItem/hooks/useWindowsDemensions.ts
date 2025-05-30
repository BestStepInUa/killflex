import { useEffect, useState } from 'react'

interface WindowDemansions {
	width: number | undefined
	height: number | undefined
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
}

// Хук для отримання розмірів вікна браузера
export function useWindowDimensions(): WindowDemansions {
	// Функція для отримання розмірів вікна
	const getWindowDimensions = (): WindowDemansions => {
		const width = window.innerWidth
		const height = window.innerHeight

		const isMobile = width ? width <= 480 : false
		const isTablet = width ? width > 480 && width <= 768 : false
		const isDesktop = width ? width > 768 : false

		return {
			width,
			height,
			isMobile,
			isTablet,
			isDesktop
		}
	}

	// Використовуємо useState для зберігання розмірів вікна
	const [windowDimensions, setWindowDimensions] = useState<WindowDemansions>(
		getWindowDimensions()
	)

	useEffect(() => {
		// Функція для обробки зміни розміру вікна
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions())
		}
		// Додаємо обробник події resize
		window.addEventListener('resize', handleResize)
		// Повертаємо функцію для очищення обробника події
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	// Повертаємо розміри вікна
	return windowDimensions
}
