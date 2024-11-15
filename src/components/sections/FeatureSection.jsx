import InputWithButton from '../ui/InputWithButton';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { featuresData } from '../../utils/featureData';
import { CardWithIcon } from '../ui/CardWithIcon';
import homeBackground from '../../assets/images/home-background-1.png';

export const FeatureSection = ({
	title,
	subtitle,
	inputLabel,
	inputId,
	inputName,
	inputPlaceholder,
}) => {
	return (
		<section className='relative z-10'>
			<div className='container flex items-start justify-between gap-12 px-32 py-32 mt-16'>
				<div className='w-1/2 flex flex-col gap-8'>
					<h2 className='font-open-sans-bold text-primary-red text-5xl'>{title}</h2>
					<p className='text-gray-muted text-lg'>{subtitle}</p>
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
				<div className='grid grid-cols-2 gap-8'>
					{featuresData.map((feature, idx) => {
						return (
							<CardWithIcon
								key={idx}
								icon={feature.icon}
								iconAlt={feature.alt}
								content={feature.content}
							/>
						);
					})}
				</div>
			</div>
			<div className='w-full absolute left-0 top-0 right-0 -z-10'>
				<img className='w-full' src={homeBackground} alt='Blue waves background' />
			</div>
		</section>
	);
};
