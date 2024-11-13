import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import { NotFoundPage } from '../pages/error/NotFoundPage';

export const AuthLayout = () => {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			<Route path='*' element={<NotFoundPage />} />

			</Routes>
		</div>
	);
};
