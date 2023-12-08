import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from './CourseCard';

export default function Paths() {
  const cardData = [
    {
      id: 'fedev',
      title: 'Front-end Development',
      content:
        'Dive into the world of stunning user interfaces, interactive web apps, and pixel-perfect design',
      img: '/fecard.png',
      classes: 8,
      students: 320,
      desc: 'Immerse yourself in a comprehensive curriculum crafted by industry leaders and educators. Receive unparalleled expertise and guidance on your journey to becoming a front-end developer.',
    },
    {
      id: 'bedev',
      title: 'Back-end Development',
      content:
        'Explore databases, server logic, and scalability to create robust and efficient web applications.',
      img: '/becard.png',
      classes: 7,
      students: 280,
      desc: 'Master the intricacies of back-end development with a curriculum designed by industry specialists. Gain expertise in creating scalable and efficient web applications.',
    },
    {
      id: 'apidev',
      title: 'API Development',
      content:
        'Learn how to create and consume APIs, enabling your applications to communicate and integrate seamlessly',
      img: '/apicard.png',
      classes: 6,
      students: 240,
      desc: 'Delve into the world of API development with a curriculum crafted by leading educators and industry experts. Acquire the skills to enable seamless communication and integration in your applications.',
    },
    {
      id: 'gitdev',
      title: 'Git & Github Mastery',
      content:
        'Learn version control, collaboration, and best practices. Streamline your development workflow and work seamlessly in teams',
      img: '/gitcard.png',
      classes: 5,
      students: 200,
      desc: 'Master Git and GitHub with a curriculum designed by the best in the field. Streamline your development workflow, practice version control, and collaborate effectively in team environments.',
    },
  ];

  const courseData = [
    {
      number: 1,
      title: 'Learn the basics of web programming',
      desc: 'Learn HTML and CSS, the basic building blocks of the web, and start crafting stunning and responsive websites that leave a lasting impression.',
      img: '/courseprev1.png',
      rating: 4.87,
      hours: 45,
      level: 'Beginner',
      students: 141.4,
    },
    {
      number: 2,
      title: 'Introduction to JavaScript',
      desc: 'Explore the fundamentals of JavaScript programming language and enhance your web development skills by adding dynamic and interactive features to your websites.',
      img: '/courseprev1.png',
      rating: 4.65,
      hours: 30,
      level: 'Intermediate',
      students: 89.2,
    },
    {
      number: 3,
      title: 'Responsive Web Design with Bootstrap',
      desc: 'Master the art of responsive web design using the Bootstrap framework. Create visually appealing and mobile-friendly websites with ease.',
      img: '/courseprev1.png',
      rating: 4.92,
      hours: 50,
      level: 'Intermediate',
      students: 112.8,
    },
    {
      number: 4,
      title: 'Node.js for Backend Development',
      desc: 'Dive into server-side development with Node.js. Learn how to build scalable and efficient backend applications using JavaScript.',
      img: '/courseprev1.png',
      rating: 4.75,
      hours: 40,
      level: 'Advanced',
      students: 97.5,
    },
    {
      number: 5,
      title: 'React.js: Building User Interfaces',
      desc: 'Build interactive and dynamic user interfaces with React.js. Explore the component-based architecture and create modern, efficient web applications.',
      img: '/courseprev1.png',
      rating: 4.88,
      hours: 55,
      level: 'Advanced',
      students: 125.6,
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
                className='w-64 h-64 rounded-xl bg-slate-700 flex flex-col text-center justify-center gap-2 p-6 text-white max-lg:hidden whitespace-normal'
                style={{
                  backgroundImage: `url(${e.img})`,
                }}
              >
                <p className='font-bold text-3xl'> {e.title} </p>
                <p className='text-xs font-light'> {e.content} </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {cardData.map((e, i) => (
          <TabsContent
            value={e.id}
            key={i}
            className='w-full'
          >
            <div className='flex max-lg:flex-wrap p-8 m-4 bg-slate-100 gap-8'>
              <div className='text-left gap-2 lg:gap-4 flex flex-col justify-center'>
                {/* Course title */}
                <p className='text-2xl font-medium mb-1 lg:text-5xl'>
                  {' '}
                  {e.title}{' '}
                </p>

                {/* Course classes */}
                <div className='text-sm flex gap-2 lg:text-xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='w-5 lg:w-8'
                  >
                    <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                  </svg>
                  <p>{e.classes} Classes</p>
                </div>

                {/* Course students */}
                <div className='text-sm flex gap-2 lg:text-xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    className='w-5 lg:w-8'
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
                <div className='w-full border-2 border-slate-200'></div>

                {/* Course description */}
                <div className='py-6 text-sm lg:text-base'>{e.desc}</div>
              </div>

              {/* Course cards */}
              <div className='overflow-x-scroll flex gap-2 justify-start'>
                {courseData.map((e, i) => (
                  <CourseCard
                    courseData={e}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
