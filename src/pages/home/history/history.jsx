import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';

import "swiper/css/pagination";
import "./history.css";

const experts = [
    { name: "Echo", year: "2024", image: "/images/Obraz2.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Ultra", year: "2023", image: "/images/tlo2.jpg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Off/Brand", year: "2022", image: "/images/tlo3.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Analogue", year: "2021", image: "/images/Obraz2.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Echo", year: "2020", image: "/images/tlo2.jpg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Ultra", year: "1994", image: "/images/tlo3.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Off/Brand", year: "1954", image: "/images/tlo2.jpg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { name: "Analogue", year: "1999", image: "/images/Obraz2.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const History = () => {
   
    return (
        <div className="m-0 text-white py-5">
            <h2 className="text-center py-2 px-5 mt-5 fs-1">Historia Koła</h2>
            <div className="pb-3 text-center mb-5">
                <Button>Czytaj więcej</Button>
            </div>
            <Swiper


                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={1000}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    0: { slidesPerView: 1.1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    2000: { slidesPerView: 4 },
                    3000: { slidesPerView: 6 }
                }}
            >
                {experts.map((el, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="rounded overflow-hidden position-relative historytile"
                            style={{ backgroundImage: `url(${el.image})`}}
                        >
                            <div className="position-absolute w-100 h-100" style={{ background: "rgba(0,0,0,0.7)" }}></div>
                            <div className="position-absolute bottom-0 p-3  w-100 d-flex flex-wrap justify-content-between">
                                <div>
                                    <h3 className="fw-bold text-white m-0" style={{ fontSize: "2rem" }}>{el.name}</h3>
                                    <p className="text-white-50 m-0 fw-bold">{el.year}</p>
                                </div>
                                <div className="w-auto d-flex align-items-center">
                                    <a href={el.link}>
                                    <Button>Czytaj&nbsp;więcej</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default History;
