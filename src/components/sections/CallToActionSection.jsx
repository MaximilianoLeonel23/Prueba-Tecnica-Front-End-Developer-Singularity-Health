import yellowCircleSm from '../../assets/images/yellow-circle-sm.png';
import chihuahuaImg from '../../assets/images/chihuahua.png';

const CallToActionSection = ({ title, subtitle }) => {
	return (
		<section className='relative flex items-center justify-between px-56 py-32 mt-32 z-10'>
			<div className='w-full flex items-center justify-between gap-8 bg-blue-light rounded-xl p-8'>
				<div className='w-1/4'>
					<img src={chihuahuaImg} alt='Chihuahua' />
				</div>
				<div className='w-3/4 flex flex-col gap-8'>
					<h3 className='font-open-sans-bold text-secondary-yellow text-4xl'>{title}</h3>
					<p className='text-white text-xl'>{subtitle}</p>
					<button className='bg-white font-open-sans-bold text-primary-red px-6 py-4 rounded-full w-fit'>
						Join Now
					</button>
				</div>
			</div>
			<div className='absolute -top-24 -left-56 -z-10'>
				<img className='' src={yellowCircleSm} />
			</div>
		</section>
	);
};

export default CallToActionSection;
