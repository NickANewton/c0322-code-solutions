import Carousel from './carousel';
import React from 'react';
import ReactDOM from 'react-dom/client';

const images = [
  {
    name: 'Pikachu',
    imgUrl: '../images/025.png'
  },
  {
    name: 'Bulbasaur',
    imgUrl: '../images/001.png'
  },
  {
    name: 'Squirtle',
    imgUrl: '../images/007.png'
  },
  {
    name: 'Charmander',
    imgUrl: '../images/004.png'
  },
  {
    name: 'Jigglypuff',
    imgUrl: '../images/039.png'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={images}/>);
