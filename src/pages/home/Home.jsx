import React from "react";
import { Button } from "react-bootstrap";
import People from "./people/people";
import News from "./news/news"
import History from "./history/history";
import CustomSlider from "./project-slider/projects"
import BottomContact from "../../components/bottom-contact/bottomContatc";
const Home = ()=>{
    return(
        <div className="projects mt-5 pt-5">
        <div data-aos="fade-down" className=" text-center top text-white">
          <img style={{ height: "150px" }} src="images/logo.png" />
          <h1 className="bg mt-auto">Eledyn</h1>

          <p className="fs-2 text-secondary ">Koło naukowe twoich marzeń</p>
          <br />
          <Button>Skontaktuj się z nami</Button>

        </div>
        <div data-aos="fade-up" data-aos-delay="300">
        <div className="divider"></div>
          <CustomSlider/>
          <div className="divider"></div>
          <News/>
          <People/>
          <div className="divider"></div>

          <History/>
        </div>
        <BottomContact/>
      </div>
    )
}
export default Home