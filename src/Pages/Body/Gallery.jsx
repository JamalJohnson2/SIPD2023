import React from 'react';
import '../Body/Gallery.css'; 
import imagePaths from '../Imagepaths';

const Gallery = () => {
  const images = [
    { id: 1, src: imagePaths.Gallery1, title: 'DTI Moonshot TNK', description: 'Pitching Competition' },
    { id: 2, src: imagePaths.Gallery2, title: 'Kapehan Sessions', description: 'Spring Valley Tech' },
    { id: 3, src: imagePaths.Gallery3, title: 'SIPD Club Orientation', description: 'Future Tech Innovators!' },
    { id: 4, src: imagePaths.Gallery4, title: 'DICT Hack4Gov CTF', description: 'Unlocking Cyber Potential!' },
    { id: 5, src: imagePaths.Gallery5, title: 'Graduating Students Seminar', description: 'BSIT/EMC batch 2019-2023' },
    { id: 6, src: imagePaths.Gallery6, title: '𝗗𝗜𝗖𝗧\'𝘀 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗝𝗼𝗯𝘀 𝗣𝗛', description: 'A Reason For Being' },

  ];
  

  return (
    <div id="Gallery">
      <h2 className="gallery-heading">Gallery</h2>
    <div className="gallery-section">
      <div className="column">
        {images.slice(0, Math.ceil(images.length / 2)).map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="column">
        {images.slice(Math.ceil(images.length / 2)).map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;
