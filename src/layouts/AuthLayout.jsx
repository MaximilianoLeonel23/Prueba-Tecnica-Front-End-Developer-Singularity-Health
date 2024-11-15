import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<main className='min-h-screen bg-white flex items-center justify-center'>
			<Outlet />
		</main>
	);
};
