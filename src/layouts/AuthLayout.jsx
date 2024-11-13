import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { NotFoundPage } from '../pages/error/NotFoundPage';

export const AuthLayout = () => {
	return (
		<main className='bg-white'>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</main>
	);
};
