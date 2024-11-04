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
        " This website is sleek and responsive across devices, with fast load times and a well-organized layout. The user experience is seamless and visually appealing!",
    },
    {
      avatar: avtr2,
      name: "John Snow",
      review:
        " Impressive design and functionality! The website’s dynamic elements and smooth navigation make it both engaging and highly professional.",
    },
    {
      avatar: avtr3,
      name: "Hayra Abbasi",
      review:
        " Excellent YouTube SEO! The optimized titles, tags, and thumbnails have noticeably boosted video rankings and organic traffic on the channel.",
    },
    {
      avatar: avtr4,
      name: "Maymuna Majed",
      review:
        " Great SEO work! The use of relevant keywords, captivating thumbnails, and captions has improved visibility and viewer retention for the channel.",
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
