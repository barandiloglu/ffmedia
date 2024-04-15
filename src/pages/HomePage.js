import React, { useState, useEffect } from 'react'
import '../css/HomePage.css'

import LogoBlackWhite from '../resources/Logo-BlackWhite.png'

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
            title: 'Test',
            content: 'FrameFlow doesn\'t just build brands, we cultivate captivating experiences. Through strategic content creation, flawless web design, and meticulous social media management, we elevate your brand identity and propel it toward unparalleled success.',
            button: 'Let FrameFlow be the architect of your digital presence.'
        },
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
                <img
                    className={`2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[25%] min-[320px]:w-[20%] object-cover z-10`}
                    src={LogoBlackWhite}
                    alt='Logo-BlackWhite'
                    style={{
                        marginLeft: '-15%',
                        transform: `rotate(${rotationDegrees}deg)`,
                        transition: isRotated ? 'transform 0.5s ease' : 'none',
                    }}
                />

                <div className='flex w-full flex-col justify-between bg-transparent'>
                    <h1 className={`mt-4 xl:text-2xl sm:text-xl min-[320px]:text-md text-third font-lemon-milk ${isRotated ? 'animate-slide-up-1' : ''}`}>
                        {texts[textIndex].title}
                    </h1>

                    <p className='xl:text-xl sm:text-md min-[320px]:text-xs text-justify mr-[10%] xl:mt-2 sm:mt-4 text-third font-alata'>
                        {texts[textIndex].content}
                    </p>

                    <p className='mt-4 mb-4 underline xl:text-xl sm:text-md min-[320px]:text-xs text-third font-alata'>
                        {texts[textIndex].button}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage