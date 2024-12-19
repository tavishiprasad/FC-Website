'use client';

import React, { useState } from 'react';  
import { EVENTS } from "../constants"; // Ensure your EVENTS constant is correctly defined  

const Events = () => {  
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 events  

  const handleImageClick = () => {
    window.location.href = '/events'; // Redirect to /events
  };

  return (  
    <section className="py-20 px-16" id="events">  
      <h2 className="section-title">Events</h2>  
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">  
        {EVENTS.slice(0, visibleCount).map((event) => (  
          <div  
            key={event.id}  
            className="block group cursor-pointer mb-4 h-min"  
          >  
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">  
              <img  
                src={event.imgSrc}  
                alt={event.title}  
                className="h-auto w-full object-cover"  
                loading="eager"  
                 
              />  
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-customText text-white opacity-0 backdrop-blur-[4px] transition-opacity duration-300 group-hover:opacity-100 bg-black/50 p-4" onClick={handleImageClick}>  
                <h3 className="text-3xl text-center">{event.title}</h3>  
                <p className="mt-2 max-w-xs text-sm text-center break-words lg:line-clamp-3">  
                  {event.description}  
                </p>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  

      {EVENTS.length > visibleCount && (  
        <div className="text-center mt-2">  
          <a  
            href='/events' 
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300"  
          >  
            Show More  
          </a>  
        </div>  
      )}  
    </section>  
  );  
};  

export default Events;  
