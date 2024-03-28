import CardsItems from './cards'

const PricingPage = () => {
	return (
		<sectiong
			id='pricing'
			className='pt-[150px] bg-[#F0F9FF] flex flex-col items-center w-full h-[1020px]'
		>
			<p className='font-bold text-[48px] text-[#293241]'>Pricing</p>
			<p className='text-[24px] text-[#7F848D]'>
				Using basic skills you can improve your business stuff with Around
			</p>

			{/* Cards */}
			<div className='flex flex-row gap-6 mt-[34px]'>
				<CardsItems />
			</div>
		</sectiong>
	)
}

export default PricingPage
