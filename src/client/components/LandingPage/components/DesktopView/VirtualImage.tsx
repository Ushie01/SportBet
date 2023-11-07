import React from 'react'
import Container from '../../../Container/Container'
import Image from 'next/image'
import virtualImage from '../../../../../assets/virtualImage.png';
import Link from 'next/link';

const VirtualImage = () => {
    return (
			<Container bgColor='bg-lightGray'>
				<div className='my-2'>
					<Link href='#'>
						<Image
							src={virtualImage}
							alt='virtualImage'
							className=''
						/>
					</Link>
				</div>
			</Container>
		);
}

export default VirtualImage
