// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//import data
import certifications from "./data";
import Certification from './Certification'

import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <p>I have certifications in the following technologies:</p>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
