import React from 'react'

const FormInput = () => {
  return (
		<div className='px-48'>
			<div className='flex items-center border h-16  hover:border-green-500'>
				<p className='py-2 pl-6'>+234</p>
				<input
					type='number'
					placeholder='Mobile Number'
					className='h-full pl-4 bg-gray-100 w-full borderless-input '
					required
				/>
			</div>
			<input
				type='password'
				placeholder='Mobile Number'
				className='h-16 pl-4 bg-gray-100 w-full borderless-input border hover:border-green-500'
				required
			/>
		</div>
	);
}

export default FormInput
