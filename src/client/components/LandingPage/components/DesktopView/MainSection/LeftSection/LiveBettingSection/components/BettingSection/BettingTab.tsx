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
		<div className={`flex items-center space-x-7 pr-3`}>
			<div className='flex'>
				<div className='w-4 sectionbet h-12 bg-green-600'></div>
				<div className='flex flex-col text-sm py-1 section pl-1'>
					<div className='flex flex-col font-bold text-white text-sm'>Set3</div>
				</div>
			</div>

			<div className='w-full py-1 border-y border-gray-600'>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col text-sx text-sm text-green-500'>
						<div className='flex flex-col'>{teamOneName}</div>
						<div className='flex flex-col'>{teamTwoName}</div>
					</div>
					<div className='flex items-center justify-end space-x-6'>
						<div className='flex flex-col items-center justify-center text-sm text-white'>
							<p>3</p>
							<p>0</p>
						</div>

						<div className='flex space-x-2'>
							<div>
								<Button
									text={win}
									link='#'
									classValue='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-l text-sm text-white'
								/>
								<Button
									text={draw}
									link='#'
									classValue='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl border-x border-gray-900 text-sm text-white'
								/>
								<Button
									text={lose}
									link='#'
									classValue='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-r text-sm text-white'
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
									classValue='h-[37px] w-[56px]  hover:bg-green-500 bg-green-700 border-x border-gray-900  shadow-xl border-x text-sm text-white'
								/>
								<Button
									text={under}
									link='#'
									classValue='h-[37px] w-[56px] hover:bg-green-500 bg-green-700 shadow-xl rounded-r text-sm text-white'
								/>
							</div>
						</div>

						<div className='flex items-center justify-end w-12 h-11 text-white'>
							<div className='text-sm'>{`+${sportCount}`}</div>
							<ControlsChevronRightSmall
								height={25}
								width={25}
								className='-mr-3 text-green-500'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BettingTab;
