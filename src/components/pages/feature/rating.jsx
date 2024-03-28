const Rating = () => {
	return (
		<div className='text-[#293241] flex gap-[24px] pt-[70px]'>
			<div className='h-[222px] w-[424px] border-gray-200 border flex flex-col gap-8 items-center text-center text-lg'>
				<img src='/rating.svg' alt='rating' className='w-[152px] h-[24px]' />
				<p>
					Maecenas convallis non sapien in commodo. Nulla semper pulvinar
					luctus. Proin luctus.
				</p>
				<img src='/google.svg' alt='google' />
			</div>
			<div className='h-[222px] w-[424px] border-gray-200 border flex flex-col gap-8 items-center text-center text-lg'>
				<img src='/rating.svg' alt='rating' className='w-[152px] h-[24px]' />
				<p>
					Maecenas convallis non sapien in commodo. Nulla semper pulvinar
					luctus. Proin luctus.
				</p>
				<img src='/amazon.svg' alt='amazon' />
			</div>
			<div className='h-[222px] w-[424px] border-gray-200 border flex flex-col gap-8 items-center text-center text-lg'>
				<img src='/rating.svg' alt='rating' className='w-[152px] h-[24px]' />
				<p>
					Maecenas convallis non sapien in commodo. Nulla semper pulvinar
					luctus. Proin luctus.
				</p>
				<img src='/spotify.svg' alt='spotify' />
			</div>
		</div>
	)
}

export default Rating
