import React,{useState} from 'react';

export default () => {
    const [currentImage, setCurrentImage] = useState(3);
    const [change, setChange] = useState(false);
    const swipeRight = () => {
      setChange("right");
      if(currentImage < 8) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(3);
      }
      setTimeout(() => {
        setChange(false);
      },1000)
    };

    const swipeLeft = () => {
        setChange("left");
        if(currentImage > 3) {
          setCurrentImage(currentImage - 1);
        } else {
          setCurrentImage(8);
        }
        setTimeout(() => {
          setChange(false);
        },1000)
    };


    return (
    <div className="gallery">
      <span>Gallery</span>
      <div className="gallery-wrapper">
        <img className="gallery-wrapper-click" src="/left.svg" alt="left" onClick={swipeLeft} />
        <img className={`gallery-wrapper-image ${change ? change : ""}`} src={`/${currentImage}.jpg`}  alt="gallery"/>
        <img className="gallery-wrapper-click" src="/right.svg" alt="right" onClick={swipeRight} />
      </div>
    </div>
  );
};
