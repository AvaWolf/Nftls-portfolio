import Analysise from './analytise/analytise'
import Card from './card'
import Robut from './robut/robut'

const WhotwPage = () => {
	return (
		<section
			id='whotw'
			className='pt-[120px] bg-white flex flex-col items-center w-full text-[#293241]'
		>
			<p className='font-bold text-[48px]'>How Does It Work?</p>
			<span className='text-[24px] text-[##7F848D] pt-6'>
				Using basic skills you can improve your business stuff with Around
			</span>

			<Card />
			<Robut />
			<Analysise />
		</section>
	)
}

export default WhotwPage
