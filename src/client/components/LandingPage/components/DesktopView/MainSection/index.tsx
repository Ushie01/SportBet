import React from 'react'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import Container from '@/src/client/components/Container/Container'

const MainSection = () => {
    return (
			<Container bgColor='bg-lightGray'>
				<div className='flex items-center space-x-6  pt-2 border-green-900 h-max'>
					<LeftSection />
					<RightSection />
				</div>
			</Container>
		);
}

export default MainSection
