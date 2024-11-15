import InputWithButton from '../ui/InputWithButton';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { Button } from '../ui/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogout } from '../../store/slices/auth/authThunk';
export const Footer = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(getLogout());
	};
	return (
		<footer className='bg-background-light bg-footer bg-cover bg-center bg-no-repeat'>
			<div className='container flex items-start gap-8 pt-48 pb-16'>
				<div className='flex flex-1 flex-col gap-4'>
					<h4 className='font-open-sans-bold text-lg text-secondary-yellow'>About</h4>
					<ul className='grid grid-cols-1 gap-4'>
						<li className='nav-link'>
							<Link to='/location'>Locations</Link>
						</li>
						<li className='nav-link'>
							<Link to='/franchise-with-us'>Franchise With Us</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Partners</Link>
						</li>
						<li className='nav-link'>
							<Link to='/about-us'>About us</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Make Fetch Happen!</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-[2] flex-col gap-4'>
					<h4 className='font-open-sans-bold text-lg text-secondary-yellow'>Resources</h4>
					<ul className='grid grid-cols-2 gap-4'>
						<li className='nav-link'>
							<Link to='/home'>Reviews</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Pet Resource Center</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Media Fact Sheet</Link>
						</li>
						<li className='nav-link'>
							<Link to='/blog'>Blog</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>News</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Gift Cards</Link>
						</li>
						<li className='nav-link'>
							<Link to='/services'>Services</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Franchisee Login</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Terms of Use</Link>
						</li>
						<li className='nav-link'>
							<Link to='/home'>Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-1 flex-col gap-4'>
					<h4 className='font-open-sans-bold text-lg text-secondary-yellow'>Newsletter</h4>
					<div>
						<p className='text-lg text-white'>Sign up to receive the Fetch!</p>
						<p className='text-lg text-white'>Family Newsletter</p>
					</div>
					<div>
						<InputWithButton
							inputId='newsletter'
							inputName='newsletter'
							inputPlaceholder='Email Adress'
							icon={arrowRight}
							iconAlt='Arrow Right'
						/>
					</div>
					<div>
						<Button btnText='Logout' type='secondary' onClick={handleLogout} />
					</div>
				</div>
			</div>
		</footer>
	);
};
