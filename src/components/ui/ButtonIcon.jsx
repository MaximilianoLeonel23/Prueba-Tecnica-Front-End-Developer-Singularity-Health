export const ButtonIcon = ({ icon, iconAlt, onClick }) => {
	return (
		<button
			className='flex items-center justify-center w-10 h-10 bg-primary-red rounded-full p-2 hover:brightness-90 transition duration-150'
			type='button'
			onClick={onClick}
		>
			<img src={icon} alt={iconAlt} className='w-6 h-6 rounded-full' />
		</button>
	);
};
