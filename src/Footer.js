import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { PiNavigationArrowFill } from "react-icons/pi";

import Logo from '../src/resources/Logo-BlackWhite.png'
import Logo2 from '../src/resources/White-Transparent.png'

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

  return (
    <div className='flex flex-col items-center w-full bg-secondary'>
        <div className='flex items-center justify-center w-full text-third font-alata'>
            <button className='w-32 h-32 mt-12'>
                <img src={Logo}></img>
            </button>
        </div>

        <div className='flex flex-row w-full mt-8 mb-12 text-third font-alata'>
            <div className='flex flex-row items-end justify-start w-full 2xl:ml-16 sm:ml-2 min-[320px]:ml-2'>
                <FaRegCopyright />
                <img className='w-32 ml-2' src={Logo2} alt='Logo-Footer'></img>
            </div>

            <div className='flex flex-col items-center justify-center w-full'>
                <button className='rotate-45 text-primary' onClick={scrollToTop}><PiNavigationArrowFill size={20}/></button>
                <button onClick={scrollToTop}>BACK TO TOP</button>
            </div>

            <div className='flex flex-row items-end justify-end w-full 2xl:mr-16 sm:mr-2 min-[320px]:mr-2'>
                <h1>PRIVACY POLICY</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer;
