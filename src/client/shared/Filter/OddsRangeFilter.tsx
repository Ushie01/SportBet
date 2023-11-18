import React, { useState } from 'react';
import { Button } from '../Button/Button';
import SliderBar from './Slider';
import { SliderValue } from './Type';
import { translateSliderValue } from '../Utils/TranslateSliderValue';


const OddsRangeFilter = () => {
	const [sliderValue, setSliderValue] = useState<SliderValue>({min: 0,max: 0,});
	const translatedMinValue = translateSliderValue(sliderValue.min);
	const translatedMaxValue = translateSliderValue(sliderValue.max);

	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between font-bold w-full'>
				<p>Odds Range</p>
				<p className='text-green-700'>{`${translatedMinValue} - ${translatedMaxValue}`}</p>
			</div>

			<div className='flex items-center justify-between pt-5 space-x-2'>
				<div className='flex flex-col w-full'>
					<SliderBar setSliderValue={setSliderValue} />
					<div className='flex items-center justify-between text-gray-500'>
						<p>1</p>
						<p>Max</p>
					</div>
				</div>

				<div className='flex space-x-2 p-2'>
					<Button
						text='Clear'
						link='#'
						classValue='text-green-500 border py-2 px-4 border-green-700'
					/>
					<Button
						text='Apply'
						link='#'
						classValue='text-gray-500 border bg-gray-300 py-2 px-4'
					/>
				</div>
			</div>
		</div>
	);
};

export default OddsRangeFilter;
