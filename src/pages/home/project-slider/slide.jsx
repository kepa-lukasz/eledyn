import { Button, Col } from "react-bootstrap"
import { SwiperSlide } from "swiper/react"

const Slide = ({ el }) => {
    return (

        <div className="slide p-3">
            <div className="py-2  flex-wrap slide-item w-100 h-100 rounded-3 d-flex justify-content-around">
                <Col className="col-12 col-sm-7 col-lg-6 p-4">

                    <h2 className="fs-1 fw-bold">{el.title}</h2>
                    <p className="fs-5 text-secondary">{el.header}</p>
                    <p>{el.desc}</p>
                    <a href={el.link}>
                        <Button>Czytaj więcej</Button>
                    </a>
                </Col>
                <Col className="col-12 col-sm-5 col-lg-6  d-flex align-items-center justify-content-center">
                    <img alt={el.title} src={el.img} />
                </Col>
            </div>
        </div>
    )
}
export default Slide