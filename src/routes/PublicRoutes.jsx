import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children, isLogged }) => {
	const path = localStorage.getItem('lastRoute') || '/home';

	return !isLogged ? children : <Navigate to={path} />;
};
