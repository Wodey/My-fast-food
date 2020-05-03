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
      <a className="navigation-child" href="#bienvenidos" onClick={(e) => {
        e.preventDefault();
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }}>Bienvenidos</a>
      <a className="navigation-child" href="#menu"  onClick={(e) => {
        e.preventDefault();
        window.scroll({
          top: 1700,
          left: 0,
          behavior: 'smooth'
        })
      }}>Menu</a>
      <a className="navigation-child" href="/"><img src="/logo.svg" alt="logo" className="navigation-logo"/></a>
      <a className="navigation-child" href="#contact"  onClick={(e) => {
        e.preventDefault();
        window.scroll({
          top: 4000,
          left: 0,
          behavior: 'smooth'
        })
      }}>Contact</a>
      <span className="navigation-child">We're open now</span>
    </div>
  );
};
