import React from 'react';
import ReactDOM from 'react-dom'
import Slider from './slider.jsx';
var slides = [{
    background: "./imgs/1.jpg",
    link: "https://zhuangtongfa.github.io/"
  }, {
    background: "./imgs/2.jpg",
    link: "https://zhuangtongfa.github.io/"
  }, {
    background: "./imgs/3.jpg",
    link:"https://zhuangtongfa.github.io/"
  }];

ReactDOM.render( < Slider slides= {slides} / > , document.getElementById("app"));
