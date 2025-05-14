import React, { useRef } from "react";
import { Button } from "react-bootstrap";

import "./bottomcontact.css"

const BottomContact = () => {

    return (
        <div data-aos="fade-up" className="m-0 text-white py-5">


            <h2 className="text-center">Chcesz wiedzieć więcej?</h2>
            <p style={{position:"relative", zIndex: 2}} className="fs-2 text-center text-secondary ">Skontaktuj się z nami!</p>
            <div className="button-con my-5 d-flex justify-content-center">
                <a href="/kontakt">
                <Button className=" py-2 px-4">Kontakt</Button>
                </a>
            </div>

        </div>
    );
};

export default BottomContact;
