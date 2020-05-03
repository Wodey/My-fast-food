import React from 'react';

export default () => (
  <div className="map" id="contact">
    <div className="map-address">
      <img src="/summertime.svg" alt="sun" />
      <span>VISIT US</span>
      <span>Byporten Shopping, Jernbanetorget 6, 0154 Oslo</span>
    </div>
    <a className="map-interactive" href="https://www.google.no/maps/place/Skovveien+3,+0257+Oslo,+Norway/@59.9157394,10.7138466,17z/data=!3m1!4b1!4m5!3m4!1s0x46416dd4b7384661:0xea5d599031a0ac9!8m2!3d59.9157394!4d10.7160353?hl=en" target="_blank" rel="noopener noreferrer">
      <img src="/map.png" alt="map" />
    </a>
    <div className="map-skedule">
      <span>OPENING HOURS</span>
      <span>Mandag - Torsdag 10:00-21:00</span>
      <span>Fredag – Lørdag 10:00 - 21:00</span>
      <span>Søndag closed</span>
    </div>
  </div>
);
