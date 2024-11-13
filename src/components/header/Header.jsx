import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/auth/authSlice';

export const Header = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem('session');
	};
	return (
		<div className='flex items-center justify-between'>
			<div>
				<img src='../../../assets/icons/logo-icon.svg' />
			</div>
			<nav>
				<button onClick={handleLogout} className='primary-button'>
					LOGOUT
				</button>
			</nav>
		</div>
	);
};
