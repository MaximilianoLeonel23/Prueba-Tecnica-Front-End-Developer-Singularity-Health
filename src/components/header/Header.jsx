import { Link } from 'react-router-dom';
import logoIcon from '../../assets/icons/logo-icon-menu.svg';
import headerBackground from '../../assets/images/header-background.png';
export const Header = () => {
	return (
		<header className='relative z-10'>
			<div className='w-full absolute top-0 left-0 -z-10'>
				<img className='w-full' src={headerBackground} alt='Red Waves Background' />
			</div>
			<div className='container flex items-center justify-between py-4 '>
				<Link
					className='flex items-center justify-center bg-white rounded-[50%] cursor-pointer'
					to='/home'
				>
					<img src={logoIcon} alt='Logo' className='w-16 h-16 p-2' />
				</Link>
				<nav className='flex gap-4'>
					<ul className='flex items-center gap-6'>
						<li>
							<Link className='nav-link' to='/location'>
								Location
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/blog'>
								Blog
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/services'>
								Services
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/about-us'>
								About Us
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/franchise-with-us'>
								Franchise With Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
