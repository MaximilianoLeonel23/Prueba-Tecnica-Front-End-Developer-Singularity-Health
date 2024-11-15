import yellowCircleSm from '../../assets/images/yellow-circle-sm.png';
import chihuahuaImg from '../../assets/images/chihuahua.png';
import { Button } from '../ui/Button';

const CallToActionSection = ({ title, subtitle, btnText }) => {
	return (
		<section className='relative py-32 mt-32 z-10'>
			<div className='container  flex items-center px-32'>
				<div className='bg-call-to-action bg-center bg-cover bg-no-repeat  w-full flex items-center justify-between gap-8 rounded-xl p-8 drop-shadow-gray'>
					<div className='w-1/4 h-full'>
						<img src={chihuahuaImg} alt='Chihuahua image' />
					</div>
					<div className='w-3/4 flex flex-col justify-between gap-8'>
						<h3 className='font-open-sans-bold text-secondary-yellow text-4xl'>{title}</h3>
						<p className='text-white text-xl'>{subtitle}</p>
						<Button btnText={btnText} type='secondary' />
					</div>
				</div>
			</div>
			<div className='absolute -top-24 -left-56 -z-10'>
				<img src={yellowCircleSm} alt='Yellow circle' />
			</div>
		</section>
	);
};

export default CallToActionSection;
