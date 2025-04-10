import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CustomSlider from "./project-slider/projects";
import Aos from "aos";
import 'aos/dist/aos.css';
import GlassNavbar from "./nav/navbar";
import News from "./news/news";
import History from "./history/history";

function App() {
  useEffect(() => {

    Aos.init({
      disable: 'mobile'
    });
  }, [])

  return (
    <div>
        <GlassNavbar/>
      <div className="projects">
        <div data-aos="fade-down" className=" text-center top text-white">
          <img style={{ height: "150px" }} src="images/logo.png" />
          <h1 className="bg mt-auto">Eledyn</h1>

          <p className="fs-2 text-secondary ">Koło naukowe twoich marzeń</p>
          <br />
          <Button>Skontaktuj się z nami</Button>

        </div>
        <div data-aos="fade-up" data-aos-delay="300">
        <div className="divider"></div>
          <CustomSlider />
          <div className="divider"></div>
          <News/>
          <div className="divider bg-dark"></div>

          <History/>
        </div>
      </div>
    </div>
  );
}

export default App;
