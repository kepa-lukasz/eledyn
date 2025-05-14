import React, { useRef } from "react";
import { Button } from "react-bootstrap";

import "./people.css";


const People = () => {

    return (
        <div className="m-0 text-white py-5">
            <h2 className="text-center py-2 px-5 mt-5 fs-1 px-2">Ludzie</h2>
            <p className="fs-4 text-secondary text-center px-2">To co najważniejsze w KN Eledyn</p>
            <div className="img-con">
                <img className="people-img" src="/images/blazej.jpg" />
                <div className=" d-flex justify-content-center flex-wrap undertext">
                    <h2 className="position-relative text-center w-100">Chcesz czegoś więcej?</h2>
                    <div  className="d-flex justify-content-center gap-3 flex-wrap">
                        <Button>Poznaj nasze koło</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default People;
