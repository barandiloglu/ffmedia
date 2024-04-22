import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';

import { BsSlashLg } from "react-icons/bs";

import './Navbar.css'
import gif from './resources/logoGif8.gif'
import Instagram from './resources/instagram.png'
import TikTok from './resources/tiktok.png'
import LinkedIn from './resources/linkedin.png'


function Navbar() {
    const navigate = useNavigate();

    const [showButtons, setShowButtons] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);

    const handleRoute = (buttonId) => {
        navigate(`/${buttonId}`);
    };

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

    const toggleMobileBar = () => {
        if (isOpen) {
            setIsOpen(false);
            setAnimate(false); 
            setAnimate2(false); 
            setAnimate3(false); 
        } else {
            setIsOpen(true); 
            setTimeout(() => {
                setAnimate(true); 

                setTimeout(() => {
                    setAnimate2(true); 

                    setTimeout(() => {
                        setAnimate3(true);  
                    }, 500);

                }, 500)
            }, 500);
        }
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
                    <div className='flex flex-row items-center w-full ml-2 space-x-2'>
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

                <div className={`flex items-center justify-center w-full ${isOpen ? 'z-50' : 'z-50'}`}>
                    <button className='w-32 h-32 animate-spin' onClick={() => handleRoute('')}>
                        <img src={gif}></img>
                    </button>
                </div>

                {!showButtons && (
                    <div className='flex flex-row items-center justify-end w-full mr-2 space-x-2'>
                        <button className='z-50 px-2 animate-slide-up-2' onClick={toggleMobileBar}>
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

                <div className={`absolute top-0 left-0 flex bg-primary min-h-screen w-full ${isOpen ? 'animate-slide-down z-10' : 'animate-slide-up -z-10'}`}>
                    <div className='mt-40 ml-10'>
                        <ul className='space-y-20'>
                            <li>
                                <button className={`text-3xl ${animate ? 'underline-b animate-button-up-1' : 'opacity-0'}`} onClick={() => handleRoute('projects')}>
                                    PROJECTS
                                </button>
                            </li>

                            <li>
                                <button className={`text-3xl ${animate2 ? 'underline-b animate-button-up-2' : 'opacity-0'}`} onClick={() => handleRoute('services')}>
                                    SERVICES
                                </button>
                            </li>

                            <li>
                                <button className={`text-3xl ${animate3 ? 'underline-b animate-button-up-3' : 'opacity-0'}`} onClick={() => handleRoute('why-us')}>
                                    WHY US?
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {showButtons && (
                    <div className='flex flex-row items-center justify-end w-full mr-8 space-x-8'>
                        <button className='animate-slide-up-1' onClick={() => handleRoute('projects')}>
                            PROJECTS
                        </button>
                        <button className='animate-slide-up-2' onClick={() => handleRoute('services')}>
                            SERVICES
                        </button>
                        <button className='animate-slide-up-3' onClick={() => handleRoute('why-us')}>
                            WHY US?
                        </button>
                        <button className='px-2 bg-secondary animate-slide-up-4'>
                            CONTACT US
                        </button>
                    </div>
                )}
            </div>

            <div className='z-50 border-container'>
                <div className='border-animation'></div>
                <div id="lower-line"></div>
            </div>
        </div>

    )
}

export default Navbar