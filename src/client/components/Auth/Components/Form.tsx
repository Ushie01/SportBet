import React, { useState } from 'react';
import { Password, PhoneNo } from './Input';

type formProps = {
	password: string;
	phoneNo: string;
	setPassword: Function;
	setPhoneNo: Function;
}

const Form = ({ password, setPassword, phoneNo, setPhoneNo }: formProps) => {

	return (
		<form>
			<div className='w-[340px] z-10000'>
				<PhoneNo
				      phoneNo={phoneNo}
					bgColor='bg-gray-100'
					setPhoneNo={setPhoneNo}
				/>
				<Password
					password={password}
					setPassword={setPassword}
					placeHolder='Set Password'
					bgColor='bg-red-800'
				/>
			</div>
		</form>
	);
};

export default Form;
