import React from 'react';

export default function () {
  return (
    <>
      <footer className=''>
        <ul className='flex justify-evenly px-24 md:px-48 mx-8 py-4 border-t-[1px] border-gray-200'>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-6'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect
                width='4'
                height='12'
                x='2'
                y='9'
              ></rect>
              <circle
                cx='4'
                cy='4'
                r='2'
              ></circle>
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-6'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-6'
            >
              <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-6'
            >
              <rect
                width='20'
                height='20'
                x='2'
                y='2'
                rx='5'
                ry='5'
              ></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line
                x1='17.5'
                x2='17.51'
                y1='6.5'
                y2='6.5'
              ></line>
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-6'
            >
              <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'></path>
              <path d='m10 15 5-3-5-3z'></path>
            </svg>
          </li>
        </ul>
        <div class='text-white text-center text-xs font-medium py-2 bg-gray-700'>
          COPYRIGHT 2023 MANGOXPLORE
        </div>
      </footer>
    </>
  );
}
