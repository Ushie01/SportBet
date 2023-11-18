import React from 'react';

const LiveBettingCard = () => {
	return (
		<div className='flex flex-col p-2 bg-gray-900 h-20'>
			<div className='flex flex-col items-start'>
				<p className='text-green-500 text-[13px] font-bold'>
					45:00 HT{' '}
					<span className='text-[10px] pl-2 text-gray-500'>
						Brazil - Brasileiro Serie B
					</span>
				</p>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col text-[13px] pt-2 text-white'>
						<p>Crown FC</p>
						<p>One Rocket</p>
          </div>
          
					<div className='flex'>
						<div className='flex flex-col'>
							<p>1</p>
							<p>1</p>
						</div>
            <div className='flex'>
            
						</div>
          </div>
				</div>
			</div>
		</div>
	);
};

export default LiveBettingCard;
