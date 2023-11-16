import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import { BetButton, LockButton } from '../components/BetButton';

type MatchTeam = {
	teamName: string;
	teamImg: StaticImageData;
};

type FeatureMatchDataProps = {
	cupType: string;
	region: string;
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

const MatchDetails = ({
	time,
	day,
	liveScore,
	eventType,
}: FeatureMatchDataProps) => (
	<div className='flex flex-col items-center text-[12px] w-1/3'>
		{liveScore === '' ? (
			<div className='mb-3'>
				<p>
					<span className='font-bold'>{time}</span> | {day}
				</p>
			</div>
		) : (
			<div className='flex flex-col items-center justify-between text-[10px]'>
				<p className='font-bold text-[12px] pb-1'>{liveScore}</p>
				<div className='flex items-center justify-between h-5'>
					<p className='bg-green-600 px-1'>Live</p>
					<p className='bg-white border px-1'>90:00 H2</p>
				</div>
			</div>
		)}
		<p className='text-green-600 font-bold text-[12px] '>{eventType}</p>
	</div>
);

const TeamDisplay = ({ teamImg, teamName }: MatchTeam) => (
	<div className='flex flex-col items-center w-1/3'>
		<Image
			src={teamImg}
			alt='Logo alt'
			className='rounded-full h-10 w-10'
		/>
		<p className='text-[12px] text-gray-500 pt-1'>
			{truncateText(teamName, 10)}
		</p>
	</div>
);

const BetButtons = ({ winPoint, draw, losePoint }: FeatureMatchDataProps) => (
	<div className='flex items-center justify-between w-full space-x-1 mt-1 text-green-600 font-bold text-[16px]'>
		{winPoint === '' ? (
			<LockButton />
		) : (
			<BetButton
				betType='1'
				betPoint={winPoint}
			/>
		)}
		{draw === '' ? (
			<LockButton />
		) : (
			<BetButton
				betType='X'
				betPoint={draw}
			/>
		)}
		{losePoint === '' ? (
			<LockButton />
		) : (
			<BetButton
				betType='2'
				betPoint={losePoint}
			/>
		)}
	</div>
);

const FeatureMatchCard = (props: FeatureMatchDataProps) => {
	const { region, cupType, teamOne, teamTwo } = props;
	const cupTypeText = truncateText(cupType, 20);

	return (
		<div className='flex flex-col w-[315px] h-[136px] p-2 border shadow-xl'>
			<p className='underline text-[12px] text-green-600 pb-1'>{`${region} - ${cupTypeText}`}</p>

			<div className='flex items-end justify-between space-x-2 w-full mt-1'>
				<TeamDisplay {...teamOne} />
				<MatchDetails {...props} />
				<TeamDisplay {...teamTwo} />
			</div>

			<BetButtons {...props} />
		</div>
	);
};

export default FeatureMatchCard;
