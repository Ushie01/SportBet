import React from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import FeatureGames from './FeatureGames';
import FeatureMatches from './FeatureMatches';

const Featured = () => {
	const navValues = ['Featured Matches', 'Featured Games'];
	const { link, handleClick } = useLink('Featured Matches');

	return (
		<div className='p-2'>
			<div className='flex flex-col w-full h-max border shadow-2xl'>
				<div className='flex'>
					{navValues.map((value, index) => (
						<button
							key={index}
							onClick={() => handleClick(value)}
							className={`${
								link === value ? '' : 'bg-gray-200'
							} font-bold text-sm text-center w-1/2 h-12`}>
							<p>{value}</p>
						</button>
					))}
				</div>
				{link === 'Featured Matches' && <FeatureMatches />}
				{link !== 'Featured Matches' && <FeatureGames />}
			</div>
		</div>
	);
};

export default Featured;
