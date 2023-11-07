import React from 'react';
import { LEAGUES_DATA } from '../constant/data';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import Link from 'next/link';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import PopOver from '@/src/client/shared/PopOver';

const leagueTypesCard = ({
	title,
	link,
	leagueType,
}: {
	title: string;
	link: string;
	leagueType: string;
}) => {
	const titleValue = truncateText(title, 15);
	const leagueTypeValue = truncateText(leagueType, 11);

	return (
		<PopOver
			element={
				<Link
					href='#'
					className={`${
						link === title ? 'border-2 border-green-500' : ''
					} flex flex-col bg-gray-100 p-2 border h-16 w-36`}>
					<p>{titleValue}</p>
					<p className='font-semibold '>{leagueTypeValue}</p>
				</Link>
			}
			title={title}
			text={leagueType}
		/>
	);
};

const LeaguesTypes = () => {
	const { link, handleClick } = useLink('Bhutan');
	return (
		<div className='w-full'>
			<div className='flex flex-row items-start justify-between w-full mt-3'>
				{LEAGUES_DATA.map((value, index) => (
					<div
						key={index}
						onClick={() => handleClick(value.title)}>
						{leagueTypesCard({ ...value, link })}
					</div>
				))}
			</div>
			<hr className='mt-3'/>
		</div>
	);
};

export default LeaguesTypes;
