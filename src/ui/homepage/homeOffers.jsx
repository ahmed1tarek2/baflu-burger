import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import offer1 from "/first1.png";
import offer2 from "/first2.png";
import offer3 from "/first3.png";
import home from "/home.jpeg"


const Offers = () => {
  return (
    <div>
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
          <img src={offer1} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer2} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer3} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home} alt="Home" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Offers;
