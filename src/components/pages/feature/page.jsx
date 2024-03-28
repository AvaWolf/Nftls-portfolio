import Rating from './rating'

const FeaturePage = () => {
	return (
		<section
			id='feature'
			className='pt-[135px] bg-white flex flex-col items-center w-full'
		>
			<p className='font-bold  text-5xl text-[#293241]'>
				Customers have consistently
				<br /> rated Around 4.7/5 stars
			</p>

			{/* Card */}
			<Rating />
		</section>
	)
}

export default FeaturePage