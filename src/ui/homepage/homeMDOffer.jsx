import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import offer12 from "/offer12.png";
import offer32 from "/offer32.png";
import home2 from "/home2.jpeg"


const OffersMD = () => {
  return (
    <div className="xS: md:block">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={offer12} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer32} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home2} alt="Home" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default OffersMD;
