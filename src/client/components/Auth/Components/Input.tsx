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
	return (
		<input
			value={password}
			onChange={(e) => setPassword(e.target.value)}
			type='password'
			placeholder={placeHolder}
			className={`h-16 pl-4 w-full borderless-input pr-4 border hover:border-green-500 ${bgColor}`}
			required
		/>
	);
};
