import React from "react";
import {useState,useEffect} from "react";
import {Link}  from "react-router-dom";
import {SliderData} from "../../Slider/SlideData"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import {FiFilter} from 'react-icons/fi';
import {BsCalculatorFill} from "react-icons/bs"
import {GrLocation} from "react-icons/gr"

export default function SliderInfo({slides, link}){
    
  const [current,setCurrent]= useState(0)
  const length = slides.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current+1)
    }, 3000);
    return () => clearInterval(interval);
  });
   
  const nextSlide = () =>{
    setCurrent(current === length - 1 ? 0 : current+1)
  }
  const prevSlide = () =>{
    setCurrent(current === 0 ? length-1 : current - 1)
  }
return(
    <div>
      <div className="slider">
        <div className="slider-bottom-content">
          <div className="arrows-wrapper">
            <div className="arrows-text">Բնակելի շենք</div>
            <div className="arrows ">
              <button className="slider-btn">
                <AiOutlineLeft className="left-arrow" onClick={prevSlide}/>
              </button>
              <button className="slider-btn">
                <AiOutlineRight className="right-arrow" onClick={nextSlide}/>    
              </button>
            </div>
          </div>
          <div className="slider-bottom-main-content">
            <div className="main-content-items">
              <Link to="/filter"className="item-card">
                <div className="icon-wrapper">
                  <FiFilter/>
                </div>
                <div className="item-card-content">
                  <div className="item-card-content-title">Ֆիլտր</div>
                  <div className="item-card-content-text">Բոլորը</div>
                </div>
              </Link>
              <Link to="/calculator"className="item-card">
                <div className="icon-wrapper">
                  <BsCalculatorFill/>
                </div>
                <div className="item-card-content">
                  <div className="item-card-content-title">Հաշվիչ</div>
                  <div className="item-card-content-text">Հիփոթեք</div>
                </div>
              </Link>
              <Link to="/address"className="item-card">
                <div className="icon-wrapper">
                  <GrLocation/>
                </div>
                <div className="item-card-content">
                  <div className="item-card-content-title">Հասցե</div>
                  <div className="item-card-content-text"> Երևան,Գյուրջյան փ․</div>
                </div>
              </Link>
            </div>
            <button className="PrimaryButton" onClick={link}>
              <span className="title">Բնակարաններ</span>
            </button>           
          </div>
        </div>
        {SliderData.map((slide,index)=>{
          return (
            <div className={index === current?"slide active":"slide"}key ={index}>
              {index === current && (
                <img src={slide.images} alt =""className="image"/>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )}
  