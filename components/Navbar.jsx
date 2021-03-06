import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

import Image from 'next/image'
import logo from '../public/logo.jpg'

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar">
      <div className='navbar-container'>
        <p className='logo'>
           <Link href="/">
            <a>
              <Image src={logo} alt="Thomas Aurelius Logo" width="220px" height="40px" />
            </a>
           </Link>
        </p>
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
           <AiOutlineShopping size={50} />
           
           <span className='cart-item-qty' suppressHydrationWarning={true} > {(totalQuantities) ? totalQuantities : '0'}</span>
           
        </button>
        {showCart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar 