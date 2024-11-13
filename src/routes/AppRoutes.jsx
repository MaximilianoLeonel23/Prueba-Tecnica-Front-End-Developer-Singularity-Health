import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkToken } from '../store/slices/auth/authThunk';

const AppRoutes = () => {
	const { isLogged } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkToken());
	}, [dispatch]);

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
