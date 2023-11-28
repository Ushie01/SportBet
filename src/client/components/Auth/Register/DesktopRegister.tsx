import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Form from '../Components/Form';
import { signUp } from '@/src/helper/api/auth';
import { Button, Loader } from '@heathmont/moon-core-tw';

const DesktopRegister = () => {
	const [response, setResponse] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const mutation = useMutation({ mutationFn: signUp });

	const handleRegister = async () => {
		const values = { phoneNumber, password };
		if (values.phoneNumber && values.password) {
			const payload = await mutation.mutateAsync(values);
			setResponse(payload?.message);
		}
	};

	return (
		<form className='flex flex-col items-center'>
			{response && (
				<p
					className={`flex text-center font-bold pb-5 text-green-500 ${
						response.includes('exist')
							? 'text-red-600'
							: 'text-green-600'
					}`}>
					{response}
				</p>
			)}

			<Form
				setPassword={setPassword}
				setPhoneNo={setPhoneNumber}
				password={password}
				phoneNo={phoneNumber}
			/>

			<div className='flex flex-col items-center w-full'>
				<Button
					onClick={handleRegister}
					className={`h-12 my-7 w-[340px]  ${
						phoneNumber.length > 0 && password.length > 0
							? 'bg-green-500 text-white'
							: 'bg-gray-200 text-gray-400 disabled'
					}`}
					disabled={mutation.isPending}>
					{mutation.isPending ? <Loader size='xs' /> : 'Register'}
				</Button>
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
