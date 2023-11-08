import React, { useState, ChangeEvent } from 'react';
import { GAME_VALUES } from '../../components/LandingPage/components/DesktopView/MainSection/LeftSection/constant/data';

const DropdownButton = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<select
			className='bg-green-500 w-[55px] hover:bg-green-700 rounded-l borderless-input text-white'
			value={selectedValue}
			onChange={handleSelectChange}>
			<option value=''>1.2</option>
			{GAME_VALUES.map((option) => (
				<option
					key={option}
					className='hover:bg-green-500 text-white'
					value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default DropdownButton;
