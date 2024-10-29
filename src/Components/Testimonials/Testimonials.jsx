import "./Testimonials.css";

import avtr1 from "../../assets/avatar1.jpg";
import avtr2 from "../../assets/avatar2.jpg";
import avtr3 from "../../assets/avatar3.jpg";
import avtr4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: avtr1,
      name: "Tina Snow",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoporro aspernatur a aliquam quibusdam facere laudantium praesentium repellat?",
    },
    {
      avatar: avtr2,
      name: "John Snow",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoporro aspernatur a aliquam quibusdam facere laudantium praesentium repellat?",
    },
    {
      avatar: avtr3,
      name: "Hayra Abbasi",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoporro aspernatur a aliquam quibusdam facere laudantium praesentium repellat?",
    },
    {
      avatar: avtr4,
      name: "Maymuna Majed",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoporro aspernatur a aliquam quibusdam facere laudantium praesentium repellat?",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
        }}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="clients_details">
                <h5 className="clients_name">{name}</h5>
                <small className="client_review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
