import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { building1,building2,building3,building4,building5,building6,building7,building8,building9 } from "../assets";


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="slider-wrapper">
        <Slider 
          asNavFor={this.state.nav2} 
          ref={slider => (this.slider1 = slider)}
        >
          <div className="main-img-content">
            <img src={building1} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building2} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building3} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building4} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building5} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building6} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building7} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building8} alt="about" />
          </div>
          <div className="main-img-content">
            <img src={building9} alt="about" />
          </div>
        </Slider>
        <Slider 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <img src={building1} alt="about" />
          </div>
          <div>
            <img src={building2} alt="about" />
          </div>
          <div>
            <img src={building3} alt="about" />
          </div>
          <div>
            <img src={building4} alt="about" />
          </div>
          <div>
            <img src={building5} alt="about" />
          </div>
          <div className="list-item" >
            <img src={building6} alt="about" />
          </div>
          <div>
            <img src={building7} alt="about" />
          </div>
          <div>
            <img src={building8} alt="about" />
          </div>
          <div>
            <img src={building9} alt="about" />
          </div>
          
        </Slider>
        
      </div>
    );
  }
}