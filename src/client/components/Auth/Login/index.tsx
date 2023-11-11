import React from 'react';
import FormInput from '../Components/FormInput';
import { Button } from '@/src/client/shared/Button/Button';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import Link from 'next/link';

const Login = () => {
	return (
		<form className='flex flex-col items-center space-y-4'>
			<FormInput />
			<div className=''>
				<div className='flex items-start justify-between mt-7'>
					<div className='flex flex-col'>
						<CheckBox title='Remember me' />
						<CheckBox title='Keep me sign in' />
					</div>
					<Link
						href='#'
						className='text-green-500'>
						Forget Password ?
					</Link>
				</div>
				<Button
					text='Login'
					link='#'
					classValue=' h-12 w-[270px] bg-green-500 text-white my-7 '
				/>
			</div>
		</form>
	);
};

export default Login;
