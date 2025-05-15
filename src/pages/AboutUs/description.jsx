import React from 'react';
import { Card, Col } from 'react-bootstrap';

function Description() {
    return (
        <div className='about-us-top w-100  m-0 d-flex justify-content-center flex-wrap-reverse'>
            <Col data-aos="fade-right" className="col-12 col-md-6 col-md-9 ps-3 pt-5 ps-5">
                <h1 className=" mt-auto">Eledyn</h1>

                <p className="fs-2 text-secondary ">Czemu jesteśmy tacy super?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </Col>
            <Col data-aos="fade-left" className="image-crop col-12 col-md-3 ">
                <img src='/images/logo.png'/>
            </Col>
        </div>
    );
}
export default Description