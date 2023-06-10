// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation} from "swiper";

//import data
import certifications from "./data";
import Certification from './Certification'

import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <p>I have certifications in the following technologies:</p>
      <div className="container certification-container">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            601: {slidesPerView: 3},
            961: {slidesPerView: 4},
            1201: {slidesPerView: 5}
          }}
          // scrollbar={{draggable: true}}
          // spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          // autoplay={true}
          autoplay={{delay: 0}}
          disableOnInteraction={true}
          // autoplayTimeout={2}
          speed={2000}
          loop={true}
          className="mySwiper"
        >
          {certifications.map((certification) => (
            <SwiperSlide key={certification.id}>
              <Certification certification={certification}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;
