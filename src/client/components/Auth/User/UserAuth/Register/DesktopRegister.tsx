import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Components/Form';
import { signUp } from '@/src/helper/api/auth';
import { AuthButton } from '../Components/DesktopButton';
import { useMutation } from '@tanstack/react-query';
import { ResponseMsg } from '../Components/ResponseMsg';
import { ToastContainer } from 'react-toastify';
import { useAuthAccess } from '../../../../../shared/Hooks/useAuthAccess';

const DesktopRegister = () => {
	const mutation = useMutation({ mutationFn: signUp });
	const {
		response,
		password,
		setPassword,
		phoneNumber,
		setPhoneNumber,
		handleClick,
	} = useAuthAccess({
		mutation,
		failedResText: 'exists',
		successfulResText: 'successfully',
	});

	return (
		<form className='flex flex-col items-center'>
			<ResponseMsg
				response={response}
				failedResText='exists'
			/>
			<ToastContainer />
			<Form
				setPassword={setPassword}
				setPhoneNo={setPhoneNumber}
				password={password}
				phoneNo={phoneNumber}
			/>

			<div className='flex flex-col items-center w-full'>
				<AuthButton
					handle={handleClick}
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
