import React from 'react';
import BetSlip from './components/BetSlip/DesktopBetslip';
import GrandPriceWinner from './components/GrandPriceWinner';
import { AutoCashImage } from './components/AutoCashImage';

const RightSection = () => {
	return (
		<div className='w-3/12 space-y-4'>
			<BetSlip />
			<AutoCashImage />
			<GrandPriceWinner />
		</div>
	);
};

export default RightSection;
