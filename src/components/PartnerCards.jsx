import React from 'react';

export default function PartnerCards() {
  const partners = [
    '/google.png',
    '/microsoft.png',
    '/aws.png',
    '/ibm.png',
    '/lenovo.png',
    '/intel.png',
    '/kominfo.png',
    '/bangkit.png',
    '/line.png',
    '/samsung.png',
    '/kemenparekraf.png',
    '/mbkm.png',
  ];
  return (
    <div className='flex flex-wrap justify-evenly gap-4 lg:gap-8'>
      {partners.map((e, i) => (
        <div
          className='lg:h-24 lg:w-64 h-16 w-40 border-[1px] border-black flex items-center justify-center'
          key={i}
        >
          <img
            src={e}
            alt=''
            className='max-lg:w-20'
          />
        </div>
      ))}
    </div>
  );
}
