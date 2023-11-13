import React from 'react';
import LeaguesTypes from './components/LeaguesTypes';
import BettingSection from './components/BettingSection';
import LeftSectionHeader from '../components/LeftSectionHeader';

const HighLightSection = () => {
	return (
		<div className='bg-white w-full border'>
			<LeftSectionHeader
				filter={true}
				textColor='text-black'
				circleColor='text-green-600'
				iconColor='text-green-600'
				mainBorderColor='border-b-white'
				iconTextColor='text-black'
				bgColor='bg-white'
				title='Highlight'
			/>
			<div className='px-3'>
				<LeaguesTypes />
				<BettingSection />
			</div>
		</div>
	);
};

export default HighLightSection;
