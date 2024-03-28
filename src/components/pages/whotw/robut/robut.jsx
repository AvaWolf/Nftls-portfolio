const Robut = () => {
	return (
		<div className='flex flex-row gap-[112px] pt-[241px] px-[10px] pb-[200px]'>
			{/* left */}
			<div className='flex flex-col gap-[24px]'>
				<div className='bg-[#1E2746] w-[536px] h-[108px] flex flex-row justify-between items-center py-[24px] px-[32px] font-bold text-white text-[24px] rounded-2xl'>
					<div className='flex flex-row items-center'>
						<img
							src='/img_user/user1.svg'
							alt='Ronald Richards'
							className='w-[60px] h-[60px]'
						/>
						<p className='pl-[12px]'>Ronald Richards</p>
					</div>
					<img
						src='/top_line.svg'
						alt='Top Line'
						className='w-[99px] h-[59px]'
					/>
				</div>
				<div className='bg-[#1E2746] w-[536px] h-[108px] flex flex-row justify-between items-center py-[24px] px-[32px] font-bold text-white text-[24px] rounded-2xl ml-[24px]'>
					<div className='flex flex-row items-center'>
						<img
							src='/img_user/user2.svg'
							alt='kasdfi nasdms'
							className='w-[60px] h-[60px]'
						/>
						<p className='pl-[12px]'>kasdfi nasdm</p>
					</div>
					<img
						src='/top_line.svg'
						alt='Top Line'
						className='w-[99px] h-[59px]'
					/>
				</div>
				<div className='bg-[#1E2746] w-[536px] h-[108px] flex flex-row justify-between items-center py-[24px] px-[32px] font-bold text-white text-[24px] rounded-2xl'>
					<div className='flex flex-row items-center'>
						<img
							src='/img_user/user3.svg'
							alt='kasdfi nasdm'
							className='w-[60px] h-[60px]'
						/>
						<p className='pl-[12px]'>kasdfi nasdm</p>
					</div>
					<img
						src='/top_line.svg'
						alt='Top Line'
						className='w-[99px] h-[59px]'
					/>
				</div>
			</div>
			{/* right */}
			<div className='flex flex-col text-left gap-[24px]'>
				<p className='font-bold text-[48px] text-[#293241]'>
					The robust and highly customizable data analysis tool
				</p>
				<p className='text-[#7F848D] text-[24px]'>
					Using basic skills you can improve your business stuff with Around
					Using basic skills you can improve your business stuff with Around
					Using basic skills
				</p>
			</div>
		</div>
	)
}

export default Robut
