import React from 'react'
import Container from '../../components/Container/Container'
import TopLayer from './components/TopLayer'
import Warning from './components/Warning'
import PaymentMethod from './components/PaymentMethod'

const Footer = () => {
    return (
        <div className='mt-5'>
            <TopLayer />
            <Warning/>
            <PaymentMethod/>
        </div>
  )
}

export default Footer
