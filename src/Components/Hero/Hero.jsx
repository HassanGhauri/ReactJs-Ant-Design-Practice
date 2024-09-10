/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";
import image1 from "../../assets/DESERT.jpg";
import image2 from "../../assets/DESERTSUNSET.jpg";
import image3 from "../../assets/SUNSET.jpg";
import image4 from "../../assets/THUNDER.jpg";
import './Hero.css'
const contentStyle = {
  height: "200px",
  width: "260px",
  borderRadius:"5px",
  marginLeft:"800px",
};
const Hero = () => (
  <div className="carousel">
    <Carousel autoplay={true} effect="fade">
      <div>
        <img style={contentStyle} src={image1} />
      </div>
      <div>
        <img style={contentStyle} src={image2} />
      </div>
      <div>
        <img style={contentStyle} src={image3} />
      </div>
      <div>
        <img style={contentStyle} src={image4} />
      </div>
    </Carousel>
  </div>
);
export default Hero;
