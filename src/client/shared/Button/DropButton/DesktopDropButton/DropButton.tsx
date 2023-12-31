import React, { useState, ChangeEvent } from 'react';

const DropdownButton = ({goal, items}: {goal: string, items: string[]}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<select
			className='bg-green-700 h-[37px] w-[56px] text-sm pl-1 hover:bg-green-500 rounded-l borderless-input text-white'
			value={selectedValue}
			onChange={handleSelectChange}>
			<option
				value=''
				className='hover:bg-green-500 text-white'>{`${
				goal ? goal : ''
			}`}</option>
			{items.map((option) => (
				<option
					key={option}
					value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default DropdownButton;
