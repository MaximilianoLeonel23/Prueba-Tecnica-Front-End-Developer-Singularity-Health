import InputWithButton from '../ui/InputWithButton';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { CardWithIcon } from '../ui/CardWithIcon';
import { howToData } from '../../utils/howToData';
import dashstroke from '../../assets/images/dashstroke-background.png';
import yellowCircleLg from '../../assets/images/yellow-circle-lg.png';

export const HowToSection = ({ title, subtitle }) => {
	return (
		<section className='relative flex items-start justify-between gap-16 px-56 py-32 z-10'>
			<div className='relative w-1/2 flex flex-col'>
				{howToData.map((e, idx) => {
					return (
						<div key={idx} className={idx == 0 || idx % 2 == 0 ? 'self-start' : 'self-end'}>
							<CardWithIcon icon={e.icon} iconAlt={e.alt} content={e.content} />
						</div>
					);
				})}

				<div className='absolute inset-0 -z-10'>
					<img src={dashstroke} alt='Dashstroke line' className='w-full h-full object-contain p-12' />
				</div>
			</div>
			<div className='w-1/2 flex flex-col gap-8'>
				<h2 className='font-open-sans-bold text-primary-red text-4xl'>{title}</h2>
				<p className='text-gray-muted text-xl'>{subtitle}</p>
				<div className='flex flex-col gap-4'>
					<p className='font-segoe-ui-bold text-primary-red text-lg'>
						Enter Your Location and Fetch Out Services
					</p>
					<div className='w-fit'>
						<InputWithButton
							inputId='zip-code'
							inputName='zip-code'
							inputPlaceholder='Zip Code'
							icon={arrowRight}
							iconAlt='Arrow Right'
						/>
					</div>
				</div>
			</div>
			<div className='absolute -top-32 -right-1/3 -z-10'>
				<img className='' src={yellowCircleLg} />
			</div>
		</section>
	);
};
