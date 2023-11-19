import React, { useState } from 'react';
import LiveBettingCard from './components/LiveBettingCard';
import HeadBettingSection from './components/HeadBettingSection';
import { MATCH_DATA } from './constant/data';

const LiveBettingSection = () => {
	const [oddsHeaderLength, setOddsHeaderLength] = useState<number>(0);
	
	return (
		<div className='bg-darkGray w-full'>
			<HeadBettingSection setOddsHeaderLength={setOddsHeaderLength} />
			{MATCH_DATA.map((value, index) => (
				<div key={index}>
					<LiveBettingCard {...value} getOddsHeaderLength={oddsHeaderLength} />
				</div>
			))}
		</div>
	);
};

export default LiveBettingSection;
