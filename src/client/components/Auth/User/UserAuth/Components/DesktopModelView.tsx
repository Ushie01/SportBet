import React, { useState } from 'react';
import Login from '../Login/DesktopLogin';
import Register from '../Register/DesktopRegister';
import { Tab } from '@/src/client/shared/Tab/TabBar';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { useVisibilityControl } from '@/src/client/shared/Hooks/useVisibilityControl';

const DesktopModalView = () => {
	const navItem = ['Register', 'Login'];
	const { link } = useLink('Register');
	const { handleClick } = useVisibilityControl();
	const [tabValue, setTabValue] = useState('Register');

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex items-center justify-between py-8 px-44 w-[600px]'>
				<Tab
					initialState='Register'
					data={navItem}
					setTabValue={setTabValue}
					handleTabClick={handleClick}
					borderBottomColor='border-b-white'
					borderColor='border-green-500 text-green-500'
					className='text-2xl text-black px-4 font-thin bg-white'
				/>
			</div>
                                                                                    
			<div className='py-8 bg-gray-100 w-[800px] h-[390px]'>
				{link === tabValue ? <Register /> : <Login />}
			</div>
		</div>
	);
};

export default DesktopModalView;
