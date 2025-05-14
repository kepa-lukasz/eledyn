import React from "react";
import { Button, Col } from "react-bootstrap";
import "./news.css"
const News = () => {
    return (
        <div  className="news-con bg-black text-white py-5">

            <div className="text-white mt-5 position-rel">
                <h2 className="text-center px-5 mt-5 mb fs-1">Aktualności</h2>
                <div className="d-flex justify-content-center px-5 mb-5">
                    <Button className="mx-5">Zobacz wszystkie aktualności</Button>
                </div>

                <div className="d-flex justify-content-center my-3">
                    <div className="con d-flex flex-wrap">
                        <Col className="col-12 col-md-7 col-lg-8   d-flex flex-wrap">
                            <Col className="p-2 col-12">
                                <div className=" tile w-100 bg-warning rounded-4 p-3">
                                    <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                        <img className="background" src="../images/tlo3.png" alt="dron" />
                                        <div className="after-img p-3">

                                            <div>
                                                <h2>Festowial kół naukowych</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div className="d-flex justify-content-end w-100 align-items-end ">
                                                <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="  p-2 col-12 col-lg-6 ">
                                <div className="tile w-100 bg-pink rounded-4 p-3">
                                    <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                        <img className="background" src="../images/tlo2.jpg" alt="dron" />
                                        <div className="after-img p-3">

                                            <div>
                                                <h2>Festowial kół naukowych</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div className="d-flex justify-content-end w-100 align-items-end ">
                                                <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="  p-2 col-12 col-lg-6 ">
                                <div className="tile w-100 bg-success rounded-4 p-3">
                                    <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                        <img className="background" src="../images/lazik.png" alt="dron" />
                                        <div className="after-img p-3">

                                            <div>
                                                <h2>Festowial kół naukowych</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div className="d-flex justify-content-end w-100 align-items-end ">
                                                <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                        </Col>

                        <Col className="p-2 d-none d-md-block col-12 col-md-5 col-lg-4 ">
                            <div className=" tile h-100 w-100 bg-info rounded-4 p-3">
                                <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                    <img className="background" src="../images/dron.png" alt="dron" />
                                    <div className="after-img   p-3 ">

                                        <div>
                                            <h2>Festowial kół naukowych</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="d-flex justify-content-end w-100 align-items-end ">
                                            <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="d-none d-lg-block p-2 col-12 col-md-6 col-lg-8">
                            <div className="tile h-100 w-100 bg-danger rounded-4 p-3">
                                <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                    <img className="background" src="../images/tlo2.jpg" alt="dron" />
                                    <div className="after-img p-3">

                                        <div>
                                            <h2>Festowial kół naukowych</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="d-flex justify-content-end w-100 align-items-end ">
                                            <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-none d-lg-block p-2 col-12 col-md-6 col-lg-4">
                            <div className="tile h-100 w-100 bg-main rounded-4 p-3">
                                <div className="frame rounded-3 h-100 bg-light text-dark d-flex flex-wrap">
                                    <img className="background" src="../images/tlo3.png" alt="dron" />
                                    <div className="after-img   p-3">

                                        <div>
                                            <h2>Festowial kół naukowych</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="d-flex justify-content-end w-100 align-items-end ">
                                            <Button style={{ height: "40px" }}>Czytaj więcej</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>

                </div>
               
            </div>

        </div>
    )
}

export default News