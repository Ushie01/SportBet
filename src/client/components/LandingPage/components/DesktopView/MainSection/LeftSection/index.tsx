import React from 'react';
import HighLight from './components/HighLight';
import LeaguesTypes from './components/LeaguesTypes';
import BettingSection from './components/BettingSection';

const LeftSection = () => {
	return (
		<div className='bg-white w-9/12 border px-3'>
			<HighLight />
			<LeaguesTypes />
			<BettingSection/>
		</div>
	);
};

export default LeftSection;
