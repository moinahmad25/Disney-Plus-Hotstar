import React from 'react'
import './Viewer.css'
import viewers_disney from '../../assets/images/viewers-disney.png'
import viewers_marvel from '../../assets/images/viewers-marvel.png'
import viewers_national from '../../assets/images/viewers-national.png'
import viewers_pixar from '../../assets/images/viewers-pixar.png'
import viewers_starwars from '../../assets/images/viewers-starwars.png'
import disney_video from '../../assets/videos/1564674844-disney.mp4'
import marvel_video from '../../assets/videos/1564676115-marvel.mp4'
import national_video from '../../assets/videos/1564676296-national-geographic.mp4'
import pixar_video from '../../assets/videos/1564676714-pixar.mp4'
import starwars_video from '../../assets/videos/1608229455-star-wars.mp4'

const Viewer = () => {
  return (
    <div className='viewers_component'>
      <div className="view">
        <img src={viewers_disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={disney_video} type='video/mp4' />
        </video>
      </div>
      <div className="view">
        <img src={viewers_marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={marvel_video} type='video/mp4' />
        </video>
      </div>
      <div className="view">
        <img src={viewers_national} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={national_video} type='video/mp4' />
        </video>
      </div>
      <div className="view">
        <img src={viewers_pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={pixar_video} type='video/mp4' />
        </video>
      </div>
      <div className="view">
        <img src={viewers_starwars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={starwars_video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Viewer
