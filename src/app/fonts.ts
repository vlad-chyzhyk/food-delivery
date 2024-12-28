import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '500', '700'],
	variable: '--font-roboto',
})

const fontsClassName = `${robotoFont.className}`

export default fontsClassName
