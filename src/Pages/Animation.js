import React, { useState, useEffect } from 'react';
import { motion, useAnimation  } from 'framer-motion';
import imagePaths from './Imagepaths';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: false });
  
    useEffect(() => {
      setHasAnimated(true);
    }, []);
  
    const commonAnimationProps = {
      initial: { opacity: 0, scale: 0.8 },
      animate: hasAnimated ? { opacity: 1, scale: 1 } : {},
      transition: { duration: 1 },
    };
  
    return (
      <motion.div
        ref={ref}
        whileInView={{ opacity: 1, scale: 1 }} 
        {...commonAnimationProps}
      >
        <div className="container">
          <div className="left-side">
            <h1>Society of Innovators, Programmers, and Designers</h1>
            <p>
              Through engaging programs, collaborative projects, and a supportive environment,
              we strive to instill a passion for innovation, equipping students with the skills and mindset necessary to
              thrive in the dynamic landscape of information technology.
            </p>
          </div>
          <div className="right-side">
            <img src={imagePaths.Headerimg} alt="Header-img" />
          </div>
        </div>
      </motion.div>
    );
  }
  export function Contentbody() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, x: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const commonAnimationProps = {
    initial: { opacity: 0, scale: 0.8, x: -100 },
    animate: controls,
    transition: { duration: 1 },
  };

  const rightSideAnimationProps = {
    whileInView: { scale: 1.1 }, 
    transition: { duration: 2 },
  };

  return (
    <div id="About">
    <div className="container-content">
      <motion.div {...commonAnimationProps} className="leftside-content">
        <h3>Our Story</h3>
        <h1>Driving Innovation through SIPD Excellence</h1>
        <p>
          The SIPD is recognized as an official student academic organization at La Consolacion College Bacolod.
          As such, it operates under the purview of the LCC Bacolod policies, rules, and regulations. The SIPD is
          committed to upholding the values and principles of the institution and contributing positively to its academic community.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        className="rightside-content"
        {...rightSideAnimationProps}
      >
        <img src={imagePaths.Contentimg} alt="FbUi-img" />
      </motion.div>
    </div>
    </div>
  );
}

export function Contentbody1() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    const timeout = setTimeout(() => {
      setFadeIn(false);
  }, 500); 

  return () => clearTimeout(timeout); 
  }, [selectedEvent]);

  const events = [
    { id: 1, title: 'IT Week', description: 'Dive deep into the world of programming and design with our hands-on workshops, meticulously tailored for the brilliant minds of SIPD Club. These immersive sessions are crafted to be more than just educational ' +
    'they\'re an experiential journey that will elevate your skills and ignite your creative spark.'},
    { id: 2, title: 'PSC', description: 'The Philippine Startup Challenge 8 (PSC8) is a national startup competition organized by the Department of Information and Communications Technology (DICT) through its ICT Industry Development Bureau (IIDB). ' + 
    'The challenge aims to encourage and inspire Filipino youth to create innovative and relevant ICT products and services that may also be viable business ventures and solve the country’s societal problems. ' },
    { id: 3, title: 'DTI Moonshot', description: 'DTI Moonshot is a program of the Department of Trade and Industry (DTI) that aims to support and promote innovative and transformative businesses in the Philippines. The program provides access to funding, ' +
    'mentorship, and networking opportunities for startups that have the potential to make a significant impact on the country\'s economy and society.'},
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="two-sided-layout">
        <div className="leftsideevenets">
          <h3>Events</h3>
          <ul>
            {events.map((event) => (
              <li key={event.id} onClick={() => handleEventClick(event)}>
                <h1 className={selectedEvent === event ? 'active' : ''}>{event.title}</h1>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightsidevents">
          <p className={fadeIn ? 'fade-in' : ''}>{selectedEvent ? selectedEvent.description : '...'}</p>
        </div>
      </div>
  );
}