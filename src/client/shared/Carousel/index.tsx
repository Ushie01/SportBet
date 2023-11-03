import React from 'react';
import { Carousel, MenuItem } from '@heathmont/moon-core-tw';
import { StaticImageData } from 'next/image';

type Props = {
	renderCarouselItems: () => React.ReactNode;
	selected: number;
};

type MenuItemProps = {
	items: StaticImageData[];
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
};

type mobileCarouselProp = {
	renderCarouselItems: () => React.ReactNode;
	classValue: string;
};

export const MenuItems: React.FC<MenuItemProps> = ({
	items,
	selected,
	setSelected,
}) => {
	return (
		<>
			{items.map((_, index) => (
				<MenuItem
					key={index}
					isActive={selected === index}
					onClick={() => setSelected(index)}>
					<span
						className={`${
							selected === index ? 'bg-blue-900' : 'bg-white'
						} rounded-full hover:bg-blue-700 h-2 w-2 cursor-default`}></span>
				</MenuItem>
			))}
		</>
	);
};

export const CustomCarousel = ({ renderCarouselItems, selected }: Props) => {
	return (
		<Carousel
			selectedIndex={selected}
			autoSlideDelay={7000}
			step={1}>
			<Carousel.Reel className='h-[250px]'>
				{renderCarouselItems()}
			</Carousel.Reel>
		</Carousel>
	);
};

export const MobileCarousel = ({
	renderCarouselItems,
	classValue,
}: mobileCarouselProp) => {
	return (
		<Carousel>
			<Carousel.Reel className={classValue}>
				{renderCarouselItems()}
			</Carousel.Reel>
		</Carousel>
	);
};
