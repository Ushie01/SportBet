import React from 'react';
import HighLightSection from './HighLightSection';
import LiveBettingSection from './LiveBettingSection';

const LeftSection = () => {
	return (
		<div className='bg-lighGray w-9/12'>
			<HighLightSection />
			<LiveBettingSection />
		</div>
	);
};

export default LeftSection;
