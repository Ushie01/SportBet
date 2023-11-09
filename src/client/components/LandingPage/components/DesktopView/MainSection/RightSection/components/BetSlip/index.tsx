import { Tab } from '@/src/client/shared/Tab/TabBar';
import Toggle from '@/src/client/components/LandingPage/components/DesktopView/MainSection/RightSection/components/BetSlip/Toggle';
import React from 'react';

const BetSlip = () => {
	const navItem = ['Betslip', 'Cashout'];
	return (
		<div className='w-full h-44 border-4 border-gray-900'>
			<div className=' pt-5 pb-1 bg-gray-900 px-3'>
				<Tab
					initialState='Betslip'
					data={navItem}
					borderColor='border-green-500'
				/>
				<div className='pt-3 pb-1'>
					<Toggle />
				</div>
			</div>
		</div>
	);
};

export default BetSlip;
