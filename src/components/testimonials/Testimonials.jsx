import React from 'react'
import './testimonials.css'
import AVT from '../../assets/testimonial-user.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Google',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      image: AVT
    },
    {
      id: 2,
      name: 'Eren Yeager',
      position: 'CEO, AOT',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      image: AVT
    },
    {
      id: 3,
      name: 'Brad Pitt',
      position: 'CEO, ABC',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      image: AVT
    },
    {
      id: 4,
      name: 'Neymar Jr',
      position: 'CEO, PSG',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
      image: AVT
    },
  ]
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map(({id, name, position, text, image}) => (
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={image} alt="client" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {text}
          </small>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  )
}

export default Testimonials