import React from 'react';

const BettingTabHeader = ({date}:{date:string}) => {
	return (
		<div className='flex flex-col w-full mt-3 mb-2'>
			<div className='flex items-center justify-between'>
				<p className='font-semibold '>{date}</p>

				<div className='flex items-center justify-end'>
					<div className='w-16'></div>

					<div className='flex items-center text-sm mr-2'>
						<div className='flex justify-between space-x-1'>
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
