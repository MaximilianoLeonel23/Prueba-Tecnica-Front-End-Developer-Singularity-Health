const InputWithButton = ({ inputName, inputId, inputPlaceholder, icon, iconAlt }) => {
	return (
		<div className='flex items-center justify-between bg-white rounded-full p-2 drop-shadow-gray'>
			<input
				className='font-segoe-ui-regular text-lg text-gray-medium pl-4 outline-none'
				type='text'
				name={inputName}
				id={inputId}
				placeholder={inputPlaceholder}
			/>
			<button
				className='bg-primary-red rounded-full p-2 hover:brightness-90 transition duration-150'
				type='button'
			>
				<img src={icon} alt={iconAlt} className='w-6 h-6' />
			</button>
		</div>
	);
};

export default InputWithButton;
