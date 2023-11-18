import React from 'react';
import HeadBettingSection from './components/HeadBettingSection';
import LiveBettingCard from './components/LiveBettingCard';

const LiveBettingSection = () => {
	return (
		<div className='h-[93px] bg-gray-900'>
			<HeadBettingSection />
			<LiveBettingCard/>
		</div>
	);
};

export default LiveBettingSection;
