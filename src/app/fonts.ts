import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700'],
	variable: '--font-roboto',
})

const fontsClassName = `${robotoFont.className}`

export default fontsClassName
