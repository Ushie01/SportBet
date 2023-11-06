import React from 'react'
import Container from '../../../Container/Container'
import Image from 'next/image'
import virtualImage from '../../../../../assets/virtualImage.png';
import Link from 'next/link';

const VirtualImage = () => {
    return (
			<Container bgColor='bg-lightGray'>
				<Link href='#' className='py-5'>
					<Image
						src={virtualImage}
						alt='virtualImage'
						className='h-24 w-full'
					/>
				</Link>
			</Container>
		);
}

export default VirtualImage
