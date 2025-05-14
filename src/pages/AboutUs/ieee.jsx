import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { SiIeee } from "react-icons/si";


function IEEESection() {
    return (
        <div className='mb-5 d-flex flex-wrap px-2 m-auto' style={{maxWidth: "1700px"}}>
            <Col data-aos="fade-right" className="col-12 col-md-6 ps-5 ">
            <SiIeee size={200} color='var(--main)' />
                <p className="fs-2 text-secondary ">Współpraca KN Eledyn z międzynarodowym gigantem</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button>Zobacz stronę IEEE</Button>
            </Col>
            <Col data-aos="fade-left" className="ieee-img-con py-5 col-12 col-md-6  d-flex justify-content-center align-items-center">
                <div style={{width: "70%", minHeight: "50px", maxWidth: "500px"}}>
                <img className='ieee-img w-100'  src="/images/tlo2.jpg" alt="" />
                </div>
            </Col>
        </div>
       
                
          
    );
}

export default IEEESection;
