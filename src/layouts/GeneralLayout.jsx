import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/general/HomePage';
import { LocationPage } from '../pages/general/LocationPage';
import { ServicesPage } from '../pages/general/ServicesPage';
import { BlogPage } from '../pages/general/BlogPage';
import { AboutUsPage } from '../pages/general/AboutUsPage';
import { FranchiseWithUsPage } from '../pages/general/FranchiseWithUsPage';
import { NotFoundPage } from '../pages/error/NotFoundPage';

export const GeneralLayout = () => {
	return (
		<div>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/location' element={<LocationPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/about-us' element={<AboutUsPage />} />
				<Route path='/franchise-with-us' element={<FranchiseWithUsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};
