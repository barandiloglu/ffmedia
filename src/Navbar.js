import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { BsSlashLg } from "react-icons/bs";

import './Navbar.css'
import gif from './resources/logoGif8.gif'
import Instagram from './resources/instagram.png'
import TikTok from './resources/tiktok.png'
import LinkedIn from './resources/linkedin.png'


function Navbar() {
    const [showButtons, setShowButtons] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setShowButtons(false);
        } else {
          setShowButtons(true);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleActive = () => {
        const ham = document.querySelector('.ham');
        ham.classList.toggle('active');
    };


    return (
        <div className='flex flex-col items-center w-full bg-primary'>
            <div className='flex flex-row items-center justify-between w-full text-third font-alata'>
                {showButtons && (
                    <div className='flex flex-row items-center w-full ml-8 space-x-2'>
                        <p className='flex ml-4 text-third font-alata animate-slide-up-1'>frameandflowdesign@gmail.com</p>

                        <p className='flex font-alata text-third animate-slide-up-and-rotate'>
                            <BsSlashLg size={32}/>
                        </p>

                        <button className='animate-slide-up-2'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={Instagram} alt='instagram'></img>
                        </button>
                        <button className='animate-slide-up-3'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={TikTok} alt='tiktok'></img>
                        </button>
                        <button className='animate-slide-up-4'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={LinkedIn} alt='linkedin'></img>
                        </button>
                    </div>
                )}

                {!showButtons && (
                    <div className='flex flex-row items-center space-x-2 ml-2 w-full'>
                        <button className='animate-slide-up-1'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={Instagram} alt='instagram'></img>
                        </button>
                        <button className='animate-slide-up-2'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={TikTok} alt='tiktok'></img>
                        </button>
                        <button className='animate-slide-up-3'>
                            <img className='w-8 h-8 min-w-8 min-h-8' src={LinkedIn} alt='linkedin'></img>
                        </button>
                    </div>
                )}

                <div className='flex items-center justify-center w-full'>
                    <button className='w-32 h-32 animate-spin'>
                        <img src={gif} ></img>
                    </button>
                </div>

                {!showButtons && (
                    <div className='flex flex-row items-center justify-end space-x-2 mr-2 w-full'>
                        <button className='px-2 bg-secondary animate-slide-up-1'>
                            CONTACT US
                        </button>
                        <button className='px-2 animate-slide-up-2 z-50' onClick={() => setIsOpen(!isOpen)}>
                            <svg class="ham ham3" viewBox="0 0 100 100" width="80" onClick={toggleActive}>
                                <path
                                    class="line top"
                                    d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
                                />
                                <path
                                    class="line middle"
                                    d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
                                />
                                <path
                                    class="line bottom"
                                    d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
                                />
                            </svg>
                        </button>
                    </div>
                )}

                <div className="fixed inset-0 z-40 overflow-y-auto flex justify-center">
                    <Transition
                            show={isOpen}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0">
                                <div className="absolute inset-0 bg-primary opacity-75"></div>
                            </div>
                    </Transition>

                    <Transition
                            show={isOpen}
                            enter="transition-transform duration-300"
                            enterFrom="-translate-y-full"
                            enterTo="translate-y-0"
                            leave="transition-transform duration-300"
                            leaveFrom="translate-y-0"
                            leaveTo="-translate-y-full"
                        >
                            <div className="relative mt-32 w-full min-h-screen bg-secondary z-40 shadow-md transform">
                                <div className="p-4">
                                    <ul>
                                        <li className="mb-2">Menu Item 1</li>
                                        <li className="mb-2">Menu Item 2</li>
                                        <li className="mb-2">Menu Item 3</li>
                                        {/* Add more menu items as needed */}
                                    </ul>
                                </div>
                            </div>
                    </Transition>
                </div>


                {showButtons && (
                    <div className='flex flex-row items-center justify-end  w-full mr-8 space-x-8'>
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
                )}
            </div>

            <div className='border-container'>
                <div className='border-animation'></div>
                <div id="lower-line"></div>
            </div>
        </div>

    )
}

export default Navbar