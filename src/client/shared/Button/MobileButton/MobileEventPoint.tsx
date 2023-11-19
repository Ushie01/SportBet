import { Button } from '../Button';
import DropdownButton from '../DropButton/MobileDropButton/DropButton';

const items = ['1', '1.5', '2', '2.5']

export const TwoOddsButton = () => {
	return (
		<div className='flex w-[210px]'>
			<Button
				text='2.3'
				classValue='text-green-500 h-9 w-[105px] bg-ash font-bold hover:text-white hover:bg-green-600'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[105px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
};

export const ThreeOddsButton = () => {
  return (
		<div className='flex w-[170px]'>
			<DropdownButton
				className='text-green-500 h-9 w-[56.6px] bg-ash font-bold hover:text-white hover:bg-green-600'
				items={items}
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[56.6px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[56.6px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
}

export const FourOddsButton = () => {
  return (
		<div className='flex w-[200px]'>
			<DropdownButton
				className='text-green-500 h-9 w-[52.5px] bg-ash font-bold hover:text-white hover:bg-green-600'
				items={items}
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[52.5px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[52.5px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[52.5px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
}

