import React from 'react';
import HeadBettingSection from './components/HeadBettingSection';
import LiveBettingCard from './components/LiveBettingCard';

const LiveBettingSection = () => {
	return (
		<div className='bg-darkGray w-full'>
			<HeadBettingSection />
			<LiveBettingCard />
			<LiveBettingCard />
			<LiveBettingCard />
			<LiveBettingCard />
			<LiveBettingCard />
		</div>
	);
};

export default LiveBettingSection;
