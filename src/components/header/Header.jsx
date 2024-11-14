import logoIcon from '../../assets/icons/logo-icon-menu.svg';
import headerBackground from '../../assets/images/header-background.png';
export const Header = () => {
	return (
		<div className='relative flex items-center justify-between px-32 py-4 z-10'>
			<div className='w-full absolute top-0 left-0 -z-10'>
				<img className='w-full' src={headerBackground} />
			</div>
			<div className='flex items-center justify-center bg-white rounded-[50%]'>
				<img src={logoIcon} alt='Logo' className='w-16 h-16 p-2' />
			</div>
			<nav className='flex gap-4'>
				<ul className='flex items-center gap-6'>
					<li className='nav-link'>
						<a href='/location'>Location</a>
					</li>
					<li className='nav-link'>
						<a href='/blog'>Blog</a>
					</li>
					<li className='nav-link'>
						<a href='/service'>Services</a>
					</li>
					<li className='nav-link'>
						<a href='/about-us'>About Us</a>
					</li>
					<li className='nav-link'>
						<a href='/franchise-with-us'>Franchise With Us</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
