import LandingPage from '@/src/client/components/LandingPage';
import type { NextPage } from 'next';

const LandingPages: NextPage = (props) => (
	<div>
		<LandingPage {...props} />
	</div>
);

export default LandingPages;
