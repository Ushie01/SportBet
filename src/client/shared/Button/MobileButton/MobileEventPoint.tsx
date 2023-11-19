import { Button } from '../Button';
import DropdownButton from '../DropButton/MobileDropButton/DropButton';

const items = ['1', '1.5', '2', '2.5']

export const TwoOddsButton = () => {
	return (
		<div className='flex w-[180px]'>
			<Button
				text='2.3'
				classValue='text-green-500 h-9 w-[90px] bg-ash font-bold hover:text-white hover:bg-green-600'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[90px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
};

export const ThreeOddsButton = () => {
  return (
		<div className='flex w-[180px]'>
			<DropdownButton
				className='text-green-500 h-9 w-[60px] bg-ash font-bold hover:text-white hover:bg-green-600'
				items={items}
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[60px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[60px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
}

export const FourOddsButton = () => {
  return (
		<div className='flex w-[180px]'>
			<DropdownButton
				className='text-green-500 h-9 w-[45px] bg-ash font-bold hover:text-white hover:bg-green-600'
				items={items}
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[45px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[45px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='247.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[45px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
}

