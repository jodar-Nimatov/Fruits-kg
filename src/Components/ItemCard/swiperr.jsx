import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Swipers = ({ image }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={image} alt="Product" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://miro.medium.com/max/1400/1*BR2RiTRoYor9xSrzEgxLWQ.jpeg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://miro.medium.com/max/1400/1*BR2RiTRoYor9xSrzEgxLWQ.jpeg" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://miro.medium.com/max/1400/1*BR2RiTRoYor9xSrzEgxLWQ.jpeg" alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};
