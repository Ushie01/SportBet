// import LandingPage from '@/client/components/LandingPage';
import LandingPage from '@/src/client/components/LandingPage';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>LegitXBet</title>
				<meta
					name='description'
					content='LegitXBet'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<LandingPage />
		</>
	);
}
