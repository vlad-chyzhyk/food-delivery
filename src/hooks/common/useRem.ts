import { useEffect, useState } from 'react'

type Props = {}

const useRem = (props: Props) => {
	const [pxInRem, setPxInRem] = useState(16)

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			const pxInVw = width / 100
			setPxInRem(pxInVw)
		}
	}, [])

	return () => {
		return window.addEventListener('resize', handleResize)
	}
}

export default useRem
