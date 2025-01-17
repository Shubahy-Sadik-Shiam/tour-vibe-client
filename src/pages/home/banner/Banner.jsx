import bg from "../../../assets/Rectangle 1.png";
import slider1 from "../../../assets/Sajek.png";
import slider2 from "../../../assets/Sreemongol.png";
import slider3 from "../../../assets/sundorbon.png";
import slider4 from "../../../assets/IMG_.jpg";
import slider5 from "../../../assets/images (1).jpg";
import slider6 from "../../../assets/image2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./banner.css";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="text-neutral-content max-sm:hero-content">
        <div className="lg:flex items-center">
          <div className="lg:w-3/6 md:ml-10">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Embark on Extraordinary Journeys That Create Lifelong Memories
            </h1>
            <p className="md:w-[600px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="lg:w-1/2 max-sm:hidden md:w-2/3 absolute lg:right-10 md:right-36">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slider1} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
