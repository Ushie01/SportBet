import React, { useState } from 'react';
import { MATCH_DATA } from '../components/constant/data';
import BettingCard from '../components/BettingCard';
import HeadBettingSection from '../components/HeadBettingSection';
import GrandPrizeWinners from './GrandPrizeWinners';

const SportsSection = () => {
	const [oddsHeaderLength, setOddsHeaderLength] = useState<number>(0);

	return (
		<div className='bg-white w-full'>
			<HeadBettingSection
				sports={true}
				sportBetType='Sport'
				setOddsHeaderLength={setOddsHeaderLength}
			/>
			{MATCH_DATA.map((value, index) => (
				<div key={index}>
					<BettingCard
						{...value}
						sports={true}
						getOddsHeaderLength={oddsHeaderLength}
					/>
				</div>
			))}
			<div className='flex items-center justify-end h-16 px-2'>
				<p className='text-green-600 text-[11px] font-semibold'>{`All Live Event 120 >`}</p>
			</div>
			<GrandPrizeWinners />
		</div>
	);
};

export default SportsSection;
