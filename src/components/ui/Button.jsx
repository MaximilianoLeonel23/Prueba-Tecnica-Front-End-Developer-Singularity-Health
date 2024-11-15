export const Button = ({ btnText, type = 'primary', onClick }) => {
	const btnClass = {
		primary: 'primary-button',
		secondary: 'secondary-button',
	};

	return (
		<button className={btnClass[type]} onClick={onClick} aria-label='Click to take action'>
			{btnText}
		</button>
	);
};
