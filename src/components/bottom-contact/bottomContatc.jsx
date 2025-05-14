import React, { useRef } from "react";
import { Button } from "react-bootstrap";

import "./bottomcontact.css"

const BottomContact = () => {

    return (
        <div className="m-0 text-white py-5">
            <h2 className="text-center">Skontaktuj się z nami!</h2>
            <div className="button-con my-5 py-5 d-flex justify-content-center">
                <Button className="border border-3 py-2 px-4">Kontakt</Button>
            </div>

        </div>
    );
};

export default BottomContact;
