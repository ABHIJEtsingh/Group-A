import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import '../style/swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const slidesData = [
  { image: "https://is1-ssl.mzstatic.com/image/thumb/Ed-B4V6OY0yoxxlksKeulw/1378x774.jpg" ,
   genre: "Comedy .", cap: "The Shady side of paradise" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/2eBqvT3JXPbdzHWj6HM5_w/1378x774.jpg",
     genre: "Action .", cap: "George Clooney and Brad pitt" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/1378x774.jpg",
   genre: "Drama .", cap: "New Season" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1378x774.jpg",
   genre: "Thriller .", cap: "winner of three Emmy Award" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg",
   genre: "Mystery .", cap: "Kindness make a come back" },
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
            <h3 className='dot'>{slide.cap}</h3>
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
