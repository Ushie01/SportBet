import React from 'react';

const BettingTabHeader = () => {
	return (
		<div className='flex flex-col w-full pt-1 pl-3 pr-3'>
			<div className='flex items-center justify-between text-white '>
				<p className='font-semibold'>Kazakhstan Higher League</p>

				<div className='flex items-center justify-end'>
					<div className='flex items-center text-sm mr-2'>
						<div className='flex flex-col items-center justify-center w-full text-gray-600'>
							<p>3 way</p>
							<div className='flex items-center justify-between space-x-1 w-44 mr-3 h-4  text-xs text-gray-400 bg-gray-600'>
								<p className='px-6'>1</p>
								<p className='px-6'>X</p>
								<p className='px-6'>2</p>
							</div>
						</div>
						
						<div className='flex flex-col items-center justify-center w-full text-gray-600'>
							<p>Over/Under</p>
							<div className='flex items-center justify-between space-x-1 w-44 h-4  text-xs text-gray-400 bg-gray-600'>
								<p className='px-2 '>Goals</p>
								<p className='px-2'>Over</p>
								<p className='px-2'>Under</p>
							</div>
						</div>
					</div>

					<div className=' w-16'></div>
				</div>
			</div>
		</div>
	);
};

export default BettingTabHeader;
