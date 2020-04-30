import React from 'react';

export default () => (
  <div className="gallery">
    <span>Gallery</span>
    <div className="gallery-wrapper">
      <img className="gallery-wrapper-click" src="/left.svg" alt="left" />
      <img className="gallery-wrapper-image" src="3.jpg"  alt="gallery"/>
      <img className="gallery-wrapper-click" src="/right.svg" alt="right"/>
    </div>
  </div>
);
