export const translateSliderValue = (value: number): string => {
	if (value === 100) return 'Max';
	if (value >=  90) return '20';
	if (value >= 80) return '10';
	if (value >= 70) return '5';
	if (value >= 60) return '4';
	if (value >= 50) return '3.5';
	if (value >= 40) return '3';
	if (value >= 35) return '2.5';
	if (value >= 30) return '2';
	if (value >= 25) return '1.5';
	if (value >= 20) return '1.4';
	if (value >= 15) return '1.3';
	if (value >= 10) return '1.2';
	if (value >= 5) return '1.1'
	return '1';
};