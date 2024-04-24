import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import '../css/Services.css'

import LoadingScreen from './LoadingScreens/LoadingScreenServices';
import LogoRedPink from '../resources/Logo-RedPink.png'

import Photo from '../resources/photos/DSC09028.jpg';
import Photo2 from '../resources/photos/DSC09113.jpg';
import Photo3 from '../resources/photos/DSC09148.jpg';
import Photo4 from '../resources/photos/DSC09154.jpg';
import Photo5 from '../resources/photos/IMG_4141.jpg';
import Photo6 from '../resources/photos/IMG_4182.jpg';

export const Services = () => {
  const [loading, setLoading] = useState(true);
  const [currentPhoto, setCurrentPhoto] = useState(Photo);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 910); 
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    { number: '01', text: 'SOCIAL MEDIA MANAGEMENT' },
    { number: '02', text: 'CONTENT CREATION' },
    { number: '03', text: 'SEO (SEARCH ENGINE OPTIMIZATION)' },
    { number: '04', text: 'WEB DESIGN' },
    { number: '05', text: 'PHOTOGRAPHY/VIDEOGRAPHY' },
    { number: '06', text: 'PHOTO/VIDEO EDITING' }
  ];
  
  const [hoveredButton, setHoveredButton] = useState(-1);

  const handleMouseEnter = (buttonIndex) => {
    setHoveredButton(buttonIndex);
    debouncedHandlePhotoChange([Photo, Photo2, Photo3, Photo4, Photo5, Photo6][buttonIndex]);
  };

  const handleMouseLeave = () => {
    setHoveredButton(-1);
  };

  const debouncedHandlePhotoChange = _.debounce((photo) => {
    setCurrentPhoto(photo);
  }, 10)

  return (
    <div>
      <>{loading && <LoadingScreen />}</>
        <div className='flex flex-col min-h-screen bg-primary'>
          <div className='flex flex-col items-center w-full mt-10 space-y-8'>
                <h1 className='2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                    ELEVATE YOUR 
                </h1>

                <h1 className='2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                    ONLINE PRESENCE
                </h1>
          </div>

          <div className='flex flex-row items-center justify-between w-full mt-20 mb-20 space-x-8'>
            {!loading && (
              <>
                <div className='items-center justify-end flex flex-row w-[50%]'>
                    <div className='flex w-[50%] image-container slide-in-left'>
                        <img
                            className={`object-cover rounded-2xl`}
                            src={currentPhoto}
                            alt='Photo'
                        />
                    </div>
                </div>
              </>
            )}

            <div className='flex flex-row items-center justify-center text-4xl w-[50%] font-lemon-milk text-third '>
              {!loading && (
                <>
                  <div className="overflow-x-auto ">
                    <table className="min-w-full">
                      <tbody className="bg-transparent divide-y divide-white">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-third whitespace-nowrap">
                            <div className={`flex items-center`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth"></div>
                                <div className="text-xl text-third"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className={'w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-fifth'}
                            onMouseEnter={() => {
                              handleMouseEnter(0);
                            }}                            
                          onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 0 ? 'animate-moveRight' : ''}`}>
                              <div class="flex flex-row items-center justify-start">
                                <div class="mr-8 text-sm font-medium text-fourth">{data[0].number}</div>
                                <div class="text-xl text-third">{data[0].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className="w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-fifth"
                            onMouseEnter={() => {
                              handleMouseEnter(1);
                            }}                            
                          onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 1 ? 'animate-moveRight' : ''}`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth">{data[1].number}</div>
                                <div className="text-xl text-third">{data[1].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className="w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-fifth"
                            onMouseEnter={() => {
                              handleMouseEnter(2);
                            }}
                          onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 2 ? 'animate-moveRight' : ''}`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth">{data[2].number}</div>
                                <div className="text-xl text-third">{data[2].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className="w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-fifth"
                            onMouseEnter={() => {
                              handleMouseEnter(3);
                            }}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 3 ? 'animate-moveRight' : ''}`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth">{data[3].number}</div>
                                <div className="text-xl text-third">{data[3].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className="w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-fifth"
                            onMouseEnter={() => {
                              handleMouseEnter(4);
                            }}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 4 ? 'animate-moveRight' : ''}`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth">{data[4].number}</div>
                                <div className="text-xl text-third">{data[4].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <button 
                            type="button" 
                            className="w-full px-6 py-4 text-sm font-medium transition-colors duration-300 ease-in-out text-third whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-black"
                            onMouseEnter={() => {
                              handleMouseEnter(5);
                            }}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className={`flex items-center ${hoveredButton === 5 ? 'animate-moveRight' : ''}`}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth">{data[5].number}</div>
                                <div className="text-xl text-third">{data[5].text}</div>
                              </div>
                            </div>
                          </button>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-third whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="mr-8 text-sm font-medium text-fourth"></div>
                                <div className="text-xl text-third"></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>


          </div>
        </div>
    </div>
  )
}

export default Services;
