export const ButtonIcon = ({ icon, iconAlt, onClick }) => {
	return (
		<button className='btn-icon' type='button' onClick={onClick}>
			<img src={icon} alt={iconAlt} className='w-full h-full object-fill' />
		</button>
	);
};
