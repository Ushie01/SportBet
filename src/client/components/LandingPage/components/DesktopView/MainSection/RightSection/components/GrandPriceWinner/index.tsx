import React, { useState, useEffect } from 'react';
import { GRANDPRIZE_WINNER_DATA } from '../../constant/data';

const GrandPriceWinner = () => {

	return (
		<div className='w-full border-4 bg-gray-900 border-gray-900'>
			<div className='flex items-center justify-center text-center text-white h-12'>
				Grand Price Winners
			</div>

			<div className='space-y-1'>
				{GRANDPRIZE_WINNER_DATA.map((item, index) => (
					<div
						key={index}
						className='flex flex-col p-2 bg-white h-16 w-full space-y-1 py-2'>
						<div className='flex items-center justify-between'>
							<p className='text-green-500'>{item.price}</p>
							<p className='text-sm text-gray-400'>1 min ago</p>
						</div>

						<div className='flex items-center justify-between text-sm'>
							<p className='text-gray-400'>LegitXbetting</p>
							<p className='text-gray-400'>{item.phoneNo}</p>
						</div>
					</div>
				))}
			</div>

		</div>
	);
};

export default GrandPriceWinner;
