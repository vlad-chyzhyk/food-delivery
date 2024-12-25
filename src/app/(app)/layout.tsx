export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className='mx-auto'>{children}</div>
}
