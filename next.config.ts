import type { NextConfig } from 'next'
import { withNextVideo } from 'next-video/process'

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: false
}

export default withNextVideo(nextConfig)
