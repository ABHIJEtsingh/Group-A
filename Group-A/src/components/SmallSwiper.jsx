import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import '../style/smallSwiper.css';

import 'swiper/css/effect-coverflow';

const slidesData = [
  { image: "https://is1-ssl.mzstatic.com/image/thumb/7QggTvk_fHz-FE9Pru2GxA/1378x774.jpg",
   genre: "Comedy .", dot: "Listen" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/05/4f/66/054f66a9-ada8-6bad-7916-db26fd8ceb27/f5ef6771-7f39-4eb5-8e81-b6cbc7ebeb53.png/572x322.jpg",
   genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/b0/9d/79/b09d79eb-8b70-f911-621e-d456b6d98d84/5a7eaa86-0fad-454a-b97e-7db4ef77d7d9.png/572x322.jpg",
   genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/1378x774.jpg",
   genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/13/2b/9e/132b9e36-02f0-22e5-5a67-e2462500c987/media-CO_KA_0126-9332054-Artwork-iOS-307612.png/572x322.jpg",
   genre: "Action .", dot: "George Clooney and Brad pitt" },
  { image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bd/60/67/bd6067ae-64ac-04df-dc96-4757069c37dd/6610be22-3caa-493c-90b0-a8f73520c9bf.png/572x322.jpg",
   genre: "Mystery .", dot: "Kindness make a come back" },
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
          disableOnInteraction: true,
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
