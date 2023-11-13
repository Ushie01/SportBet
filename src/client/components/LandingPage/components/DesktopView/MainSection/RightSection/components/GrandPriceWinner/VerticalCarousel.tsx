// VerticalCarousel.js
import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const VerticalCarousel = ({ items }) => {
	const [index, setIndex] = useState(0);
	const nextIndex = () => {
		setIndex((prevIndex) => (prevIndex + 1) % items.length);
	};
	const styles = useSpring({
		transform: `translate3d(0, -${index * 100}%, 0)`,
		config: config.molasses, // Adjust the stiffness and damping for a slower animation
	});

	return (
		<div className='carousel-container'>
			<animated.div
				className='carousel'
				style={styles}>
				{items.map((item, i) => (
					<div
						key={i}
						className='carousel-item'>
						{item}
					</div>
				))}
			</animated.div>
			<button onClick={nextIndex}>Next</button>
		</div>
	);
};

export default VerticalCarousel;
