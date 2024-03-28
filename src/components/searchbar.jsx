const Searchbar = () => {
	return (
		<div className='mt-[32px] rounded-[100px] border-[1px] w-[648px] h-[82px] text-white]'>
			<form className='flex items-center justify-between'>
				<input
					type='text'
					placeholder='Input your mail...'
					className='pl-12 outline-0 bg-transparent text-white w-full h-[82px] text-[18px]'
				/>
				<button className='flex items-center justify-center font-bold text-[20px] bg-white text-[#293241] w-[211px] h-[82px] rounded-[100px]'>
					Try for Free
				</button>
			</form>
		</div>
	)
}

export default Searchbar
