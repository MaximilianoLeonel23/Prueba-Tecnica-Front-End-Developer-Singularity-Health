import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
	const { isLogged } = useSelector(state => state.auth);

	return (
		<Routes>
			<Route
				path='/auth/*'
				element={
					<PublicRoutes isLogged={isLogged}>
						<AuthLayout />
					</PublicRoutes>
				}
			></Route>
			<Route
				path='/*'
				element={
					<PrivateRoutes isLogged={isLogged}>
						<GeneralLayout />
					</PrivateRoutes>
				}
			></Route>
		</Routes>
	);
};

export default AppRoutes;
