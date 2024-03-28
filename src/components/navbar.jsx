import Link from 'next/link'

const NavBar = () => {
	return (
		<div className='sticky bg-[#0d1728] top-0 flex justify-around items-center pt-2 pb-2'>
			{/* Logo */}
			<div>
				<Link href='/'>
					<img
						src='/NftiseLogo.svg'
						alt='nftise-logo'
						className='w-[165px] h-[60px]'
					/>
				</Link>
			</div>
			<div className='flex gap-12 text-white'>
				<Link href='#home'>Home</Link>
				<Link href='#feature'>Feature</Link>
				<Link href='#whotw'>Who to work</Link>
				<Link href='#pricing'>Prising</Link>
			</div>
			{/* Button */}
			<div className=''>
				<button className='flex items-center justify-center bg-white rounded-[15px] w-[221px] h-[52px] text-[#293241]'>
					<p>Start free 14 trial</p>
					<img src='/rarrow.svg' />
				</button>
			</div>
		</div>
	)
}

export default NavBar
