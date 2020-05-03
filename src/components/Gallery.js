import React,{useState} from 'react';

export default () => {
    const [counter, setCounter] = useState(0);
    const [transition, setTransition] = useState(.6);
    const handleLeft = () => {
      if(counter <= 0) {
        setTransition(1.2);
        setCounter(5);
        return;
      }
      setTransition(.6);
      setCounter(counter - 1);
    };

    const handleRight = () => {
      if(counter >= 5) {
        setTransition(1.2);
        setCounter(0);
        return;
      }
      setTransition(.6);
      setCounter(counter + 1);
    };
    return (
      <div className="gallery">
        <img className="gallery-btn-left gallery-btn" src="/left.svg" alt="left button" onClick={handleLeft} />
        <div className="gallery-carousel" style={{"transform": `translateX(${-counter * 100}%)`,
                                                  "transition": `${transition}s`}} >
          <img src="/3.jpg" alt="carousel element" />
          <img src="/4.jpg" alt="carousel element" />
          <img src="/5.jpg" alt="carousel element" />
          <img src="/6.jpg" alt="carousel element" />
          <img src="/7.jpg" alt="carousel element"/>
          <img src="/8.jpg" alt="carousel element"/>
        </div>
        <img className="gallery-btn-right gallery-btn" src="/right.svg" alt="right button" onClick={handleRight} />
      </div>
  );
};
