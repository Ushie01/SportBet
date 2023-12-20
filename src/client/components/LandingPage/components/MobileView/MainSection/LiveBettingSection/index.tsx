import React, { useState } from 'react';
import { MATCH_DATA } from '../components/constant/data';
import HeadBettingSection from '../components/HeadBettingSection';
import BettingCard from '../components/BettingCard';

const LiveBettingSection = () => {
	const [oddsHeaderLength, setOddsHeaderLength] = useState<number>(0);
	return (
		<div className='bg-darkGray w-full'>
			<HeadBettingSection
				sports={false}
				sportBetType='Live'
				setOddsHeaderLength={setOddsHeaderLength}
			/>
			{MATCH_DATA.map((value, index) => (
				<div key={index}>
					<BettingCard
						{...value}
						sports={false}
						getOddsHeaderLength={oddsHeaderLength}
					/>
				</div>
			))}
			<div className='flex items-center justify-end h-16 px-2'>
				<p className='text-green-600 text-[11px] font-semibold'>{`All Live Event 120 >`}</p>
			</div>
		</div>
	);
};

export default LiveBettingSection;
