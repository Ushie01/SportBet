import React, { useState } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import SliderBar from './Slider';
import { SliderValue } from './Type';
import { translateSliderValue } from '../Utils/TranslateSliderValue';
import useDeviceType from '../Hooks/useDeviceType';

type OddsRangeFilterProps = {
	setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const OddsRangeFilter = ({ setClick }: OddsRangeFilterProps) => {
	const { isMobile } = useDeviceType();
	const [sliderValue, setSliderValue] = useState<SliderValue>({
		min: 0,
		max: 0,
	});
	const translatedMinValue = translateSliderValue(sliderValue.min);
	const translatedMaxValue = translateSliderValue(sliderValue.max);

	return (
		<div className={`flex flex-col border-b ${!isMobile && 'pb-2'}`}>
			<div className='flex items-center justify-between font-bold w-full'>
				<p>Odds Range</p>
				<p className='text-green-700'>{`${translatedMinValue} - ${translatedMaxValue}`}</p>
			</div>

			<div
				className={`flex ${
					isMobile ? 'flex-col w-full' : 'flex-row'
				} items-center justify-between pt-5 space-x-2`}>
				<div
					className={`flex flex-col w-full px-2 ${
						isMobile && 'px-2'
					}`}>
					<SliderBar setSliderValue={setSliderValue} />
					<div className='flex items-center justify-between text-gray-500'>
						<p>1</p>
						<p>Max</p>
					</div>
				</div>

				<div
					className={`flex space-x-2 mt-2 ${
						isMobile ? 'w-full' : ''
					}`}>
					<Button
						onClick={() => {
							setClick(false);
						}}
						className={`${
							isMobile ? 'w-full' : 'px-4'
						} text-green-500 border py-2 shadow-lg  border-green-500`}>
						Clear
					</Button>
					<Button
						onClick={() => {
							setClick(false);
						}}
						className={`${
							isMobile ? 'w-full' : 'px-4'
						}  border shadow-xl py-2 ${
							sliderValue.max > 0 || sliderValue.min > 0
								? 'bg-green-600 text-white'
								: 'bg-gray-300 text-gray-500'
						}`}>
						Apply
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OddsRangeFilter;
