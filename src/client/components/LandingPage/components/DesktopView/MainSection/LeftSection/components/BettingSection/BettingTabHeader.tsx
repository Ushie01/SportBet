import React from 'react';

const BettingTabHeader = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='flex items-center justify-between'>
				<p className='font-semibold '>07/11 Tuesday</p>

				<div className='flex items-center justify-end'>
					<div className='w-16'></div>

					<div className='flex items-center text-sm mr-2'>
						<div className='flex justify-between space-x-1 mr-3'>
							<p className='px-6'>1</p>
							<p className='px-6'>X</p>
							<p className='px-6'>2</p>
						</div>
						<div className='flex justify-between space-x-1'>
							<p className='px-2 '>Game</p>
							<p className='px-2'>Over</p>
							<p className='px-2'>Under</p>
						</div>
					</div>

					<div className=' w-16'></div>
				</div>
			</div>
		</div>
	);
};

export default BettingTabHeader;
