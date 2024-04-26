import React, { useEffect, useState, useRef } from 'react'
import _ from 'lodash';
import '../css/Services.css'

import LoadingScreen from './LoadingScreens/LoadingScreenServices';

import Photo from '../resources/photos/DSC09028.jpg';
import Photo2 from '../resources/photos/DSC09113.jpg';
import Photo3 from '../resources/photos/DSC09148.jpg';
import Photo4 from '../resources/photos/DSC09154.jpg';
import Photo5 from '../resources/photos/IMG_4141.jpg';
import Photo6 from '../resources/photos/IMG_4182.jpg';
import MockUp from '../resources/phoneServices.png'
import gridBanner1 from '../resources/gridBanner1.png'
import gridBanner2 from '../resources/gridBanner2.png'
import gridBanner3 from '../resources/gridBanner3.png'
import googleIcon from '../resources/googleIcon.svg'

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

  const triggerRef = useRef(null);
  const animatedRef = useRef(null);

  useEffect(() => {
    const triggerOptions = {
      threshold: 0.5
    };

    const triggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animatedRef.current.classList.add('scale-in-center');
        }
      });
    }, triggerOptions);

    if (triggerRef.current) {
      triggerObserver.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        triggerObserver.unobserve(triggerRef.current);
      }
    };
  }, []);

  const banners = [gridBanner1, gridBanner2, gridBanner3];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentBannerIndex + 1) % banners.length;
      setCurrentBannerIndex(newIndex);
      setOffset(-newIndex * 100); // Adjust to move the next banner into view
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentBannerIndex, banners.length]);

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

          <div className='flex flex-row items-center w-full mt-20 mb-20 space-x-8'>
            {!loading && (
              <>
                <div className='items-center justify-center flex flex-row w-[50%]'>
                    <div className='flex w-[50%] image-container slide-in-left'>
                        <img
                            className={`object-cover rounded-2xl`}
                            src={currentPhoto}
                            alt='Photo'
                        />
                    </div>
                </div>

                <div className="overflow-x-auto w-[40%]">
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

          <div className='flex flex-col items-center w-full mt-10 space-y-8'>
            <h1 className='2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                SOCIAL MEDIA 
            </h1>

            <h1 className='2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                MANAGEMENT
            </h1>
          </div>

          <div className='flex flex-col items-center justify-center w-full mt-10 space-y-8'>
            <div className='flex w-[90%] items-center justify-center text-center'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl font-alata text-third'>
                Social media is more than just posting; it's about creating meaningful interactions and fostering a community around your brand. 
              </p>
            </div>
          
            <div className='flex w-[90%] items-center justify-center text-center'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl  font-alata text-third'>
                With FrameFlow's social media management services, we take a holistic approach, crafting engaging content, managing your social channels, and implementing targeted strategies to grow your audience and drive engagement. 
              </p>
            </div>

            <div className='flex w-[90%] items-center justify-center text-center'   ref={triggerRef} id="triggerDiv">
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl  font-alata text-third'>
                From content calendars to analytics, we handle every aspect of your social media presence with creativity and precision.
              </p>
            </div>
          </div>

          <div class='flex flex-col bg-services-wave bg-cover bg-center w-full h-[700px] items-center justify-center mt-10' ref={animatedRef} id="animatedDiv">
            <img className='w-[50%]' src={MockUp} alt='Phone Mockups'></img>
          </div>

          <div className='flex flex-col justify-start w-full mt-10 space-y-8'>
            <h1 className='ml-10 2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                CONTENT
            </h1>

            <h1 className='ml-10 2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                CREATION
            </h1>
          </div>

          <div className='flex flex-col w-full mt-10 space-y-8'>
            <div className='flex w-[60%] items-center justify-center ml-10'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl font-alata text-third'>
                At FrameFlow, our content creation services go beyond just words on a page. We delve into the heart of your brand, crafting narratives that resonate with your audience. 
              </p>
            </div>

            <div className='flex w-[60%] items-center justify-center ml-10'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl font-alata text-third'>
                From engaging blog posts and informative articles to compelling website copy and captivating social media content, we ensure every word reflects your brand's personality and drives meaningful connections with your audience.
              </p>
            </div>
          </div>

          <div className="mt-10 border-8 carousel-container border-third">
            <div className="carousel-wrapper" style={{ transform: `translateX(${offset}%)` }}>
              {banners.map((banner, index) => (
                <img key={index} src={banner} alt={`Banner ${index + 1}`} className="carousel-item" />
              ))}
            </div>
          </div>

          <div className='flex flex-col items-end justify-end w-full mt-32 space-y-8'>
            <h1 className='mr-10 2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                SEO (SEARCH ENGINE
            </h1>

            <h1 className='mr-10 2xl:text-7xl xl:text-7xl lg:text-6xl min-[320px]:text-4xl font-lemon-milk text-third'>
                OPTIMIZATION)
            </h1>
          </div>

          <div className='flex flex-col items-end w-full mt-10 space-y-8'>
            <div className='flex w-[60%] items-center mr-10 justify-center text-end ml-10'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl font-alata text-third'>
                In the vast digital landscape, standing out is crucial, and that's where our SEO expertise shines. We meticulously analyze search trends, conduct in-depth keyword research, and optimize your website for top search engine rankings. 
              </p>
            </div>

            <div className='flex w-[60%] items-center mr-10 justify-center text-end ml-10'>
              <p className='2xl:text-xl xl:text-lg lg:text-2xl min-[320px]:text-xl font-alata text-third'>
                Our strategic approach to SEO ensures that your brand not only gets noticed but also stays ahead of the competition, driving organic traffic and increasing your online visibility.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-end w-full mt-10'>
            <div className='flex justify-between bg-white rounded-[50px] w-[40%] mr-12'>
              <img className='w-16 h-16' src={googleIcon} alt='Google'></img>

              <img className='w-16 h-16' src={googleIcon} alt='Google'></img>
            </div>
          </div>


        </div>
    </div>
  )
}

export default Services;
