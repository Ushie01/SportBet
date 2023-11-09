import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

const SELECT_DATA = ['Nigeria', 'Togo', 'Congo', 'Ghana', 'South African'];

const DropdownText = () => {
	const [selected, setSelected] = useState(null);
	return (
		<Dropdown
			className='border'
			value={selected}
			onChange={setSelected}>
			{({ open }) => (
				<>
                    <Dropdown.Select
                        className='text-xs'
						open={open}
						placeholder='Nigeria'>
						{selected}
					</Dropdown.Select>
					<Dropdown.Options className='border bg-white'>
						{SELECT_DATA.map((value, index) => (
							<p
								className={`hover:text-white hover:bg-green-500 text-sm`}
								key={index}>
								<Dropdown.Option value={value}>
									{({ selected, active }) => (
										<MenuItem
											isActive={active}
											isSelected={selected}>
											{value}
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

export default DropdownText;
