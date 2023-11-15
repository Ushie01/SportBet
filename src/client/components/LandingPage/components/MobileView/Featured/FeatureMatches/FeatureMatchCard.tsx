import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';

type MatchTeam = {
	teamName: string;
	teamImg: StaticImageData; 
};

type MatchData = {
	teamOne: MatchTeam;
	teamTwo: MatchTeam;
	time: string;
	day: string;
	eventType: string;
	winPoint: string;
	draw: string;
	losePoint: string;
	liveScore: string;
};

type FeatureMatchDataProps = {
	cupType: string;
	region: string;
	match: MatchData;
};

const FeatureMatchCard = ({
	region,
	cupType,
	match
}: FeatureMatchDataProps) => {
	const cupTypeText = truncateText(cupType, 30)

	return (
		<div className='flex flex-col w-[350px] h-[150px] p-2 border mt-5 shadow-xl'>
			<p className='underline text-[12px] text-green-600 pb-1'>
				{`${region} - ${cupTypeText}`}
			</p>

			<div className='flex items-end justify-between space-x-2 w-full mt-1'>
				<div className='flex flex-col items-center w-1/3'>
					<Image
						src={match?.teamOne.teamImg}
						alt='Logo alt'
						className='rounded-full h-12 w-12'
					/>
					<p className='text-[12px] text-gray-500 pt-1'>
						{truncateText(match?.teamOne.teamName, 15)}
					</p>
				</div>

				<div className='flex flex-col items-center text-[12px] w-1/3 space-y-4'>
					<p>
						<span className='font-bold'>{match?.time}</span> | {match?.day}
					</p>
					<p className='text-green-600 font-bold text-[12px] '>
						{match?.eventType}
					</p>
				</div>

				<div className='flex flex-col items-center w-1/3'>
					<Image
						src={match?.teamTwo.teamImg}
						alt='Logo alt'
						className='rounded-full h-12 w-12'
					/>
					<p className='text-[12px] text-gray-500 pt-1'>
						{truncateText(match?.teamOne.teamName, 15)}
					</p>
				</div>
			</div>

			<div className='flex items-center justify-between w-full mt-3 text-green-600 font-bold text-[16px]'>
				<div className='flex items-center  px-4 space-x-10 h-8 bg-green-100'>
					<p>1</p>
					<p>{match?.winPoint}</p>
				</div>
				<div className='flex items-center  px-4 space-x-10 h-8 bg-green-100'>
					<p>1</p>
					<p>{match?.draw}</p>
				</div>
				<div className='flex items-center  px-4 space-x-10 h-8 bg-green-100'>
					<p>1</p>
					<p>{match?.losePoint}</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureMatchCard;
