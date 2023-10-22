import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../categories/bag.jpeg";
import slide2 from "../../../categories/buti.jpg";
import slide3 from "../../../categories/iphon15.jpg";
import slide4 from "../../../categories/laptop.png";
import slide5 from "../../../categories/men.jpg";
import slide6 from "../../../categories/shoes.jpeg";
import slide7 from "../../../categories/child.jpg";
export default function CategoriesSlider() {
  const [slides, setSlides] = useState(4);
  useEffect(() => {
    if (window.innerWidth > 992) {
      setSlides(4);
    } else if (window.innerWidth > 768 && window.innerWidth < 992) {
      setSlides(3);
    } else if (window.innerWidth < 768 && window.innerWidth > 425) {
      setSlides(2);
    } else {
      setSlides(1);
    }
  }, []);
  return (
    <div>
      <h3 className="fs-3 fw-normal">Shop Popular Categories</h3>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={slides}
      >
        <SwiperSlide>
          <div>
            <img src={slide1} alt="" />
          </div>
          <h4>Bags</h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide2} alt="" />
          </div>
          <h4>Buti & Health </h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide3} alt="" />
          </div>
          <h4>Mobile</h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide4} alt="" />
          </div>
          <h4>Laptops</h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide5} alt="" />
          </div>
          <h4>Men's</h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide6} alt="" />
          </div>
          <h4>Shoes</h4>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slide7} alt="" />
          </div>
          <h4>Childrens & Boys</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
