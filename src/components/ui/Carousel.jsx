import { useState } from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import { ButtonIcon } from './ButtonIcon';
import { CarouselCard } from './CarouselCard';

const Carousel = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalItems = items?.length;

	const nextItem = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
	};

	const prevItem = () => {
		setCurrentIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
	};

	const getIndex = index => (index + totalItems) % totalItems;

	return (
		<div className='w-full flex items-center justify-between'>
			<ButtonIcon icon={arrowLeft} iconAlt='Arrow Left' onClick={prevItem} />
			<div className='relative flex items-center justify-center h-64 w-full px-32'>
				{items &&
					items.map((item, index) => {
						const offset = getIndex(index - currentIndex);

						return (
							<CarouselCard
								key={index}
								index={index}
								offset={offset}
								totalItems={totalItems}
								item={item}
							/>
						);
					})}
			</div>
			<ButtonIcon icon={arrowRight} iconAlt='Arrow Right' onClick={nextItem} />
		</div>
	);
};

export default Carousel;
