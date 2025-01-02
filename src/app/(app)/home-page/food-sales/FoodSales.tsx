import Image from 'next/image'
type Props = {
	salesProducts: {
		id: number
		productName: string
		imageSrc: string
		salesPer: string
		daysRemaining: string
	}[]
}

const FoodSales = ({ salesProducts }: Props) => {
	return (
		<div className='flex justify-center gap-4 w-[92.5rem] mx-auto py-[5rem]'>
			{salesProducts.map((item) => {
				return (
					<div key={item.id} className='flex flex-col gap-8'>
						<div className='relative w-[22.313rem] h-[18.813rem] rounded-[1rem]'>
							<Image
								src={item.imageSrc}
								fill
								alt='Product image'
								className='rounded-[1rem]'
							/>
							<div className='absolute bottom-0 left-0 text-white flex items-center bg-orange-300 rounded-tr-[2rem] rounded-bl-2xl px-[1.125rem] py-[0.625rem]'>
								<h2 className='text-[3.875rem]'>{item.salesPer}</h2>
								<div className='flex flex-col'>
									<h4 className='text-[2rem]'>%</h4>{' '}
									<h5 className='text-[1.375rem]'>Off</h5>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<p>{item.productName}</p>
							<div className='w-[12.75rem] rounded-lg bg-orange-100 px-4 py-2 text-orange-500'>{`${item.daysRemaining} Days Remaining`}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default FoodSales
