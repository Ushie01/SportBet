import React from 'react';
import Link from 'next/link';
import DropDown from '../Dropdown/Dropdown';
import { useLink, useLinkArray } from '../Hooks/useLink';

type Props = {
	initialState: string;
	borderColor: string;
	hoverBgColor: string;
	hoverBorderColor: string;
	data: { name: string; data?: { name: string }[] }[];
};

type PropsLink = {
	initialState: string;
	borderColor: string;
	data: string[];
};

export const TabBar = ({
	initialState,
	data,
	borderColor,
	hoverBgColor,
	hoverBorderColor,
}: Props) => {
	const { link, setLink, handleClick } = useLinkArray(initialState);

	return (
		<div className='flex justify-between w-full'>
			{data.map((value, index) => (
				<Link
					href='#'
					key={index}
					onClick={() => handleClick(value)}
					className={`flex items-center justify-center text-center transition transform duration-300 z-50 text-gray-600 w-full ${
						link === value.name
							? `${borderColor} border-b-4`
							: `${hoverBorderColor} hover:border-b-4 border-b-white border-b-4`
					}`}>
					{value.data
						? value.data && (
								<DropDown
									title={value.name}
									arrayTitle={value.data}
									setLink={setLink}
									hoverBgColor={hoverBgColor}
								/>
						  )
						: value.name}
				</Link>
			))}
		</div>
	);
};


export const Tab = ({
	initialState,
	data,
	borderColor,
}: PropsLink) => {
	const { link,  handleClick } = useLink(initialState);

	return (
		<div className='flex justify-between w-full'>
			{data.map((value, index) => (
				<Link
					href='#'
					key={index}
					onClick={() => handleClick(value)}
					className={`flex items-center justify-center text-center transition text-white transform duration-1000 ease-in-out w-full  ${
						link === value
							? `${borderColor} border-b-4 text-white`
							: `hover:border-b-4 border-b-gray-900 border-b-4`
					}`}>
					{value}
				</Link>
			))}
		</div>
	);
};
