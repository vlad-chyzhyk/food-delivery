import IconLocation from '@/app/assets/svg/IconLocation.svg'
import IconLogo from '@/app/assets/svg/IconLogo.svg'

const Header = () => {
	const userLocation = 'Poland Bus Stand, Dhaka'
	return (
		<div className='w-[92.5rem] h-[4.875rem] items-center'>
			<div>
				<IconLogo className='w-[12.313rem] h-[2.298rem]' />
				<div>
					Deliver to:
					<IconLocation className='w-[0.875rem] h-[1.563rem]' />
					Current Location
					{userLocation}
				</div>
			</div>
		</div>
	)
}

export default Header
