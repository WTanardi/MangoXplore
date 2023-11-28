import React from 'react';

export default function Header() {
  return (
    <>
      <header className='w-full py-6 flex justify-between items-center px-12'>
        <div className='flex items-center justify-between gap-9'>
          {/* Logo */}
          <a href='/'>
            <img
              src='/MangoXplore.svg'
              alt=''
            />
          </a>

          {/* search */}
          <div>
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
          <ul className='flex gap-6 items-center'>
            <li>Subscription</li>
            <li>Webinars</li>
            <li>Courses</li>
            <li className='text-white bg-black px-4 py-1.5 rounded-full font-semibold'>
              Login
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
