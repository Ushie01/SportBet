import React, { Dispatch, SetStateAction, useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type TitleProps = {
	title: string;
	arrayTitle: { name: string }[];
	setLink: Dispatch<SetStateAction<string | []>>;
};

const DropDown = ({ title, arrayTitle, setLink }: TitleProps) => {
	const [option, setOption] = useState<{ name: string } | null>(null);
	const handleOptionSelect = (selectedLink: { name: string }) => {
		setOption(selectedLink);
		setLink(selectedLink.name);
	};

	return (
		<Dropdown
			value={option}
			onChange={setOption}>
			{({ open }) => (
				<>
					<Dropdown.Select
						open={open}
						placeholder={title}>
						{option?.name}
					</Dropdown.Select>
					<Dropdown.Options className='border bg-white rounded-xl z-50'>
						{arrayTitle.map((value, index) => (
							<p
								className='hover:bg-gold hover:text-white rounded-xl'
								key={index}>
								<Dropdown.Option value={{ name: value.name }}>
									{({ selected, active }) => (
										<MenuItem
											isActive={active}
											isSelected={selected}
											onClick={() => handleOptionSelect(value)}>
											{value.name}
										</MenuItem>
									)}
								</Dropdown.Option>
							</p>
						))}
					</Dropdown.Options>
				</>
			)}
		</Dropdown>
	);
};

export default DropDown;
