import React from 'react';
import BettingTabHeader from './BettingTabHeader';
import BettingTab from './BettingTab';
import { BET_DATA } from '../../../constant/data';

const BettingSection = () => {
	return (
		<div>
			{BET_DATA.map((value, index) => (
				<div key={index}>
					<BettingTabHeader date={value.date} />
					{value.dataValue.map((v, indexValue) => (
						<div key={indexValue}>
							<BettingTab {...v} />
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default BettingSection;
