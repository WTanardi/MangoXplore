import React from 'react';

export default function DescComponent({ data }) {
  const BoxData = [
    {
      name: 'Pengenalan HTML',
    },
    {
      name: 'Anatomi Elemen HTML',
    },
    {
      name: 'Attribute di Elemen HTML',
    },
    {
      name: 'Sub Modul 1',
    },
    {
      name: 'Sub Modul 2',
    },
    {
      name: 'Sub Modul 3',
    },
  ];

  return (
    <div className='border-2 border-black rounded-lg my-8 mx-16 flex flex-col w-fit'>
      <div className='flex justify-between items-center w-full px-4 py-4'>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            class='w-5'
          >
            <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'></path>
            <path d='m15 5 4 4'></path>
          </svg>
          <p className='text-2xl font-bold ml-2'>{data.title}</p>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            className='w-6'
          >
            <path d='m18 15-6-6-6 6' />
          </svg>
        </div>
      </div>
      {/*  */}
      <div className='w-[99%] h-[1px] bg-black mx-auto'></div>
      {/*  */}
      <div className='flex flex-wrap flex-row justify-center gap-4 py-8'>
        {BoxData.map((e, i) => (
          <a href='/add_video'>
            <div className='bg-gray-900 rounded-md px-16 py-4 flex h-40 w-88 flex-shrink-0'>
              <p className='w-full font-semibold text-white text-2xl text-center my-auto'>
                {e.name}
              </p>
            </div>
          </a>
        ))}
      </div>
      {/*  */}
      <div className='flex ml-4 pb-4 gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          className='w-6'
        >
          <circle
            cx='12'
            cy='12'
            r='10'
          />
          <path d='M8 12h8' />
          <path d='M12 8v8' />
        </svg>
        <p className='text-xl font-medium'>New</p>
      </div>
    </div>
  );
}
