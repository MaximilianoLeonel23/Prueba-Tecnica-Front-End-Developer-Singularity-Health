export const ButtonIcon = ({ icon, iconAlt, onClick }) => {
	return (
		<button className='btn-icon' type='button' onClick={onClick} aria-label='Click to take action'>
			<img src={icon} alt={iconAlt} className='w-full h-full object-fill' />
		</button>
	);
};
