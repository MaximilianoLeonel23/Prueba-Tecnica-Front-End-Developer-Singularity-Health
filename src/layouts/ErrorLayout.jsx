import { Outlet } from 'react-router-dom';

export const ErrorLayout = () => {
	return (
		<main className='bg-white flex items-center justify-center'>
			<Outlet />
		</main>
	);
};
