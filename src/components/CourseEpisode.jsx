import React from 'react';
import UserCourseCard from './UserCourseCard';

export default function CourseEpisode({ moduleData }) {
  return (
    <>
      {moduleData.map((module, index) => (
        <div
          key={index}
          class='p-8'
        >
          <p class='text-4xl font-bold text-left pb-8'>
            {Object.keys(module)[0]}
          </p>

          <a href='/add_video'>
            <div class='overflow-x-scroll flex gap-4 max-h-full'>
              {module[Object.keys(module)[0]].map((course, i) => (
                <UserCourseCard
                  key={i}
                  title={course.title}
                  desc={course.desc}
                  hour={course.hour}
                  rating={course.rating}
                />
              ))}
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
