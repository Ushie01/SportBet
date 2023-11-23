import { Button } from '@/src/client/shared/Button/Button';
import DropdownButton from '@/src/client/shared/Button/DropButton/DesktopDropButton/DropButton';
import { ControlsChevronRightSmall, ChartLine } from '@heathmont/moon-icons-tw';
import React from 'react';
import { BetProps } from '../../../constant/props';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import { GAME_VALUES } from '../../../constant/data';

const BettingTab = ({
	time,
	sportId,
	teamOne,
	teamTwo,
	win,
	draw,
	lose,
	goal,
	over,
	under,
	sportCount,
}: BetProps) => {
	const teamOneName = truncateText(teamOne, 25);
	const teamTwoName = truncateText(teamTwo, 25);
	return (
		<div className={`flex items-center space-x-5`}>
			<div className='flex flex-col text-sm py-1 '>
				<div className='flex flex-col font-bold text-gray-800 text-sm'>
					{time}
				</div>
				<div className='flex flex-col text-gray-400'>{`ID:${sportId}`}</div>
			</div>

			<div className='w-full py-1 border-y'>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col text-sx text-sm'>
						<div className='flex flex-col text-black'>
							{teamOneName}
						</div>
						<div className='flex flex-col text-black'>
							{teamTwoName}
						</div>
					</div>
					<div className='flex items-center justify-end space-x-4'>
						<ChartLine
							height={30}
							width={30}
							fill='gray'
						/>

						<div className='flex space-x-2'>
							<div>
								<Button
									text={win}
									link='#'
									className='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-l text-sm text-white'
								/>
								<Button
									text={draw}
									link='#'
									className='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl border-x border-gray-400 text-sm text-white'
								/>
								<Button
									text={lose}
									link='#'
									className='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-r text-sm text-white'
								/>
							</div>

							<div className='flex items-center'>
								<DropdownButton
									goal={goal}
									items={GAME_VALUES}
								/>
								<Button
									text={over}
									link='#'
									className='h-[37px] w-[56px]  hover:bg-green-500 bg-green-700 shadow-xl border-x border-gray-400 text-sm text-white'
								/>
								<Button
									text={under}
									link='#'
									className='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-r text-sm text-white'
								/>
							</div>
						</div>

						<div className='flex items-center justify-end w-12 h-11'>
							<div className='text-sm'>{`+${sportCount}`}</div>
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
