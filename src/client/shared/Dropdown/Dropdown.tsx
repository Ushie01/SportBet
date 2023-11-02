import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type People = {
	name: string;
};

const people = [
	{ name: 'American Football' },
	{ name: 'Esports Football' },
];

const DropDown = () => {
	const [option, setOption] = useState<People | null>(null);
	return (
		<div className='flex flex-col lg:flex-row justify-around items-center w-full gap-2 hover:border-b-blue-400 hover:border-b-2'>
			<Dropdown
				value={option}
				onChange={setOption}>
				{({ open }) => (
					<>
						<Dropdown.Select
							open={open}
							placeholder='More Sports'>
							<p className='text-gray-600'>{option?.name}</p>
						</Dropdown.Select>
						<Dropdown.Options className='bg-white z-50 rounded-xl '>
							{people.map((person, index) => (
								<p
									className='hover:bg-gray-200 rounded-xl'
									key={index}>
									<Dropdown.Option value={person}>
										{({ selected, active }) => (
											<MenuItem
												isActive={active}
												isSelected={selected}>
												{person.name}
											</MenuItem>
										)}
									</Dropdown.Option>
								</p>
							))}
						</Dropdown.Options>
					</>
				)}
			</Dropdown>
		</div>
	);
};

export default DropDown;
