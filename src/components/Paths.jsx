import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Paths() {
  const cardData = [
    {
      id: 'fedev',
      title: 'Front-end Development',
      content:
        'Dive into the world of stunning user interfaces, interactive web apps, and pixel-perfect design',
      img: '/fecard.png',
      classes: 6,
      students: 251,
      desc: 'Follow a curriculum designed by the best of the best, from industrial specialists to leading educators, ensuring you receive unparalleled expertise and guidance on your learning journey.',
    },
    {
      id: 'bedev',
      title: 'Back-end Development',
      content:
        'Explore databases, server logic, and scalability to create robust and efficient web applications.',
      img: '/becard.png',
      classes: 6,
      students: 251,
      desc: 'Follow a curriculum designed by the best of the best, from industrial specialists to leading educators, ensuring you receive unparalleled expertise and guidance on your learning journey.',
    },
    {
      id: 'apidev',
      title: 'API Development',
      content:
        'Learn how to create and consume APIs, enabling your applications to communicate and integrate seamlessly',
      img: '/apicard.png',
      classes: 6,
      students: 251,
      desc: 'Follow a curriculum designed by the best of the best, from industrial specialists to leading educators, ensuring you receive unparalleled expertise and guidance on your learning journey.',
    },
    {
      id: 'gitdev',
      title: 'Git & Github Mastery',
      content:
        'Learn version control, collaboration, and best practices. Streamline your development workflow and work seamlessly in teams',
      img: '/gitcard.png',
      classes: 6,
      students: 251,
      desc: 'Follow a curriculum designed by the best of the best, from industrial specialists to leading educators, ensuring you receive unparalleled expertise and guidance on your learning journey.',
    },
  ];

  return (
    <div>
      <Tabs
        defaultValue={cardData[0].id}
        className='flex flex-col justify-center items-center w-full h-full'
      >
        <TabsList className='overflow-x-scroll justify-start gap-2 py-4 w-full h-full'>
          {cardData.map((e, i) => (
            <TabsTrigger
              key={i}
              value={e.id}
            >
              <div className='lg:hidden'>{e.title}</div>
              <div
                className='w-64 h-64 rounded-xl bg-slate-700 flex flex-col text-center justify-center gap-2 p-6 text-white max-lg:hidden'
                style={{
                  backgroundImage: `url(${e.img})`,
                }}
              >
                <p className='font-bold text-3xl'> {e.title} </p>
                <p className='text-xs'> {e.content} </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {cardData.map((e, i) => (
          <TabsContent
            value={e.id}
            key={i}
          >
            <div className='flex p-8 m-4 bg-slate-100'>
              <div className='text-left gap-2 flex flex-col'>
                {/* Course title */}
                <p className='text-2xl font-medium mb-1'> {e.title} </p>

                {/* Course classes */}
                <div className='text-sm flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='w-5'
                  >
                    <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                  </svg>
                  <p>{e.classes} Classes</p>
                </div>

                {/* Course students */}
                <div className='text-sm flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='w-5'
                  >
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle
                      cx='9'
                      cy='7'
                      r='4'
                    />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                  <p>{e.students}k Students learning this path</p>
                </div>

                {/* Line */}
                <div className='w-full border-[1px] border-slate-200'></div>

                {/* Course description */}
                <div className='py-6 text-sm'>{e.desc}</div>
              </div>
              <div>{/* Course cards */}</div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
