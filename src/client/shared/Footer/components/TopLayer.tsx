import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LeftArrow from '../../Svg/leftArrow';
import Logo from '../../../../assets/officialSport.png';
import LagosLogo from '../../../../assets/lagos.png';
import { LEGITXBET_DATA, SOCIAL_LINK } from '../constant/data';

const LogoComponent = () => (
  <div className='flex items-center justify-start'>
    <Image src={Logo} alt='offcialSport.png' height={80} width={280} />
    <Image src={LagosLogo} alt='Lagos alt' height={45} width={50} className='ml-5' />
  </div>
);

//NavigationItem component
const NavigationItem = ({ title, items }: {title:string, items:string[]}) => (
  <div className='flex flex-col items-start justify-start text-lightGray'>
    <h1 className='font-bold ml-1'>{title}</h1>
    <div className='pt-4'>
      {items.map((value:string, index:number) => (
        <div key={index} className='flex items-center justify-start pt-1 hover:text-gold'>
          <LeftArrow />
          <Link href='#' className='font-thin'>
            {value}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

// ContactInfo component
const ContactInfo = () => (
  <div className='text-white space-y-5'>
    <p className='font-bold'>Connect with Us</p>
    <div className='flex flex-col font-thin'>
      <p>Telephone: 07008888888 | 09088999988</p>
      <Link href='#'>Email: nigeria.support@legitxbet.com</Link>
    </div>
    <div className='flex space-x-4'>
      {SOCIAL_LINK.map((item, index) => (
        <Link key={index} href='#'>
          {item.link}
        </Link>
      ))}
    </div>
  </div>
);

//TopLayer component
const TopLayer = () => (
  <div className='flex items-start justify-between cursor-default py-4 text-xs px-48 bg-gray-900 border-b border-b-gray-600'>
    <div className='flex flex-col items-start justify-start space-y-4'>
      <Image src='/assets/logo1.png' alt='Logo alt' height={40} width={170} />
      <LogoComponent />
    </div>

    <div className='flex space-x-12'>
      {LEGITXBET_DATA.map((item, index) => (
        <NavigationItem key={index} title={item.title} items={item.items} />
      ))}
    </div>

    <ContactInfo />
  </div>
);

export default TopLayer;
