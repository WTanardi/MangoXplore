import React from 'react';

export default function Courses({ courseData }) {
  return (
    <a href='/add_desc'>
      <div
        className='bg-cover h-48 rounded-xl flex items-center justify-center w-full bg-center bg-[#0F2630]'
        style={{
          backgroundImage: `url(${courseData.img})`,
        }}
      >
        {courseData.title == '+' ? (
          <h1 className='text-7xl text-white text-center p-8'>
            {courseData.title}
          </h1>
        ) : (
          <h1 className='text-3xl text-white text-center p-8 font-medium'>
            {courseData.title}
          </h1>
        )}
      </div>
    </a>
  );
}
