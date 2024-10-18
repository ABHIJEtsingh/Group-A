import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import '../style/smallSwiper.css';

import 'swiper/css/effect-coverflow';
import ImageOne from '../../public/foot.jpg';
import ImageTwo from '../../public/medi.jpg';
import ImageThree from '../../public/foot.jpg';
import ImageFour from '../../public/picOne1.jpg';
import ImageSix from '../../public/basket.jpg';

const slidesData = [
  { image: ImageOne, genre: "Comedy .", dot: "Listen" },
  { image: ImageTwo, genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: ImageThree, genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: ImageFour, genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: ImageSix, genre: "Mystery .", dot: "Kindness make a come back" },
];

const MySmallSwiperComponent = () => {
  const [autoplay, setAutoplay] = useState(true);

  const handleAutoplayToggle = () => {
    setAutoplay((prev) => !prev);
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        autoplay={autoplay ? {
          delay: 2000,
          disableOnInteraction: false,
        } : false}
        loop={true}
        parallax={true}
        modules={[Autoplay]}
        centeredSlides={true}
        className='filter'
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className='opacity-100 blur-0'>
            <img className='m-4 hover:opacity-100' src={slide.image} alt='' />
            <button className='slide-btn m-auto opacity-0  hover:opacity-100 '>Stream now</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleAutoplayToggle} className="autoplay-button">
        <FontAwesomeIcon icon={autoplay ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default MySmallSwiperComponent;
