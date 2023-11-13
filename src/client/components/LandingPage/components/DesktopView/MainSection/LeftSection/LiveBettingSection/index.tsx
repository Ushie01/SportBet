import React from 'react';
import HighLight from '../components/LeftSectionHeader';
import BettingSection from './components/BettingSection';

const LiveBettingSection = () => {
	return (
		<div className='bg-gray-900 w-full h-3 border mt-3'>
			<HighLight
				iconTextColor='text-green-700'
				mainBorderColor='border-gray-900'
				circleColor='bg-green-400'
				bgColor='bg-gray-900'
				textColor='text-white'
				title='Live Betting'
				iconColor='green'
				filter={false}
			/>
			<BettingSection/>
		</div>
	);
};

export default LiveBettingSection;
