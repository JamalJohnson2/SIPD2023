import React, { useState, useEffect } from 'react';
import '../Body/Content.css';
import imagePaths from '../Imagepaths';
import { Contentbody } from '../Animation';

const Content = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        <>
        <Contentbody/>
        <div id="Events">
           <div className="two-sided-layout">
        <div className="leftsideevenets">
          <h3>Events</h3>
          <ul>
            {events.map((event) => (
              <li key={event.id} onClick={() => handleEventClick(event)}>
                <h1>{event.title}</h1>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightsidevents">
          <p>{selectedEvent ? selectedEvent.description : '...'}</p>
        </div>
      </div>
      </div>
        </>
        );
}
export default Content;