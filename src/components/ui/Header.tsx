import IconLocation from '@/app/assets/svg/IconLocation.svg'
import IconLogo from '@/app/assets/svg/IconLogo.svg'

type Props = {
	userLocation: string
}
const Header = ({ userLocation }: Props) => {
	return (
		<div className='mx-auto w-[92.5rem] h-[4.875rem] flex items-center'>
			<div className='w-full flex justify-between  items-center'>
				<IconLogo className='w-[12.313rem] h-[2.298rem]' />
				<div className='flex gap-[0.75rem]'>
					<p className='text-body2'>Deliver to:</p>
					<div className='flex gap-[0.563rem]'>
						<IconLocation className='w-[0.875rem] h-[1.563rem]' />
						<div className='flex gap-1'>
							<p className='font-normal'>Current Location</p>
							<p>{userLocation}</p>
						</div>
					</div>
				</div>
				<div className='flex gap-3'>
					<div>Search</div>
					{/* TODO Auth */}
					<div>Login</div>
				</div>
			</div>
		</div>
	)
}

export default Header
