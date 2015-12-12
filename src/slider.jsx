import React from 'react';
import "./css/slider.scss"

export default class Slider extends React.Component{
  constructor(){
    super()
    this.state={
      activeSlide: 0
    }
  }
  nextSlide(){
    var slide = this.state.activeSlide + 1 < this.props.slides.length ? this.state.activeSlide + 1 : 0;
    this.setState({
        activeSlide: slide
    })
  }
  previousSlide(){
    var slide = this.state.activeSlide - 1 < 0 ? this.props.slides.length - 1 : this.state.activeSlide - 1;
    this.setState({
        activeSlide: slide
    });
  }
  render(){
    var _this = this;
    var slides = this.props.slides;
    var slide=slides.map(function(slide, index, array){
      return(
        <Slide background={slide.background } active={index === _this.state.activeSlide} link={slide.link} key={index}/>
      )
    })
    return(
      <div className="slider">
      {slide}
        <div className="slider__next" onClick={ev=>{this.nextSlide()}}>
          <i className="fa fa-4x fa-arrow-circle-right"></i>
        </div>
        <div className="slider__previous" onClick={ev=>{this.previousSlide()}}>
          <i className="fa fa-4x fa-arrow-circle-left"></i>
        </div>
      </div>
    )
  }
}
class Slide extends React.Component{
  render(){
    var background = this.props.background;
    var link = this.props.link;
    var active = this.props.active;

    var slideStyle = {
        backgroundImage: "url(" + background + ")"
    };
    return(
      <a href={link}>
        <div className="slider__slide" data-active={active} style={slideStyle}>
        </div>
      </a>
    )
  }
}
