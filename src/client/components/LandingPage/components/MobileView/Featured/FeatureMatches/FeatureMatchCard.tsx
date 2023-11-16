import React from 'react';
import Image, { StaticImageData } from 'next/image';
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

const FeatureMatchCard = ({
	region,
	cupType,
	teamOne,
	teamTwo,
	time,
	day,
	eventType,
	winPoint,
	draw,
	losePoint,
	liveScore,
}: FeatureMatchDataProps) => {
	const cupTypeText = truncateText(cupType, 20);

	return (
		<div className='flex flex-col w-[315px] h-[136px] p-2 border mt-5 shadow-xl'>
			<p className='underline text-[12px] text-green-600 pb-1'>
				{`${region} - ${cupTypeText}`}
			</p>

			<div className='flex items-end justify-between space-x-2 w-full mt-1'>
				<div className='flex flex-col items-center w-1/3'>
					<Image
						src={teamOne.teamImg}
						alt='Logo alt'
						className='rounded-full h-10 w-10'
					/>
					<p className='text-[12px] text-gray-500 pt-1'>
						{truncateText(teamOne.teamName, 10)}
					</p>
				</div>

				<div className='flex flex-col items-center text-[12px] w-1/3'>
					{liveScore === '' && (
						<div className='mb-3'>
							<p>
								<span className='font-bold'>{time}</span> | {day}
							</p>
						</div>
					)}

					{liveScore !== '' && (
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

				<div className='flex flex-col items-center w-1/3'>
					<Image
						src={teamTwo.teamImg}
						alt='Logo alt'
						className='rounded-full h-10 w-10'
					/>
					<p className='text-[12px] text-gray-500 pt-1'>
						{truncateText(teamOne.teamName, 10)}
					</p>
				</div>
			</div>

			<div className='flex items-center justify-between w-full space-x-1 mt-1 text-green-600 font-bold text-[16px]'>
				{winPoint === '' && <LockButton />}
				{winPoint !== '' && (
					<BetButton
						betType='1'
						betPoint={winPoint}
					/>
				)}

				{draw === '' && <LockButton />}
				{draw !== '' && (
					<BetButton
						betType='X'
						betPoint={draw}
					/>
				)}

				{losePoint === '' && <LockButton />}
				{losePoint !== '' && (
					<BetButton
						betType='2'
						betPoint={losePoint}
					/>
				)}
			</div>
		</div>
	);
};

export default FeatureMatchCard;
