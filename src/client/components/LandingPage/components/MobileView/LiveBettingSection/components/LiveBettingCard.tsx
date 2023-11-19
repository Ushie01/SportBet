import React from 'react';
import Image from 'next/image';
import Hot from '../../../../../../../assets/hot.png';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import { renderOddsButtons } from '@/src/client/shared/Utils/OddsButton';


type Props = {
	live: boolean;
	teamOne: string;
	teamTwo: string;
	teamScore: string[];
	leagueType: string;
	getOddsHeaderLength: number
}

const LiveBettingCard = ({live, teamOne, teamTwo, teamScore, leagueType, getOddsHeaderLength}: Props) => {
	const teamOneTruncateText = truncateText(teamOne, 22);
	const teamTwoTruncateText = truncateText(teamTwo, 22)
	return (
		<div className='flex flex-col px-2 pt-1 bg-darkGray h-24 w-full'>
			<div className='flex flex-col items-start'>
				<div className='flex items-center space-x-2'>
					{live && (
						<div className='flex items-center justify-center h-4 w-[70px] space-x-1 sectionhot bg-red-600 -ml-8 '>
							<p className='text-white text-[12px] text-center font-bold pl-4 pt-[1px]'>
								Hot
							</p>
							<Image
								src={Hot}
								alt='hot'
								height={12}
								width={12}
							/>
						</div>
					)}
					<p className='text-green-500 text-[13px] font-bold'>
						45:00 HT{' '}
						<span className='text-[10px] pl-2 text-gray-500'>{leagueType}</span>
					</p>
				</div>

				<div className='flex items-center justify-between pt-1 w-full'>
					<div className='flex flex-col text-[12px] text-white'>
						<p>{teamOneTruncateText}</p>
						<p>{teamTwoTruncateText}</p>
					</div>

					<div className='flex space-x-4'>
						<div className='flex flex-col text-white text-[13px]'>
							<p>{teamScore[0]}</p>
							<p>{teamScore[1]}</p>
						</div>
						<div className='flex'>{renderOddsButtons(getOddsHeaderLength)}</div>
					</div>
				</div>

				<div className='flex flex-col w-full border-b border-b-gray-700'>
					<div className='text-[10px] text-white py-1'>{`+12>`}</div>
				</div>
			</div>
		</div>
	);
};

export default LiveBettingCard;
