import React from 'react';
import "./aboutus.css"
import Description from './description';
import IEEESection from './ieee';
import BoardMembers from './team';
import BottomContact from '../../components/bottom-contact/bottomContatc';

function AboutUs() {
  return (
    <div className="pt-5 text-white m-0 p-0 " style={{overflow: "hidden"}}>
      <div className=' about-us-con'>

        <div className='pt-5 pb-5 d-flex justify-content-center '>

          <Description />
        </div>
      </div>
      <BoardMembers />
      <IEEESection />
      <BottomContact/>
    </div>

  );
}
export default AboutUs
