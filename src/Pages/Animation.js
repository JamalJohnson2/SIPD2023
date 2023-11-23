import React, { useState, useEffect } from 'react';
import { motion, useAnimation  } from 'framer-motion';
import imagePaths from './Imagepaths';
import { useInView } from 'react-intersection-observer';
export function Nav() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 2 }}
    >
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Achievements</a></li>
          <li><a href="#">Initiatives</a></li>
        </ul>
      </nav>
    </motion.div>
  );
}

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
  );
}

