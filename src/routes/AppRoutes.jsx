import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkToken } from '../store/slices/auth/authThunk';
import { NotFoundPage } from '../pages/error/NotFoundPage';
import HomePage from '../pages/general/HomePage';
import { LocationPage } from '../pages/general/LocationPage';
import { BlogPage } from '../pages/general/BlogPage';
import { ServicesPage } from '../pages/general/ServicesPage';
import { AboutUsPage } from '../pages/general/AboutUsPage';
import { FranchiseWithUsPage } from '../pages/general/FranchiseWithUsPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { ErrorLayout } from '../layouts/ErrorLayout';

const AppRoutes = () => {
	const { isLogged } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkToken());
	}, [dispatch]);

	return (
		<Routes>
			<Route
				path='/auth'
				element={
					<PublicRoutes isLogged={isLogged}>
						<AuthLayout />
					</PublicRoutes>
				}
			>
				<Route path='/auth/login' element={<LoginPage />} />
			</Route>
			<Route
				path='/'
				element={
					<PrivateRoutes isLogged={isLogged}>
						<GeneralLayout />
					</PrivateRoutes>
				}
			>
				<Route path='/home' element={<HomePage />} />
				<Route path='/location' element={<LocationPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/about-us' element={<AboutUsPage />} />
				<Route path='/franchise-with-us' element={<FranchiseWithUsPage />} />
			</Route>

			<Route path='*' element={<ErrorLayout />}>
				<Route path='*' element={<NotFoundPage />}></Route>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
