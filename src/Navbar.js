import React from 'react'

import { BsSlashLg } from "react-icons/bs";
import './Navbar.css'
import gif from './resources/logoGif8.gif'
import Instagram from './resources/instagram.png'
import TikTok from './resources/tiktok.png'
import LinkedIn from './resources/linkedin.png'

import Logo from './shutter.svg'

function Navbar() {
  return (
    <div className='flex flex-col w-full bg-primary items-center h-[10%]'>
        <div className='flex flex-row items-center justify-between w-full text-third font-alata'>
            <div className='flex flex-row items-center ml-8 space-x-2'>
                <p className='flex ml-4 text-third font-alata animate-slide-up-1'>frameandflowdesign@gmail.com</p>

                <p className='flex font-alata text-third animate-slide-up-and-rotate'>
                    <BsSlashLg size={32}/>
                </p>

                <button className='animate-slide-up-2'>
                    <img className='w-8 h-8' src={Instagram} alt='instagram'></img>
                </button>
                <button className='animate-slide-up-3'>
                    <img className='w-8 h-8' src={TikTok} alt='tiktok'></img>
                </button>
                <button className='animate-slide-up-4'>
                    <img className='w-8 h-8' src={LinkedIn} alt='linkedin'></img>
                </button>
            </div>

            <div className='flex items-center mr-12'>
                <button className='w-32 h-32 animate-spin'>
                    <img src={gif} ></img>
                </button>
            </div>

            <div className='flex flex-row items-center mr-8 space-x-8'>
                <button className='animate-slide-up-1'>
                    PROJECTS
                </button>
                <button className='animate-slide-up-2'>
                    SERVICES
                </button>
                <button className='animate-slide-up-3'>
                    WHY US?
                </button>
                <button className='px-2 bg-secondary animate-slide-up-4'>
                    CONTACT US
                </button>
            </div>
        </div>

        <div className='border-container'>
            <div className='border-animation'></div>
            <div id="lower-line"></div>
        </div>
    </div>

  )
}

export default Navbar