import React  from 'react';
import { Slider } from 'antd';
import { Props, SliderValue } from './Type';


const SliderBar: React.FC<Props> = ({ setSliderValue }) => {
	const handleChange = (value: number | number[]) => {
		const [min, max] = Array.isArray(value) ? value : [value, value];
		const sliderValue: SliderValue = { min, max };
		setSliderValue(sliderValue);
	};

	return (
		<Slider
			range
			step={5}
			defaultValue={[0, 50]}
			onChange={handleChange}
			onAfterChange={handleChange}
		/>
	);
};

export default SliderBar;
