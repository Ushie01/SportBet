import React from 'react';
import Link from 'next/link';
import Printer from '@/src/client/shared/Svg/Printer';
import Refresh from '@/src/client/shared/Svg/Refresh';
import { SoftwareSorting } from '@heathmont/moon-icons-tw';
import { SportCategoryLink } from '@/src/client/shared/SportCategoryLink';
import { classes, LINK_GAME_TYPES, Props } from '../constant';

const ActionButton = ({ icon, text, href }: Props) => (
	<Link href={href}>
		<div className={classes.actionButton}>
			{icon}
			<p className='text-xs'>{text}</p>
		</div>
	</Link>
);

const HighLight = () => {
	return (
		<div className='pt-6 px-4'>
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
					<SportCategoryLink
						borderColor='border-green-500'
						hoverBgColor='hover:bg-green-700'
						hoverBorderColor='hover:border-b-green-700'
						initialState='Basketbell'
						data={LINK_GAME_TYPES}
					/>
					<Link
						href='#'
						className='flex items-center justify-end'>
						<p className='text-gray-600'>Filter</p>
						<SoftwareSorting
							width={30}
							height={30}
						/>
					</Link>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default HighLight;
