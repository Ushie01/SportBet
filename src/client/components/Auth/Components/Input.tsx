import { useState } from 'react';
import { ControlsEye, ControlsEyeCrossed } from "@heathmont/moon-icons-tw";

export const PhoneNo = ({
	phoneNo,
	bgColor,
	setPhoneNo,
}: {
	phoneNo: string;
	bgColor: string;
	setPhoneNo: Function;
}) => {
	return (
		<div className='flex items-center border h-16  hover:border-green-500'>
			<p className='py-2 pl-6'>+234</p>
			<input
				value={phoneNo}
				onChange={(e) => setPhoneNo(e.target.value)}
				type='number'
				placeholder='Mobile Number'
				className={`h-full pl-4 w-full borderless-input ${bgColor}`}
				required
			/>
		</div>
	);
};

type PasswordProps = {
	bgColor: string;
	password: string;
	placeHolder: string;
	setPassword: Function;
};

export const Password = ({
	password,
	placeHolder,
	setPassword,
	bgColor,
}: PasswordProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleToggleVisibility= () => {
		setShowPassword(!showPassword);
	};
	
	return (
		<div className='flex h-16 w-full border hover:border-green-500'>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type={showPassword ? 'text' : 'password'}
				placeholder={placeHolder}
				className={`h-full borderless-input pl-4 hover:border-green-500 w-full ${bgColor}`}
				required
			/>

			{/* <button
				type='button'
				onClick={handleToggleVisibility}>
				{showPassword ? (
					<ControlsEye
						height={30}
						width={30}
						color='gray'
						className='m-1'
					/>
				) : (
					<ControlsEyeCrossed
						height={30}
						width={30}
						color='gray'
						className='m-1'
					/>
				)}
			</button> */}
		</div>
	);
};
