import InputWithButton from '../ui/InputWithButton';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { CardWithIcon } from '../ui/CardWithIcon';
import { howToData } from '../../utils/howToData';
import dashstroke from '../../assets/images/dashstroke-background.png';
import yellowCircleLg from '../../assets/images/yellow-circle-lg.png';

export const HowToSection = ({
	title,
	subtitle,
	inputLabel,
	inputId,
	inputName,
	inputPlaceholder,
}) => {
	return (
		<section className='relative  z-10'>
			<div className='container flex items-start justify-between gap-24 px-32 py-32'>
				<div className='relative w-1/2 flex flex-col'>
					{howToData.map((e, idx) => {
						return (
							<div key={idx} className={idx == 0 || idx % 2 == 0 ? 'self-start' : 'self-end'}>
								<CardWithIcon icon={e.icon} iconAlt={e.alt} content={e.content} />
							</div>
						);
					})}

					<div className='absolute inset-0 -z-10'>
						<img
							src={dashstroke}
							alt='Red dashstroke line'
							className='w-full h-full object-contain p-12'
						/>
					</div>
				</div>
				<div className='w-1/2 flex flex-col gap-8'>
					<h2 className='font-open-sans-bold text-primary-red text-4xl'>{title}</h2>
					<p className='text-gray-muted text-xl'>{subtitle}</p>
					<div className='flex flex-col gap-4'>
						<p className='font-segoe-ui-bold text-primary-red text-lg'>{inputLabel}</p>
						<div className='w-fit'>
							<InputWithButton
								inputId={inputId}
								inputName={inputName}
								inputPlaceholder={inputPlaceholder}
								icon={arrowRight}
								iconAlt='Arrow Right'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute -top-32 -right-1/3 -z-10'>
				<img src={yellowCircleLg} alt='Yellow circle' />
			</div>
		</section>
	);
};
