import { Link } from 'react-router-dom';
import notFoundBackground from '../../assets/images/not-found-background.png';
export const NotFoundPage = () => {
	const lastRoute = localStorage.getItem('lastRoute') || '/home';
	return (
		<div className='container w-full min-h-screen flex flex-col gap-8 items-center justify-center'>
			<div className='w-[20rem]'>
				<img src={notFoundBackground} alt='Curious Dog' />
			</div>
			<h1 className='text-gray-dark text-center text-lg'>
				Sorry, we couldn{"'"}t found the page you are looking for.{' '}
				<Link className='font-open-sans-bold text-primary-red' to={lastRoute}>
					Go back to the previous page.
				</Link>
			</h1>
		</div>
	);
};
