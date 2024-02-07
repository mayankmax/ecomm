import React from 'react';
// Import your SCSS file
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Advertisment.scss';  
import { Carousel } from 'react-responsive-carousel';

function Advertisement() {
  return (
    <section className='ad-main'>
    <div className="advertisement-container">
        <div className='main'>
      <Carousel showThumbs={false} infiniteLoop className='carousel-main'>
        <div>
          <a href="/zebronics-zeb-pixaplay-22-3200-lm-portable-electronic-focus-multi-connectivity-supported-formats-in-built-speaker-dual-band-connectivity-cotton-swab-pack-stunning-720p-hd-smart-projector/p/itmf35a62003470e?pid=PROGPEHBQETTRE6G&otracker=hp_bannerads_4_2.bannerAdCard.BANNERADS_App_K6CSTZ04X1RO">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1764ceef2da9c292.jpg?q=50" alt="App" />
          </a>
        </div>
        <div>
          <a href="/travel/flights?param=Travel-DTHPW-airasia1399-FLYFK&otracker=hp_bannerads_1_2.bannerAdCard.BANNERADS_f_HMEWR7BFU6GC">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50" alt="f" />
          </a>
        </div>
        <div>
          <a href="/realme-11-pro-5g-series-coming-soon-store?param=4556676&otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_A_QSVP7X3LENOG">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/0ab77c3a03af1d1b.jpg?q=50" alt="A" />
          </a>
        </div>
        <div>
          <a href="/travel/flights?param=Travel-DTHPW-_Bookflight_NCEMI2&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_S_Q3GK9EPNQF0J">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/dd75bf0d7c3bb4b4.jpg?q=50" alt="S" />
          </a>
        </div>
      </Carousel>
    </div>
    </div>
    </section>
  );
}

export default Advertisement;
