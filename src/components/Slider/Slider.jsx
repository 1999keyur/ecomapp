import React from "react";
import "./Slider.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  const numberOfSlides = data.length;
  
  const nextSlide = () => {
    setcurrentSlide(currentSlide === numberOfSlides-1 ? 0 : (prev) => prev + 1);
  };

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? numberOfSlides-1 : (prev) => prev - 1);
  };
  return (
    <div className="slider">
      <div className="container" style={{width:`${numberOfSlides*100}vw`, transform:`translateX(-${currentSlide * 100}vw)`} }>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
