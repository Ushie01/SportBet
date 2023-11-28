import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Components/Form';
import { signIn } from '@/src/helper/api/auth';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import { ErrorToast, SuccessToast } from '@/src/client/shared/ToastBar';
import { AuthButton } from '../Components/DesktopButton';
import { ResponseMsg } from '../Components/ResponseMsg';

const DesktopLogin = () => {
	const [response, setResponse] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const mutation = useMutation({ mutationFn: signIn });

	const handleLogin = async () => {
		const values = { phoneNumber, password };
		if (values.phoneNumber && values.password) {
			const payload = await mutation.mutateAsync(values);
			setResponse(payload?.message);
			if (response.includes('found')) {
				ErrorToast({ text: 'Login Failed' });
			} else {
				SuccessToast({ text: 'Successfully Login' });
			}
		}
	};

	return (
		<form className='flex flex-col items-center'>
			<ResponseMsg response={response} />
			<ToastContainer />
			<Form
				setPassword={setPassword}
				setPhoneNo={setPhoneNumber}
				password={password}
				phoneNo={phoneNumber}
			/>

			<div className='w-[340px]'>
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

				<AuthButton
					buttonName='Log In'
					phoneNumber={phoneNumber}
					className='h-12 my-7 w-[340px] '
					password={password}
					mutation={mutation}
					handle={handleLogin}
				/>
			</div>
		</form>
	);
};

export default DesktopLogin;
