import Searchbar from '@/components/searchbar'

export default function Home() {
	return (
		<section className='bg-[#0d1728] flex flex-col items-center w-full pt-[69px]'>
			<p className='text-[24px]  text-white '>
				Using basic skills you can improve your business stuff with Around
			</p>
			<h1 className='pt-[28px] font-bold  text-[72px]/[138%] text-white'>
				One Dashboard to Manage <br />
				all Your businesses
			</h1>
			<Searchbar />
			<img
				src='/42_Dashboard 2.svg'
				alt='Dashboard'
				className='pt-[68px]'
			/>
		</section>
	)
}
