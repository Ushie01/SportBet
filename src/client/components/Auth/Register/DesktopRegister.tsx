import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Components/Form';
import { signUp } from '@/src/helper/api/auth';
import { ErrorToast, SuccessToast } from '@/src/client/shared/ToastBar';
import { AuthButton } from '../Components/DesktopButton';
import { ResponseMsg } from '../Components/ResponseMsg';

const DesktopRegister = () => {
	const mutation = useMutation({ mutationFn: signUp });
	const [response, setResponse] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleRegister = async () => {
		const values = { phoneNumber, password };
		if (values.phoneNumber && values.password) {
			const payload = await mutation.mutateAsync(values);
			setResponse(payload?.message);
			if (response.includes('exists')) {
				ErrorToast({ text: 'Registration Failed' });
			} else {
				SuccessToast({ text: 'Successfully Created' });
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

			<div className='flex flex-col items-center w-full'>
				<AuthButton
					handle={handleRegister}
					className='h-12 my-7 w-[340px] '
					password={password}
					phoneNumber={phoneNumber}
					mutation={mutation}
					buttonName='Register'
				/>
				<div className='flex flex-col items-center justify-center text-xs w-full'>
					<p>{text1}</p>
					<p>{text2}</p>
				</div>
			</div>
		</form>
	);
};

const text1 = `By creating an account, you agree to our Terms & Conditions and confirm that you are at`;
const text2 = `least 18 years old or over and all information given is true.`;
export default DesktopRegister;
