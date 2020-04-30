import React,{useEffect,useState} from 'react';

export default () => {
  const [transformNav, setTransformNav] = useState(false);

  const onScrollNav = () => {
    if(window.scrollY > 0) {
      setTransformNav(true);
    } else {
      setTransformNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
    return () => {
      window.removeEventListener("scroll", onScrollNav);
    }
  })
  return (
    <div className={`navigation ${transformNav ? "navigation-transform" : ""}`}>
      <a className="navigation-child">Bienvenidos</a>
      <a className="navigation-child">Menu</a>
      <a className="navigation-child"><img src="/logo.svg" className="navigation-logo"/></a>
      <a className="navigation-child">Contact</a>
      <span className="navigation-child">We're open now</span>
    </div>
  );
};
