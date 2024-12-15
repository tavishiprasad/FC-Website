'use client';

import React, { useState } from 'react';
import { EVENTS } from "../constants"; // Ensure your EVENTS constant is correctly defined

const Events = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 events

  return (
    <section className="p-8" id="events">
      <h2 className="my-10 section-title">Events</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-4">
        {EVENTS.slice(0, visibleCount).map((event) => (
          <div
            key={event.id}
            className="block group cursor-pointer mb-4 md:mb-6 lg:mb-0"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg max-w-xs mx-auto md:max-w-sm lg:max-w-full">
              <img
                src={event.imgSrc}
                alt={event.title}
                className="h-auto w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-customText text-white opacity-0 backdrop-blur-[4px] transition-opacity duration-300 group-hover:opacity-100 bg-black/50 p-4">
                <h3 className="text-3xl text-center">{event.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-center break-words lg:line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {EVENTS.length > visibleCount && (
          <div className="text-center mt-6">
            <a
              href="/events" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Show More
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
