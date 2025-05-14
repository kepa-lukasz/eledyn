import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import project_data from "./projets-data.json"
import Slide from "./slide";

const CustomSlider = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className=" text-white">
            <h2 className="text-center px-5 mt-5 mb-5 fs-1">Projekty realizowane przez nasze koło</h2>
           
            <div className="carousel-wrapper">
                <Swiper
                    className="my-4"
                    modules={[Navigation, Autoplay]}
                    spaceBetween={100}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1040: {
                            slidesPerView: 1.3,
                        },
                        2040: {
                            slidesPerView: 1.6,
                        }
                        ,
                        3040: {
                            slidesPerView: 3,
                        }
                    }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                    {project_data.map((el, idx) => (
                        <SwiperSlide key={idx} >
                            <Slide el={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>



                <div className=" d-flex justify-content-around align-items-center">

                    <div className="prev border-success" ref={prevRef}>
                        <button className="rounded px-3 mx-2 text-white">
                            ‹
                        </button>
                    </div>
                    <div className="flex-wrap custom-pagination d-flex justify-content-center gap-3">
                        {project_data.map((el, i) => (
                            <div
                                key={i}
                                className={` indicator ${activeIndex === i ? 'active' : ''}`}
                                onClick={() => swiperRef.current?.slideToLoop(i)}
                            >
                                {el.title}
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
    )
}

export default CustomSlider