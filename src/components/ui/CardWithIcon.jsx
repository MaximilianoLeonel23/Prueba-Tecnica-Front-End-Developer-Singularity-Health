export const CardWithIcon = ({ content, icon, iconAlt }) => {
	return (
		<div className='min-w-[12rem] flex flex-col gap-8 items-center justify-center bg-white drop-shadow-gray p-8 rounded-2xl aspect-square'>
			<img src={icon} alt={iconAlt} className='w-1/2 h-1/2' />
			<p className='font-comfortaa-regular text-gray-dark text-center text-lg'>{content}</p>
		</div>
	);
};
