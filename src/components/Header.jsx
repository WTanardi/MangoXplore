import React, { useState, useEffect } from 'react';

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set isScrolled to true when the user has scrolled down at least 50 pixels
      setScrolled(scrollTop > 50);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <header
        className={`${
          isOpen
            ? 'pb-48 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'
            : ''
        } w-full lg:py-6 flex justify-between items-center lg:px-12 px-6 py-6`}
      >
        <div className='flex items-center justify-between gap-9'>
          {/* Logo */}
          <a href='/'>
            <img
              src='/Logo.svg'
              alt=''
              className='w-36 max-lg:hidden'
            />
            <img
              src='/MobileLogo.svg'
              alt=''
              className='w-12 lg:hidden'
            />
          </a>

          {/* search */}
          <div className='max-lg:hidden'>
            <div className='w-80 border-2 rounded-full flex justify-between'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#7d7d7d'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='w-6 mx-4 my-3 absolute'
              >
                <circle
                  cx='11'
                  cy='11'
                  r='8'
                />
                <path d='m21 21-4.3-4.3' />
              </svg>
              <input
                type='text'
                className='w-full rounded-full py-3 pl-12'
                placeholder='Search Course ...'
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='w-10 lg:hidden cursor-pointer'
            onClick={toggleNav}
          >
            <line
              x1='4'
              x2='20'
              y1='12'
              y2='12'
            />
            <line
              x1='4'
              x2='20'
              y1='6'
              y2='6'
            />
            <line
              x1='4'
              x2='20'
              y1='18'
              y2='18'
            />
          </svg>
          <ul
            className={`lg:flex lg:gap-6 lg:items-center ${
              isOpen
                ? 'absolute right-8 gap-4 mt-4 flex-col flex items-end'
                : 'hidden'
            }`}
          >
            <li>Subscription</li>
            <li>Webinars</li>
            <li>Courses</li>
            <li
              className={`text-white bg-black px-4 py-1.5 rounded-full font-semibold`}
            >
              Login
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
