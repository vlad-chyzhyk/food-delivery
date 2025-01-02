import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const DeliveryLocation = () => {
	return (
		<div className='flex flex-col items-center h-[12.188rem] w-full bg-white rounded-[1rem]'>
			<div className='w-[50.5rem] flex flex-col '>
				<div>DeliveryPickup</div>
				<div className='flex justify-center gap-4 p-6'>
					<Input />
					<Button />
				</div>
			</div>
		</div>
	)
}

export default DeliveryLocation
