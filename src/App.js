import React from 'react';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import Map from './components/Map';
import Gallery from "./components/Gallery";
import Footer from './components/Footer';
import Bienvenidos from "./components/Bienvenidos";

import "./App.scss";

export default () => {
  return <>
    <header>
      <Navigation />
    </header>
    <main>
      <Bienvenidos />
      <Menu />
      <Gallery />
      <Map />
    </main>
    <footer></footer>
  </>
};
