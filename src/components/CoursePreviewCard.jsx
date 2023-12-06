import React from 'react';

export default function CoursePreviewCard({ cardData }) {
  return (
    <>
      <div
        className={`w-64 h-64 rounded-xl bg-cover bg-center text-center text-white flex flex-col justify-center p-8 gap-4 max-lg:hidden`}
        style={{
          backgroundImage: `url(${cardData.cardImg})`,
        }}
      >
        <p className='text-3xl font-bold'>{cardData.cardTitle}</p>
        <p className='text-xs'> {cardData.cardTitle} </p>
      </div>
      <div>{cardData.cardTitle}</div>
    </>
  );
}
