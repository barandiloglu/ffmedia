import React, { useState, useEffect } from 'react'
import '../css/HomePage.css'
import LoadingScreen from './LoadingScreens/LoadingScreenServices';

import LogoBlackWhite from '../resources/Logo-BlackWhite.png'

import Photo from '../resources/photos/IMG_4146.jpg'
import Photo2 from '../resources/photos/IMG_4182.jpg'
import Photo3 from '../resources/photos/IMG_4011.jpg'

function HomePage() {
    const [textIndex, setTextIndex] = useState(0);
    const [isRotated, setIsRotated] = useState(false);
    const [rotationDegrees, setRotationDegrees] = useState(0);
    const [nextTextIndex, setNextTextIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsRotated(true);
          setRotationDegrees((prevDegrees) => prevDegrees - 90);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setTimeout(() => {
            setIsRotated(false);
          }, 1000);
        }, 2000); 
    
        return () => clearInterval(interval);
    }, []);

    const texts = [
        {
            title: 'STAND OUT IN THE DIGITAL STAMPEDE.',
            content: 'FrameFlow doesn\'t just build brands, we cultivate captivating experiences. Through strategic content creation, flawless web design, and meticulous social media management, we elevate your brand identity and propel it toward unparalleled success.',
            button: 'Let FrameFlow be the architect of your digital presence.'
        },
        {
            title: 'QUALITY OVER SPEED, EVERY TIME.',
            content: 'Quality over speed, every time. We won\'t rush through a project just to meet a deadline. We\'re all about taking the time to understand your brand, who you\'re trying to reach, and what you want to achieve online.',
            button: 'Let FrameFlow be the architect of your digital presence.'
        },
        {
            title: 'THE BOUTIQUE APPROACH.',
            content: 'Unlike large agencies, we offer personalized attention and a deep dive into your brand\'s unique story. We believe in quality over quantity, ensuring your campaigns resonate with your target audience.',
            button: 'Let FrameFlow be the architect of your digital presence.'
        }
    ];
    
    
  return (
    <div className='flex flex-col w-full min-h-screen bg-primary'>
        <div className='flex flex-col items-center w-full mt-20 space-y-8'>
            <h1 className='2xl:text-7xl min-[320px]:text-5xl font-lemon-milk text-third'>
                WE CREATE
            </h1>

            <h1 className='2xl:text-7xl min-[320px]:text-5xl font-lemon-milk text-secondary'>
                THE CONTENT
            </h1>
        </div>

        <div className='flex w-full mt-10 bg-secondary'>
            <div className='flex flex-row w-full'>
                <div className='2xl:w-[15%] 2xl:ml-[-8.2%] xl:w-[20%] xl:ml-[-11%] lg:w-[20%] lg:ml-[-11%] md:w-[30%] md:ml-[-16%] sm:w-[25%] sm:ml-[-13%] min-[320px]:w-[35%] min-[320px]:ml-[-17%] flex' 
                    style={{
                    }}
                >
                    <img
                        className={`object-contain`}
                        src={LogoBlackWhite}
                        alt='Logo-BlackWhite'
                        style={{
                            transform: `rotate(${rotationDegrees}deg)`,
                            transition: isRotated ? 'transform 0.5s ease' : 'none',
                        }}
                    />
                </div>

                <div className='flex flex-col justify-between w-full ml-4 bg-transparent'>
                    <h1 className={`mt-2 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg min-[320px]:text-[11px] text-third font-lemon-milk ${isRotated ? 'animate-slide-up-1' : ''}`}>
                        {texts[textIndex].title}
                    </h1>

                    <p className={`2xl:text-3xl xl:text-xl lg:text-lg md:text-md sm:text-xs min-[320px]:text-[10px] text-justify mr-[10%] xl:mt-2 text-third font-alata ${isRotated ? 'animate-slide-up-1' : ''}`}>
                        {texts[textIndex].content}
                    </p>

                    <p className={`mt-2 mb-2 underline 2xl:text-3xl xl:text-xl sm:text-xs min-[320px]:text-[9px] text-third font-alata ${isRotated ? 'animate-slide-up' : ''}`}>
                        {texts[textIndex].button}
                    </p>
                </div>
            </div>
        </div>

        <div className='flex w-full mt-20 border border-red-500'>
            <div className='flex flex-row justify-center w-full mx-20 border border-yellow-300'>
                <div className='flex w-[35%] border justify-center border-green-500'>
                    <img src={Photo} className='object-cover'></img>
                </div>

                <div className='flex flex-col justify-between w-[55%] h-96 ml-10 border border-blue-400'>
                    <img src={Photo2} className='object-cover mb-2 h-1/2'></img>
                    <img src={Photo3} className='object-cover h-1/2'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage