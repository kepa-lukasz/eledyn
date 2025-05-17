import React from "react";
import { Button, Col } from "react-bootstrap";
import data from "./history-data.json"; // załaduj dane z pliku JSON
import { Link } from "react-router-dom";

const TimelineCards = () => {
    return (
        <div className="w-100 d-flex flex-wrap" style={{ maxWidth: "1900px" }}>
            {data.map((item, index) => {
                const isRight = index % 2 === 0;

                return (
                    <div
                        key={index}
                        className={`d-flex w-100 justify-content-center ${isRight ? "" : "left-con"}`}
                    >
                        {isRight ? (
                            <div className="d-flex w-100 justify-content-center">

                                <Col className="d-none d-lg-block col-md-5"></Col>
                                <Col className="col-2 timeline timeline-right">
                                    <div className="marker left"></div>
                                </Col>
                                <Col className="maincard col-10 col-lg-5">
                                    <div className="bg-shadow m-1 p-2 history-card rounded-3  w-100">
                                        <div className="bg-glass rounded-1 p-2 pb-3">

                                            <p className="text-secondary fs-4 my-0">{item.date}</p>
                                            <h2>{item.title}</h2>
                                            <Link to={item.link}>
                                                <Button>Czytaj więcej</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        ) : (
                            <div className="left-con d-flex w-100  justify-content-center">

                                <Col className="maincard d-lg-flex justify-content-end col-10 col-lg-5 col-xl-5">
                                    <div className="m-1 bg-shadow p-2 history-card rounded  w-100" 
                                    > 
                                        <div className="  bg-glass rounded-1 p-2 pb-3">
                                            <p className="text-secondary fs-4 my-0">{item.date}</p>
                                            <h2>{item.title}</h2>
                                            <Link to={item.link}>
                                                <Button>Czytaj więcej</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-2 timeline timeline-right ">
                                    <div className="marker right"></div>
                                </Col>
                                <Col className="d-none d-lg-block col-md-5 "></Col>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TimelineCards;



