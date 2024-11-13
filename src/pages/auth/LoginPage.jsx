import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getLogin } from '../../store/slices/auth/authThunk';
import { useEffect, useState } from 'react';
import logoIconDesktop from '../../assets/icons/logo-icon-desktop.svg';
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
		<div className='min-h-screen flex items-center'>
			<div className='bg-primary-red w-1/2 h-screen flex items-center justify-center'>
				<div className='flex items-center justify-center bg-white rounded-[50%] p-12'>
					<img className='w-60 h-60' src={logoIconDesktop} />
				</div>
			</div>
			<section className='px-32 w-1/2 flex flex-col justify-center gap-8'>
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
					<a className='text-gray-medium text-sm' href='/auth/forgot-password'>
						¿Olvidaste la contraseña?
					</a>
				</div>
				{error?.type == 'general' && (
					<div className='bg-primary-red font-open-sans-regular px-8 py-2 text-white'>
						{error.message}
					</div>
				)}
				<div className='flex justify-center'>
					<button
						className='primary-button disabled:bg-opacity-80'
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
						<a className=' text-blue-dark' href='/auth/register'>
							REGISTRARSE
						</a>
					</p>
				</div>
			</section>
		</div>
	);
};
