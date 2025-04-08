import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const slides = [1, 2, 3, 4, 5];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="projects">

      <div className="text-center top text-white">
        <h1 className="bg mt-auto">Eledyn</h1>

        <p className="fs-2 text-secondary ">Koło twoich marzeń</p>
        <br />
        <Button>Skontaktuj się z nami</Button>

      </div>
      <div className=" pt-4 text-white">
        <h2 className="px-4">Projekty</h2>
        <div className="carousel-wrapper">
          <Swiper
          className="my-4"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1040: {
                slidesPerView: 1.3,
              }
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides.map((num) => (
              <SwiperSlide key={num}>
                <div className="slide">Slide {num}</div>
              </SwiperSlide>
            ))}
          </Swiper>



          <div className=" d-flex justify-content-around">

            <div className="prev border-success" ref={prevRef}>
              <button className="rounded px-3 mx-2 text-white">
                ‹
              </button>
            </div>
            <div className="custom-pagination d-flex justify-content-center gap-3">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={` indicator ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                >
                  difjs
                </div>
              ))}

            </div>
            <div className=" next" ref={nextRef}>
              <button className="rounded px-3 mx-2 text-white">
                ›
              </button>
            </div>
          </div>
        </div>




      </div >
    </div>
  );
}

export default App;
