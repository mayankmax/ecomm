import React from 'react'
import Slider from "react-slick";
import './Latest.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from '../../ProductCard';

export default function Latest() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
    <div>
    <div className='header'>
      <h2>Latest</h2>
    </div>
      <Slider {...settings} className='slider-main'>
        <div>
          <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
      </Slider>
      </div>
    </div>
  );
}


