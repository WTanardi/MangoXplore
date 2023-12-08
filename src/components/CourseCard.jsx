import React from 'react';

export default function CourseCard({ courseData }) {
  return (
    <div className='flex flex-col bg-white border-[1px] border-slate-200 w-[300px] flex-none'>
      {/* Card img */}
      <div
        className='bg-cover bg-center w-full h-96 lg:h-72 self-center'
        style={{
          backgroundImage: `url(${courseData.img})`,
        }}
      ></div>

      <div className='gap-2 flex flex-col px-6 py-4 justify-between h-1/2'>
        {/* Title & Desc */}
        <div className='flex flex-col gap-2'>
          <p className='text-md opacity-50'>Step {courseData.number}</p>
          <p className='text-lg font-medium'>{courseData.title}</p>
          <p className='text-sm'>{courseData.desc}</p>
        </div>

        {/* Stats */}
        <div className='flex justify-between text-xs gap-2'>
          <div className='flex flex-col gap-1'>
            {/* Rating */}
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                className='w-4'
              >
                <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
              </svg>
              {courseData.rating}
            </div>

            {/* Level */}
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                className='w-4'
              >
                <circle
                  cx='12'
                  cy='8'
                  r='6'
                />
                <path d='M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' />
              </svg>
              {courseData.level} Level
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            {/* Hours */}
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                className='w-4'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='10'
                />
                <polyline points='12 6 12 12 16 14' />
              </svg>
              {courseData.hours} Hours
            </div>

            {/* Students */}
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                className='w-4'
              >
                <path d='M18 21a8 8 0 0 0-16 0' />
                <circle
                  cx='10'
                  cy='8'
                  r='5'
                />
                <path d='M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3' />
              </svg>
              {courseData.students}k Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
