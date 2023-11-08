import { Button } from '@/src/client/shared/Button/Button';
import DropdownButton from '@/src/client/shared/Button/DropButton';
import { ControlsChevronRightSmall, ChartLine } from '@heathmont/moon-icons-tw';
import React from 'react';

const BettingTab = () => {
	return (
		<div className='flex items-center space-x-5 -mt-1'>
			<div className='flex flex-col text-xs mt-5'>
				<div className='flex flex-col font-bold text-gray-800'>19:00</div>
				<div className='flex flex-col text-gray-400'>ID:33441</div>
			</div>

			<div className='w-full'>
				<hr className='py-1 mt-3' />

				<div className='flex items-center justify-between'>
					<div className='flex flex-col text-sx text-xs'>
						<div className='flex flex-col text-black'>CD Platense</div>
						<div className='flex flex-col text-black'>Alianza FC</div>
					</div>
					<div className='flex items-center justify-end'>
						<ChartLine
							height={30}
							width={30}
							fill='gray'
							className='mr-7'
						/>

						<div className='flex space-x-2'>
							<div>
								<Button
									text='1'
									link='#'
									classValue='py-2 px-6 hover:bg-green-700 bg-green-500 shadow-xl rounded-l text-white'
								/>
								<Button
									text='X'
									link='#'
									classValue='py-2 px-6 hover:bg-green-700 bg-green-500 shadow-xl border text-white'
								/>
								<Button
									text='2'
									link='#'
									classValue='py-2 px-6 hover:bg-green-700 bg-green-500 shadow-xl rounded-r text-white'
								/>
							</div>

							<div className='flex'>
								<DropdownButton />
								<Button
									text='X'
									link='#'
									classValue='py-2 px-6 hover:bg-green-700 bg-green-500 shadow-xl border text-white'
								/>
								<Button
									text='2'
									link='#'
									classValue='py-2 px-6 hover:bg-green-700 bg-green-500 shadow-xl rounded-r text-white'
								/>
							</div>
						</div>

						<div className='flex items-center justify-end w-16 h-11'>
							<div className='text-sm'>+12</div>
							<ControlsChevronRightSmall
								height={25}
								width={25}
								color='green'
								className='-mr-3'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BettingTab;
