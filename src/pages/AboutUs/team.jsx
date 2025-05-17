import React, { useState } from 'react';
import { Card, Row, Col, Button, Collapse } from 'react-bootstrap';
import "./team.css"
const members = [
  { name: 'Jan Kowalski', title: 'Przewodniczący', description: 'Odpowiada za koordynację działań koła.' },
  { name: 'Anna Nowak', title: 'Zastępca', description: 'Wspiera przewodniczącego i nadzoruje projekty.' },
  { name: 'Piotr Wiśniewski', title: 'Sekretarz', description: 'Zajmuje się dokumentacją i komunikacją.' },
];

function BoardMembers() {
  const [open, setOpen] = useState(Array(members.length).fill(false));

  const toggle = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <div className='p-0 m-0'>
      <h2 style={{ fontSize: "3.5em" }} className="text-center mt-auto">Zarząd koła</h2>
      <p className="text-center fs-3 text-secondary ">Ludzie, dzięki którym to chodzi</p>

      <Row style={{ maxWidth: "2600px" }} className='m-0 mx-auto flex-wrap d-flex justify-content-center'>

        <div className=' col-12 col-sm-6 col-md-4 col-xl-3'>

          <div class="nft">
            <div class='main'>
              <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
              <h2 className='mt-2'>Łukasz Kępa</h2>
              <span style={{ color: "var(--main)" }}>Szef totalny</span>

              <hr />
              <p class='description'>Taki co programuje</p>
            </div>
          </div>
        </div>
        <div className=' col-12 col-sm-6 col-md-4 col-xl-3'>

          <div class="nft nft-main">
            <div class='main'>
              <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
              <h2 className='mt-2'>Łukasz Kępa</h2>
              <span style={{ color: "var(--main)" }}>Szef totalny</span>

              <hr />
              <p class='description'>Taki co programuje</p>
            </div>
          </div>
        </div>
        <div className=' col-12 col-sm-6 col-md-4 col-xl-3'>

          <div class="nft">
            <div class='main'>
              <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
              <h2 className='mt-2'>Łukasz Kępa</h2>
              <span style={{ color: "var(--main)" }}>Szef totalny</span>

              <hr />
              <p class='description'>Taki co programuje</p>
            </div>
          </div>
        </div>

      </Row>
    </div>
  );
}

export default BoardMembers;