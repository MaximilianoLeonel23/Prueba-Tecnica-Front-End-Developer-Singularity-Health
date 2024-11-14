import { useState } from 'react';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import { ButtonIcon } from './ButtonIcon';

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
		<div className='w-full flex items-center'>
			<div className='flex items-center justify-between gap-16 w-full'>
				<ButtonIcon icon={arrowLeft} iconAlt='Arrow Left' onClick={prevItem} />
				<div className='relative flex items-center justify-center h-64 w-full'>
					{items &&
						items.map((item, index) => {
							const offset = getIndex(index - currentIndex);

							if (offset > 1 && offset < totalItems - 1) return null;

							const isCenter = offset === 0;
							const isLeft = offset === totalItems - 1;
							const isRight = offset === 1;

							return (
								<div
									key={index}
									className={`absolute transition-transform duration-500 ease-in-out ${
										isCenter ? 'scale-100 z-20' : 'scale-75 z-10'
									} ${isLeft ? '-translate-x-1/2' : ''} ${isRight ? 'translate-x-1/2' : ''}`}
								>
									<div
										className={`flex flex-col items-center justify-center gap-4 w-[27.5rem] ${
											index % 2 == 1 && index != 0 ? 'bg-blue-card' : 'bg-red-card'
										} bg-cover bg-center bg-no-repeat shadow-md rounded-xl p-8 aspect-video`}
									>
										<img src={item.avatar} className='w-20 h-20 rounded-full' />
										<h4 className='font-open-sans-regular text-gray-light text-xl'>
											{item.first_name + ' ' + item.last_name}
										</h4>
										<p className='font-open-sans-regular text-gray-light text-center'>
											{'"'}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi blanditiis
											fugiat? Amet, sit illum recusandae beatae vero quibusdam{'"'}
										</p>
									</div>
								</div>
							);
						})}
				</div>
				<ButtonIcon icon={arrowRight} iconAlt='Arrow Right' onClick={nextItem} />
			</div>

			<div></div>
		</div>
	);
};

export default Carousel;
