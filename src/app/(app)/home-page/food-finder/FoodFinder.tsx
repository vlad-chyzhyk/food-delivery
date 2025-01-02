import Image from 'next/image'
import DeliveryLocation from './components/DeliveryLocation'
const FoodFinder = () => {
	return (
		<div>
			<div className='flex justify-start items-center w-full h-[38.75rem] relative overflow-hidden'>
				<Image
					fill
					src='/assets/common/FoodFinderBG.png'
					alt='background'
					className='z-[-3]'
				/>
				<div className='bottom-0 right-[1rem] w-[31.063rem] h-[27.5rem] absolute  shadow-black'>
					<div className='absolute w-full h-full rounded-full shadow-2xl bg-transparent bottom-[-1.25rem]  shadow-black'></div>
					<Image fill src='/assets/common/Pizza.png' alt='background' />
				</div>
				<div className='mx-auto w-[92.5rem] flex flex-col gap-8'>
					<div className='flex flex-col gap-[0.938rem]'>
						<h1 className='text-white'>Are you starving?</h1>
						<p className='text-body1 font-light'>
							Within a few clicks, find meals that are accessible near you
						</p>
					</div>
					<div className='w-[53.5rem] shadow-lg'>
						<DeliveryLocation />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FoodFinder
