import React from 'react'
// Importing slick's css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// importing react-slick slider that will provide sliding effect
import Slider from 'react-slick';
import './SliderComponent.css'
import slider_img1 from '../../assets/images/slider_img1.jpg'
import slider_img2 from '../../assets/images/slider_img2.jpg'
import slider_img3 from '../../assets/images/slider_img3.jpg'
import slider_img4 from '../../assets/images/slider_img4.jpg'

// For slider, we are using "slick-coursel" and "react-slick" node packages. It provide sliding features.

const SliderComponent = () => {
  let settings = {   //some configuration for slider
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000
  }
  return (
    <div className='slider'>
      <Slider {...settings} className='slide_box'>
        <div className="slide_div">
          <div className="box">
            <img src={slider_img1} alt="" />
          </div>
        </div>
        <div className="slide_div">
          <div className="box">
            <img src={slider_img2} alt="" />
          </div>
        </div>
        <div className="slide_div">
          <div className="box">
            <img src={slider_img3} alt="" />
          </div>
        </div>
        <div className="slide_div">
          <div className="box">
            <img src={slider_img4} alt="" />
          </div>
        </div>
      </Slider>

    </div>
  )
}

export default SliderComponent
