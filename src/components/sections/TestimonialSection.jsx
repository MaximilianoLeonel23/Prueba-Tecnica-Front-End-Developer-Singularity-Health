import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/slices/users/userThunk';
import Carousel from '../ui/Carousel';

export const TestimonialSection = ({ title }) => {
	const dispatch = useDispatch();
	const { users } = useSelector(state => state.user);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<section className='container flex flex-col justify-center items-center gap-16 mt-[15rem] px-24 py-32 z-10'>
			<h2 className='w-1/2 font-open-sans-bold text-4xl text-primary-red text-center'>{title}</h2>
			<Carousel items={users} />
		</section>
	);
};
