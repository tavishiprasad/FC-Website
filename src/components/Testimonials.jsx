
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { TESTIMONIALS } from '../constants';  


const testimonials = TESTIMONIALS.items;
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);


const TestimonialsColumn = ({ testimonials, duration, className }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className={twMerge('flex flex-col pt-10', className)}
      >
        {[...new Array(4)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <div key={imageSrc} className="card my-5 bg-white shadow-md">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

TestimonialsColumn.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

const Testimonials = () => {
  return (
    <section className="p-16"  id='testimonials'>
      <div className="container" >
        <div className="section-heading">
          <h2 className="section-title mt-5">Testimonials</h2>
          <p className="section-description mt-5">
          Providing financial knowledge and resources to help students excel in the financial world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} className="block" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={50}
            
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
