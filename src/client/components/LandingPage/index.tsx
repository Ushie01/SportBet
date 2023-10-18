import React from 'react';
import Header from '../../shared/Header';
import Gametype from '../../shared/Header/Gametype';
import PopularSection from './PopularSection';

const Landing = () => {
	return (
		<>
			<Header />
			<Gametype />
			<PopularSection />
		</>
	);
};

export default Landing;
