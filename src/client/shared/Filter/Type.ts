import { Dispatch, SetStateAction } from "react";

export type Props = {
	setSliderValue: Dispatch<SetStateAction<SliderValue>>;
};

export type SliderValue = {
	min: number;
	max: number;
};
