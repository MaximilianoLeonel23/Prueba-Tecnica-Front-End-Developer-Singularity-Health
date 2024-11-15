import golderRetrieverImg from '../../assets/images/golden-retriever.png';
import { Button } from '../ui/Button';

export const HeroSection = ({ title, subtitle, btnText, btnLabel }) => {
	return (
		<section className='container flex items-start justify-between gap-32 z-10'>
			<div className='w-1/2 flex flex-col py-32 gap-8'>
				<h1 className='font-museo-sans-bold text-white text-6xl'>{title}</h1>
				<p className='text-white text-lg'>{subtitle}</p>
				<div className='flex items-center gap-8'>
					<Button btnText={btnText} type='primary' />
					<p className='text-white'>{btnLabel}</p>
				</div>
			</div>
			<div className='w-1/2 flex items-start justify-center'>
				<img src={golderRetrieverImg} alt='Golden Retriever image' className='p-12' />
			</div>
		</section>
	);
};
