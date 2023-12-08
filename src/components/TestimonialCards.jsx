import React from 'react';

export default function TestimonialCards() {
  const cards = [
    {
      img: '/jessica.png',
      name: 'Jessica S.',
      position: 'Aspiring Web Developer',
      desc: 'Enrolling in the web development courses at MangoXplore was a game-changer for me. The instructors provided clear explanations and hands-on practice, making learning HTML, CSS, and JavaScript a breeze. Now, I can confidently create beautiful websites from scratch.',
    },
    {
      img: '/alex.png',
      name: 'Alex M.',
      position: 'Web Enthusiast turned Developer',
      desc: 'Studying web programming with MangoXplore was a fantastic experience. The curriculum was well-structured, and the instructors were patient and knowledgeable. I started with zero coding experience, and now I can build and style web pages with ease. MangoXplore truly made learning HTML and CSS enjoyable and accessible.',
    },
  ];

  return (
    <div className='flex max-lg:flex-col gap-4'>
      {cards.map((e, i) => (
        <div
          key={i}
          className='p-6 bg-stone-100 mx-8 rounded shadow-xl lg:w-1/2'
        >
          {/* Text */}
          <div className='flex gap-2 flex-col'>
            <div className='flex gap-4'>
              {/* Image */}
              <div
                className='text-center justify-center p-6 text-white max-w-1/3 aspect-square bg-cover bg-center'
                style={{
                  backgroundImage: `url(${e.img})`,
                }}
              ></div>
              <div>
                <p className='text-3xl font-medium'> {e.name} </p>
                <p className='text-sm '> {e.position} </p>
              </div>
            </div>
            <p className='text-xs text-justify'> {e.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
