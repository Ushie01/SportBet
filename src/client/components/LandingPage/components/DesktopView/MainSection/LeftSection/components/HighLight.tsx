import React, { useState } from 'react';
import Link from 'next/link';
import Printer from '@/src/client/shared/Svg/Printer';
import Refresh from '@/src/client/shared/Svg/Refresh';
import { SoftwareSorting, ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import { TabBar } from '@/src/client/shared/Tab/TabBar';
import { classes, LINK_GAME_TYPES, Props } from '../constant';
import OddsRangeFilter from '@/src/client/shared/Filter/OddsRangeFilter';

const ActionButton = ({ icon, text, href }: Props) => (
	<Link href={href}>
		<div className={classes.actionButton}>
			{icon}
			<p className='text-xs'>{text}</p>
		</div>
	</Link>
);

const HighLight = () => {
	const [isClick, setIsClick] = useState(false);

	const handleClick = () => {
		setIsClick(!isClick);
	};

	return (
		<div className='flex flex-col pt-6'>
			<div className={classes.container}>
				<div className={classes.highlightsContainer}>
					<div className={classes.circle}></div>
					<h1 className={classes.title}>Highlights</h1>
				</div>
				<div className={classes.actionButtonsContainer}>
					<ActionButton
						href='#'
						icon={<Printer />}
						text='Print'
					/>
					<ActionButton
						href='#'
						icon={<Refresh />}
						text='Refresh'
					/>
				</div>
			</div>

			<div className='mt-1'>
				<div className='flex px-1 space-x-3'>
					<TabBar
						borderColor='border-green-500'
						hoverBgColor='hover:bg-green-700'
						hoverBorderColor='hover:border-b-green-700'
						initialState='Basketball'
						data={LINK_GAME_TYPES}
					/>
					<Link
						href='#'
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
					</Link>
				</div>

				<hr />

				{isClick && (
					<div className='py-5'>
						<OddsRangeFilter />
					</div>
				)}
			</div>
		</div>
	);
};

export default HighLight;
