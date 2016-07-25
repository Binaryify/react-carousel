# React-carousel
this is react-carousel component and it suport Responsive layout!(suport gesture operation!)

这是个react轮播图组件,并且它是响应式的!(支持手势操作!)

[demo地址](http://binaryify.github.io/demo/example/)

#Start
```
$ git clone git@github.com:zhuangtongfa/react-carousel.git

$ npm install

$ npm start

```
#Usage
```html
<link rel="stylesheet" href="./css/font-awesome.min.css">
```

```js
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

ReactDOM.render( < Slider slides= {slides} time="2000"/ > , document.getElementById("app"));
```
