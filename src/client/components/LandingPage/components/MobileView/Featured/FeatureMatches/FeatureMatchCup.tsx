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

const FeatureMatchCup = ({ cupImage, cupType, linkValue, selectedIndex, index }: FeatureMatchCupProps) => {  
  console.log(linkValue);
  return (
		<div className='flex flex-col items-center justify-center pt-1'>
			<div
				className={`flex items-center justify-center w-max border  rounded-2xl ${
					selectedIndex === index && 'border-gray-400'
				}`}>
				<Image
					src={cupImage}
					alt='uefa alt'
					className='h-8 w-10 py-1 px-2'
				/>

				{linkValue === cupType && <p className='text-xs pr-2'>{cupType}</p>}
			</div>

			{selectedIndex === index && (
				<div className='-mt-1'>
					<Pointer />
				</div>
			)}
		</div>
	);
};

export default FeatureMatchCup