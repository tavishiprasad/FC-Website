import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import avatar6 from '../assets/avatar-6.png';
import avatar7 from '../assets/avatar-7.png';
import avatar8 from '../assets/avatar-8.png';
import avatar9 from '../assets/avatar-9.png';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const testimonials = [
  {
    text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    imageSrc: avatar1,
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2,
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    text: 'This app has completely transformed how I manage my projects and deadlines.',
    imageSrc: avatar3,
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    imageSrc: avatar4,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    imageSrc: avatar5,
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    text: 'The customizability and integration capabilities of this app are top-notch.',
    imageSrc: avatar6,
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    imageSrc: avatar7,
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    imageSrc: avatar8,
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    text: 'Its user-friendly interface and robust features support our diverse needs.',
    imageSrc: avatar9,
    name: 'Casey Harper',
    username: '@casey09',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
        {[...new Array(3)].fill(0).map((_, index) => (
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
          <h2 className="section-title mt-5">What they say about us</h2>
          <p className="section-description mt-5">
          Providing financial knowledge and resources to help students excel in the financial world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} className="block" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={50}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={28}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
