import React from 'react';
import Link from 'next/link';
import DropDown from '../Dropdown/Dropdown';
import { useLink, useLinkArray } from '../Hooks/useLink';
import { Carousel } from '@heathmont/moon-core-tw';

type PropsTabBar = {
	initialState: string;
	borderColor: string;
	hoverBgColor: string;
	hoverBorderColor: string;
	data: { name: string; data?: { name: string }[] }[];
};

type PropsTab = {
	data: string[];
	className: string;
	initialState: string;
	borderColor: string;
	borderBottomColor: string;
	handleTabClick: () => void;
	setTabValue: React.Dispatch<React.SetStateAction<string>>;
};

type MobilePropsType = {
	data: string[];
	initialState: string;
	borderColor: string;
	className: string;
	setTabValue: React.Dispatch<React.SetStateAction<string>>;
};

export const TabBar = ({
	initialState,
	data,
	borderColor,
	hoverBgColor,
	hoverBorderColor,
}: PropsTabBar) => {
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
							: `${hoverBorderColor} hover:border-b-4 border-b-4`
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
	data,
	initialState,
	borderColor,
	className,
	setTabValue,
	handleTabClick,
	borderBottomColor,
}: PropsTab) => {
	const { link, handleClick } = useLink(initialState);
	return (
		<div className='flex justify-between w-full'>
			{data.map((value, index) => (
				<Link
					href='#'
					key={index}
					onClick={() => {
						handleClick(value);
						setTabValue(value);
						handleTabClick();
					}}
					className={`flex items-center justify-center text-center transition transform duration-1000 ease-in-out w-full  ${
						link === value
							? `${borderColor} border-b-4`
							: `hover:border-b-4 border-b-4 ${borderBottomColor}`
					} ${className}`}>
					<p>{value}</p>
				</Link>
			))}
		</div>
	);
};

export const MobileCarouselTab = ({
	data,
	initialState,
	borderColor,
	className,
	setTabValue,
}: MobilePropsType) => {
	const { link, handleClick } = useLink(initialState);
	return data.map((value, index) => (
		<Carousel.Item key={index}>
			<Link
				href='#'
				onClick={() => {
					handleClick(value);
					setTabValue(value);
				}}
				className={`flex items-center justify-center p-2 text-center transition transform duration-1000 ease-in-out w-full  ${
					link === value ? `border-green-600 border-b-4` : `border-b-4 ${borderColor}`
				} ${className}`}>
				<p>{value}</p>
			</Link>
		</Carousel.Item>
	));
};
