import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import '../style/swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import ImageOne from '../../public/picOne.jpg';
import ImageTwo from '../../public/picTwo.jpg';
import ImageThree from '../../public/picThree.jpg';
import ImageFour from '../../public/picFour.jpg';
import ImageFive from '../../public/picFive.jpg';

const slidesData = [
  { image: ImageOne, genre: "Comedy .", dot: "The Shady side of paradise" },
  { image: ImageTwo, genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: ImageThree, genre: "Drama .", dot: "New Season" },
  { image: ImageFour, genre: "Thriller .", dot: "winner of three Emmy Award" },
  { image: ImageFive, genre: "Mystery .", dot: "Kindness make a come back" },
];

const MySwiperComponent = () => {
  const [autoplay, setAutoplay] = useState(true);

  const handleAutoplayToggle = () => {
    setAutoplay((prev) => !prev);
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        autoplay={autoplay ? {
          delay: 3500,
          disableOnInteraction: false,
        } : false}
        loop={true}
        parallax={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img className='m-4' src={slide.image} alt='' />
            <button className='slide-btn'>Stream now</button>
            <h3 className='texting'>{slide.genre}</h3>
            <h3 className='dot'>{slide.dot}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleAutoplayToggle} className="autoplay-button">
        <FontAwesomeIcon icon={autoplay ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default MySwiperComponent;
