import React from 'react'
import Container from '../../../Container/Container'
import Image from 'next/image'
import virtualImage from '../../../../../assets/virtualImage.png';

const VirtualImage = () => {
    return (
			<Container bgColor='bg-lightGray'>
				<div className='py-2'>
					<Image
						src={virtualImage}
						alt='virtualImage'
						className='h-24 w-full'
					/>
				</div>
			</Container>
		);
}

export default VirtualImage
