import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
	return new ImageResponse(<div></div>, {
		width: 1200,
		height: 1200,
	})
}
