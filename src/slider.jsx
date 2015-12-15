import React from 'react';
import "./css/slider.css"

export default class Slider extends React.Component{
  constructor(){
    super()
    this.state={
      activeSlide: 0,
      this:this
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
  componentDidMount(){
    setInterval(()=>this.nextSlide(),this.props.time);
  }
  onChildChange(newVal){
    var that=this.this;
    if(newVal=="向左"){
      that.previousSlide()
    }else if(newVal=="向右"){
      that.nextSlide()
    }
  }
  render(){
    var _this = this;
    var slides = this.props.slides;
    var slide=slides.map(function(slide, index, array){
      return(
        <Slide background={slide.background } active={index === _this.state.activeSlide} link={slide.link} key={index} change={_this.onChildChange} this={_this}/>
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
  constructor(){
    super()
    this.state={
      startX:"",
      startY:"",
      endX:"",
      endY:""
    }
  }
  touchStart(ev){
    this.setState({
      startX:ev.touches[0].pageX,
      startY:ev.touches[0].pageY
    })
  }
  touchEnd(ev){
    this.setState({
      endX:ev.changedTouches[0].pageX,
      endY:ev.changedTouches[0].pageY
    })
    var that=this;
    var direction = this.GetSlideDirection(this.state.startX, this.state.startY, this.state.endX, this.state.endY);
      switch(direction) {
          case 0:
              console.log("没滑动");
              break;
          case 1:
              console.log("向上");
              break;
          case 2:
              console.log("向下");
              break;
          case 3:
              console.log("向左");
              that.props.change("向左")
              break;
          case 4:
              console.log("向右");
              that.props.change("向右")
              break;
          default:
      }
  }
  GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
  }
  GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
    //如果滑动距离太短
    if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }

    var angle = this.GetSlideAngle(dx, dy);
    if(angle >= -45 && angle < 45) {
        result = 4;
    }else if (angle >= 45 && angle < 135) {
        result = 1;
    }else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
    return result;
  }

  render(){
    var background = this.props.background;
    var link = this.props.link;
    var active = this.props.active;
    var slideStyle = {
        backgroundImage: "url(" + background + ")"
    };
    return(
      <a href={link}>
        <div className="slider__slide" data-active={active} style={slideStyle} onTouchStart={ev=>{this.touchStart(ev)}} onTouchEnd ={ev=>{this.touchEnd(ev)}}>
        </div>
      </a>
    )
  }
}
