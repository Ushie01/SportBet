import React from 'react';
import { NumberInput, TextInput } from './Input';

const Form = () => {
	return (
		<form>
			<div className='w-[340px] z-10000'>
				<NumberInput />
				<TextInput
					type='password'
					placeHolder='Set Password'
				/>
			</div>
		</form>
	);
};

export default Form;
