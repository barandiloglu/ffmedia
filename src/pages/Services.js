import React, { useEffect, useState } from 'react'
import '../css/Services.css'

import LoadingScreen from './LoadingScreens/LoadingScreenServices';
import LogoRedPink from '../resources/Logo-RedPink.png'

import Photo from '../resources/photos/DSC09028.jpg';

export const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 910); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <>{loading && <LoadingScreen />}</>
        <div className='flex flex-col min-h-screen bg-primary'>
          <div className='flex flex-col items-center w-full mt-10 space-y-8'>
                <h1 className='2xl:text-7xl min-[320px]:text-5xl font-lemon-milk text-third'>
                    ELEVATE YOUR 
                </h1>

                <h1 className='2xl:text-7xl min-[320px]:text-5xl font-lemon-milk text-third'>
                    ONLINE PRESENCE
                </h1>
          </div>

          <div className='flex flex-row items-center w-full mt-60 space-x-8 justify-between mb-20'>
            <div className='2xl:w-[20%] 2xl:ml-[-11.8%] xl:w-[40%] xl:ml-[-15.5%] lg:w-[50%] lg:ml-[-16.2%] md:w-[50%] md:ml-[-16%] sm:w-[50%] sm:ml-[-15.6%] min-[320px]:w-[50%] min-[320px]:ml-[-15.1%] flex'>
                <img
                    className={`object-contain`}
                    src={LogoRedPink}
                    alt='Logo-RedPink'
                />
            </div>

            {!loading && (
                <>
            <div className='2xl:w-[20%] xl:w-[30%] lg:w-[50%] md:w-[40%] sm:w-[50%] min-[320px]:w-[50%] flex image-container tilt-in-fwd-tl'>
                <img
                    className={`object-contain rounded-2xl `}
                    src={Photo}
                    alt='Photo'
                />
            </div>
              </>
            )}

            <div className='flex flex-row w-[45%] font-lemon-milk items-center text-third text-4xl'>
              {!loading && (
                <>
                  <div className='flex flex-col items-start'>
                    <ul className='space-y-8 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base min-[320px]:text-sm text-fourth mr-2'>
                      <li className='animate-slide-up-1'>01</li>
                      <li className='animate-slide-up-1'>02</li>
                      <li className='animate-slide-up-1'>03</li>
                      <li className='animate-slide-up-1'>04</li>
                      <li className='animate-slide-up-1'>05</li>
                      <li className='animate-slide-up-1'>06</li>
                    </ul>
                  </div>
                </>
              )}

              <div className='flex flex-col text-third font-lemon-milk 2xl:text-[34px] xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-base w-[60%]'>
                <div className='flex flex-col items-start'>
                  {!loading && (
                    <>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        SOCIAL MEDIA MANAGEMENT
                      </button>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        CONTENT CREATION
                      </button>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        SEO (SEARCH ENGINE OPTIMIZATION)
                      </button>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        WEB DESIGN
                      </button>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        PHOTOGRAPHY/VIDEOGRAPHY
                      </button>
                      <div className="line"></div>
                      <button className='whitespace-nowrap'>
                        PHOTO/VIDEO EDITING
                      </button>
                      <div className="line"></div>
                    </>
                  )}
                </div>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Services;
