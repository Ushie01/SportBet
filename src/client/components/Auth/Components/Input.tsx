export const NumberInput = () => {
	return (
		<div className='flex items-center border h-16  hover:border-green-500'>
			<p className='py-2 pl-6'>+234</p>
			<input
				type='number'
				placeholder='Mobile Number'
				className='h-full pl-4 bg-gray-100 w-full borderless-input '
				required
			/>
		</div>
	);
};

export const TextInput = ({type, placeHolder}: {type: string, placeHolder: string}) => {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			className='h-16 pl-4 bg-gray-100 w-full borderless-input border hover:border-green-500'
			required
		/>
	);
};
