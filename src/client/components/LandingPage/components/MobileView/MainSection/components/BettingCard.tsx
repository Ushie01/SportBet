import React from 'react';
import Image from 'next/image';
import Hot from '../../../../../../../assets/hot.png';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import { renderOddsButtons } from '@/src/client/shared/Utils/OddsButton';


type Props = {
	live: boolean;
	sports: boolean;
	teamOne: string;
	teamTwo: string;
	teamScore: string[];
	leagueType: string;
	getOddsHeaderLength: number
}

const BettingCard = ({sports, live, teamOne, teamTwo, teamScore, leagueType, getOddsHeaderLength}: Props) => {
	const teamOneTruncateText = truncateText(teamOne, 22);
	const teamTwoTruncateText = truncateText(teamTwo, 22)
	return (
		<div className='flex flex-col h-[94px] w-full p-2 '>
			<div
				className={`flex flex-col items-start border-b  ${
					sports ? 'border-b-gray-200' : 'border-b-gray-700'
				}`}>
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

					{sports ? (
						<div className='flex text-gray-400 text-[10px] space-x-2 font-bold'>
							<p>13.00</p>
							<p>{'ID 13073'}</p>
							<p>{'Simulated Reality League - SRL International'}</p>
						</div>
					) : (
						<p className='text-green-500 text-[13px] font-bold'>
							45:00 HT{' '}
							<span className='text-[10px] pl-2 text-gray-500'>
								{leagueType}
							</span>
						</p>
					)}
				</div>

				<div className='flex items-center justify-between pt-1 w-full'>
					<div
						className={`flex flex-col text-[12px] ${
							sports ? 'text-gray-800' : 'text-white'
						}`}>
						<p>{teamOneTruncateText}</p>
						<p>{teamTwoTruncateText}</p>
					</div>

					<div className='flex space-x-4'>
						<div
							className={`flex flex-col text-white text-[13px] ${
								sports ? 'text-gray-600' : 'text-white'
							}`}>
							<p>{teamScore[0]}</p>
							<p>{teamScore[1]}</p>
						</div>
						<div className='flex'>
							{renderOddsButtons(sports, getOddsHeaderLength)}
						</div>
					</div>
				</div>

				<div className='flex flex-col w-full pt-1 pb-2'>
					<div
						className={`text-[10px] ${
							sports ? 'text-gray-500' : 'text-white'
						}`}>{`+12>`}</div>
				</div>
			</div>
		</div>
	);
};

export default BettingCard;
