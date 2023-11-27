import React, { useState, useRef } from 'react';
import './Officers.css';
import imagePaths from '../Imagepaths';

const imagesData = [
    { id: 1, src: imagePaths.Boki, name: 'Lenuelito Betita', position: 'Club Advisor' },
    { id: 2, src: imagePaths.Kevin, name: 'Kevin Jann Tolentino', position: 'President' },
    { id: 3, src: imagePaths.Ej, name: 'Elton John Pacaña', position: 'Vice President' },
    { id: 4, src: imagePaths.Torres, name: 'Charles Switzerland Torres', position: 'Secretary' },
    { id: 5, src: imagePaths.Gab, name: 'Gabriel Malanday', position: 'Asst. Secretary' },
    { id: 6, src: imagePaths.Col, name: 'Nicole Japhet Menez', position: 'Bus. Manager' },
    { id: 7, src: imagePaths.Dave, name: 'Dave Albert Lacson', position: 'Auditor' },

  ];

  const OfficerList = () => {
    const [dragStart, setDragStart] = useState(0);
    const [dragging, setDragging] = useState(false);
    const carouselRef = useRef(null);
  
    const handleDragStart = (e) => {
      if (e.button === 0) {
        setDragging(true);
        setDragStart(e.clientX);
        e.preventDefault();
      }
    };
  
    const handleDrag = (e) => {
      if (dragging) {
        const dragDelta = e.clientX - dragStart;
        carouselRef.current.scrollLeft -= dragDelta;
        setDragStart(e.clientX);
      }
    };
  
    const handleMouseUp = () => {
      if (dragging) {
        setDragging(false);
      }
    };
  
    return (
        <div id="Officers">
        <h3>SIPD Officers</h3>
      <div
        className="officers-carousel"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={carouselRef}
      >
        {imagesData.map((image) => (
          <div key={image.id} className="carousel-item">
            <img className="officerimgs"
              src={image.src}
              alt={image.name}
              onMouseDown={(e) => e.preventDefault()} 
            />
            <h2>{image.name}</h2>
            <p>{image.position}</p>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default OfficerList;