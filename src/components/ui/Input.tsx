import IconLocation from '@/app/assets/svg/IconLocation.svg'

const Input = () => {
	return (
		<div className='w-full flex relative items-center'>
			<input
				type='text'
				placeholder='Enter Your Address'
				className='w-full h-[3.063rem] pl-10 outline-none bg-gray-100 rounded-lg '
			/>
			<IconLocation className='absolute left-2 w-6 h-6' />
		</div>
	)
}

export default Input
