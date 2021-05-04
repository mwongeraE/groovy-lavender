import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const config = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const [settings, setSettings] = useState(config);

    const images = [
      {
        img: '/images/image1.jpg'
      },
      {
        img: '/images/image2.jpg'
      },
      {
        img: '/images/image3.jpg'
      },
      {
        img: '/images/image4.jpg'
      }
    ]

    const onChangeCenterMode = e => {
      if (e.target.checked) {
        setSettings({
          ...config,
          centerMode: true,
          centerPadding: '50px'
        });
      } else {``
        setSettings(config);
      }
    }

    return (
      <div className="SimpleSlider">
        <h2> Kimuka Gardens </h2>
        
        <Slider {...settings}>
          {images.map((x,i) => {
            return <div key="{i}" className="img-card">
              <img className="img" src={x.img} style = {{width: "100%", height: "200px", objectFit: "cover"}}/>
            </div>
          })}
        </Slider> 
      </div>
    );
  
}