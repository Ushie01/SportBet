import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Pointer from '@/src/client/shared/Svg/Pointer';

type FeatureMatchCupProps = {
	cupImage: StaticImageData;
	cupType: string;
	linkValue: string;
	selectedIndex: number;
	index: number;
};

const TooltipFeatured: React.FC<FeatureMatchCupProps> = ({
	cupImage,
	cupType,
	linkValue,
	selectedIndex,
	index,
}) => {
	const isSelected = selectedIndex === index;

	const containerClasses = [
		'flex',
		'items-center',
		'justify-center',
		'w-max',
		'border',
		'rounded-2xl',
		isSelected && 'border-gray-400',
	].filter(Boolean).join(' ');

	return (
		<div className='flex flex-col items-center justify-center mt-1'>
			<div className={containerClasses}>
				<Image
					src={cupImage}
					alt='uefa alt'
					className='h-8 w-10 py-1 px-2'
				/>

				{linkValue === cupType ? (
					<p className='text-xs pr-2'>{cupType}</p>
				) : null}
			</div>

			{isSelected && (
				<div className='-mt-[1px]'>
					<Pointer />
				</div>
			)}
		</div>
	);
};

export default TooltipFeatured;