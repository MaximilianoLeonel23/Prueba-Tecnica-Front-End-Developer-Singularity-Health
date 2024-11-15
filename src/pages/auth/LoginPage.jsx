import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getLogin } from '../../store/slices/auth/authThunk';
import { useEffect, useState } from 'react';
import logoIconDesktop from '../../assets/icons/logo-icon-desktop.svg';
import loginBackground from '../../assets/images/login-background.png';
import { Link } from 'react-router-dom';
export const LoginPage = () => {
	const [isDisabled, setIsDisabled] = useState(true);
	const { formData, onChangeInput } = useForm({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const { error, isLoading } = useSelector(state => state.auth);

	useEffect(() => {
		const { email, password } = formData;
		if (email.trim() != '' && password.trim() != '') {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [formData]);

	const handleSubmit = () => {
		dispatch(getLogin(formData));
	};

	return (
		<div className='w-full flex items-center justify-center'>
			<div className='w-1/2 h-screen flex items-center justify-center'>
				<img
					src={loginBackground}
					alt='Waves Background'
					className='absolute top-0 left-0 w-full h-full object-contain object-left'
				/>
				<div className='flex justify-center items-center bg-white rounded-[50%] p-12 z-10'>
					<img className='w-48 h-48' src={logoIconDesktop} />
				</div>
			</div>
			<section className='px-32 w-1/2 flex flex-col justify-center gap-8 z-20'>
				<div className='border-l-primary-red border-l-8 text-left px-8'>
					<h1 className='font-gibson-semibold text-2xl text-gray-extra-dark'>BIENVENIDO</h1>
				</div>

				<div className='flex flex-col gap-4'>
					<input
						className={`input-form ${
							error?.type == 'email' || error?.type == 'general' ? 'border border-primary-red' : ''
						}`}
						type='email'
						name='email'
						id='email'
						placeholder='EMAIL'
						onChange={onChangeInput}
					/>
					{error?.type == 'email' && <p className='text-primary-red'>{error.message}</p>}
					<input
						className={`input-form ${
							error?.type == 'password' || error?.type == 'general' ? 'border border-primary-red' : ''
						}`}
						type='password'
						name='password'
						id='password'
						placeholder='PASSWORD'
						onChange={onChangeInput}
					/>
					{error?.type == 'password' && <p className='text-primary-red'>{error.message}</p>}
				</div>
				<div className='flex justify-end'>
					<Link
						className='text-gray-medium text-sm hover:text-primary-red transition duration-200'
						to='/auth/forgot-password'
					>
						¿Olvidaste la contraseña?
					</Link>
				</div>
				{error?.type == 'general' && (
					<div className='bg-primary-red font-open-sans-regular px-8 py-2 text-white'>
						{error.message}
					</div>
				)}
				<div className='flex justify-center'>
					<button
						className='primary-button disabled:bg-opacity-80 disabled:hover:brightness-100'
						type='button'
						onClick={handleSubmit}
						disabled={isDisabled || isLoading}
					>
						{isLoading && isLoading ? 'CARGANDO...' : 'INICIAR SESIÓN'}
					</button>
				</div>
				<div className='flex justify-center'>
					<p className='text-gray-medium text-sm'>
						AÚN NO TENGO CUENTA{' '}
						<Link className=' text-blue-dark' to='/auth/register'>
							REGISTRARSE
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
};
