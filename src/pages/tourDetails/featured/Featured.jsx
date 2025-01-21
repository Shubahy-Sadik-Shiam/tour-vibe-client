import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState } from "react";
import "../featured/featured.css";

const Featured = ({ trip }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images } = trip;

  return (
    <div className="pt-28">
      <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="max-sm:hidden">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
