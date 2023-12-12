import React from 'react';

export default function UserCourseCard({ title, desc, hour, rating }) {
  return (
    <div className='flex-shrink-0 w-full md:w-[500px]'>
      <div className='rounded-2xl flex flex-col h-full overflow-hidden border-2'>
        {/* Image */}
        <div
          className='h-48 bg-cover bg-center'
          style={{
            backgroundImage: `url(fecard.png)`,
          }}
        ></div>

        {/* Content */}
        <div className='p-8 pt-4 flex flex-col flex-grow gap-2 border-t-0 rounded-b-2xl'>
          <div className='flex items-center justify-between'>
            <p className='font-bold text-2xl'> {title} </p>
          </div>
          <p className='opacity-70 text-sm'>{desc}</p>
          <div className='flex gap-1 self-end mt-auto'>
            <div className='flex gap-1'>
              <p className='text-xs'> {hour} Hours</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='w-4'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='10'
                ></circle>
                <polyline points='12 6 12 12 16 14'></polyline>
              </svg>
            </div>
            <div className='flex gap-1'>
              <p className='text-xs'> {rating} </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='w-4'
              >
                <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
