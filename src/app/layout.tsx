import type { Metadata } from 'next'
import fontsClassName from './fonts'
import './globals.css'

export const metadata: Metadata = {
	title: 'Tasty Way',
	description: 'food delivery',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={fontsClassName}>{children}</body>
		</html>
	)
}
