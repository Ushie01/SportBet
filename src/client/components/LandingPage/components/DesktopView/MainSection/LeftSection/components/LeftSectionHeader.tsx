import React, { useState } from 'react';
import Link from 'next/link';
import Printer from '@/src/client/shared/Svg/Printer';
import Refresh from '@/src/client/shared/Svg/Refresh';
import OddsRangeFilter from '@/src/client/shared/Filter/OddsRangeFilter';
import { TabBar } from '@/src/client/shared/Tab/TabBar';
import { SoftwareSorting, ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import { classes, LINK_GAME_TYPES, Props } from '../constant';

type LeftSectionHeaderProps = {
	mainBorderColor: string;
	filter: boolean;
	bgColor: string;
	circleColor: string;
	textColor: string;
	iconColor: string;
	iconTextColor: string;
	title: string;
};

const ActionButton = ({ icon, text, href }: Props) => (
	<Link href={href}>
		<div className={classes.actionButton}>
			{icon}
			<p className='text-xs'>{text}</p>
		</div>
	</Link>
);

const LeftSectionHeader = ({
	filter,
	bgColor,
	circleColor,
	iconTextColor,
	mainBorderColor,
	textColor,
	iconColor,
	title,
}: LeftSectionHeaderProps) => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
	};

	return (
		<div className={`flex flex-col pt-6 px-3 ${bgColor} `}>
			<div className={classes.container}>
				<div className={classes.highlightsContainer}>
					<div className={`${classes.circle} ${circleColor}`}></div>
					<h1 className={`${classes.title} ${textColor}`}>{title}</h1>
				</div>
				<div className={`${classes.actionButtonsContainer} ${iconTextColor}`}>
					<ActionButton
						href='#'
						icon={<Printer color={iconColor} />}
						text='Print'
					/>
					<ActionButton
						href='#'
						icon={<Refresh color={iconColor} />}
						text='Refresh'
					/>
				</div>
			</div>

			<div className='mt-1'>
				<div className='flex px-1 space-x-3'>
					<TabBar
						borderColor={`border-green-700 ${textColor}`}
						hoverBgColor='hover:bg-green-500'
						hoverBorderColor={`hover:border-b-green-500 ${mainBorderColor} ${textColor}`}
						initialState='Basketball'
						data={LINK_GAME_TYPES}
					/>

					{filter && (
						<div
							className='flex items-center justify-end'>
							<p className='text-gray-600'>Filter</p>
							{!isClick && (
								<SoftwareSorting
									width={30}
									height={30}
									onClick={handleClick}
								/>
							)}

							{isClick && (
								<ControlsCloseSmall
									width={30}
									height={30}
									onClick={handleClick}
								/>
							)}
						</div>
					)}

					{!filter && <div className='w-12'></div>}
				</div>

				<hr className='border-gray-600'/>

				{isClick && (
					<div className='py-5'>
						<OddsRangeFilter />
					</div>
				)}
			</div>
		</div>
	);
};

export default LeftSectionHeader;
