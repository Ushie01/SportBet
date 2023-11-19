import React, { useState, ChangeEvent } from 'react';

const DropdownButton = ({items, className}: {items: string[], className: string }) => {
	const [selectedValue, setSelectedValue] = useState<string>('');
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<select
			className={className}
			value={selectedValue}
			onChange={handleSelectChange}>
			<option
				value=''
				className='hover:bg-green-500 text-white borderless-input'>
				2.3
			</option>
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
