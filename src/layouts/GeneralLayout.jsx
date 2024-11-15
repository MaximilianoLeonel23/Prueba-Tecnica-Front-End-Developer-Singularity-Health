import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

export const GeneralLayout = () => {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-background-light flex flex-col'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
