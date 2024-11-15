import { useNavigate, Link } from 'react-router-dom';
import logoIcon from '../../assets/icons/logo-icon-menu.svg';
import headerBackground from '../../assets/images/header-background.png';
export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='relative z-10'>
			<div className='w-full absolute top-0 left-0 -z-10'>
				<img className='w-full' src={headerBackground} />
			</div>
			<div className='container flex items-center justify-between py-4 '>
				<div
					className='flex items-center justify-center bg-white rounded-[50%] cursor-pointer'
					onClick={() => navigate('/home')}
				>
					<img src={logoIcon} alt='Logo' className='w-16 h-16 p-2' />
				</div>
				<nav className='flex gap-4'>
					<ul className='flex items-center gap-6'>
						<li className='nav-link'>
							<Link to='/location'>Location</Link>
						</li>
						<li className='nav-link'>
							<Link to='/blog'>Blog</Link>
						</li>
						<li className='nav-link'>
							<Link to='/services'>Services</Link>
						</li>
						<li className='nav-link'>
							<Link to='/about-us'>About Us</Link>
						</li>
						<li className='nav-link'>
							<Link to='/franchise-with-us'>Franchise With Us</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
