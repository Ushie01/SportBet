import React from 'react';
import Image, { StaticImageData } from 'next/image';

type FeatureMatchCupProps = {
	cupImage: StaticImageData;
  cupType: string;
  linkValue: string;
};

const FeatureMatchCup = ({ cupImage, cupType, linkValue }: FeatureMatchCupProps) => {
	console.log(cupType, linkValue)
  
  return (
		<div className='pt-1'>
			<div className='flex items-center justify-center w-max border rounded-2xl'>
				<Image
					src={cupImage}
					alt='uefa alt'
					className='h-8 w-10 py-1 px-2'
				/>

				{linkValue === cupType && <p className='text-xs pr-2'>{cupType}</p>}
			</div>
		</div>
	);
};

export default FeatureMatchCup