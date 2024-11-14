import InputWithButton from '../ui/InputWithButton';
import arrowRight from '../../assets/icons/arrow-right.svg';
export const Footer = () => {
	return (
		<footer className='bg-background-light bg-footer bg-cover bg-center bg-no-repeat px-32'>
			<div className='flex items-start  gap-8 pt-32 pb-16'>
				<div className='flex flex-1 flex-col gap-4'>
					<h4 className='font-segoe-ui-bold text-secondary-yellow'>About</h4>
					<ul className='font-segoe-ui-regular grid grid-cols-1 gap-4'>
						<li className='nav-link'>
							<a>Locations</a>
						</li>
						<li className='nav-link'>
							<a>Franchise With Us</a>
						</li>
						<li className='nav-link'>
							<a>Partners</a>
						</li>
						<li className='nav-link'>
							<a>About us</a>
						</li>
						<li className='nav-link'>
							<a>Make Fetch Happen!</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-[2] flex-col gap-4'>
					<h4 className='font-segoe-ui-bold text-secondary-yellow'>Resources</h4>
					<ul className='font-segoe-ui-regular grid grid-cols-2 gap-4'>
						<li className='nav-link'>
							<a>Reviews</a>
						</li>
						<li className='nav-link'>
							<a>Pet Resource Center</a>
						</li>
						<li className='nav-link'>
							<a>Media Fact Sheet</a>
						</li>
						<li className='nav-link'>
							<a>Blog</a>
						</li>
						<li className='nav-link'>
							<a>News</a>
						</li>
						<li className='nav-link'>
							<a>Gift Cards</a>
						</li>
						<li className='nav-link'>
							<a>Services</a>
						</li>
						<li className='nav-link'>
							<a>Franchisee Login</a>
						</li>
						<li className='nav-link'>
							<a>Terms of Use</a>
						</li>
						<li className='nav-link'>
							<a>Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-1 flex-col gap-4'>
					<h4 className='font-segoe-ui-bold text-secondary-yellow'>Newsletter</h4>
					<div>
						<p className='text-white'>Sign up to receive the Fetch!</p>
						<p className='text-white'>Family Newsletter</p>
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
				</div>
			</div>
		</footer>
	);
};
