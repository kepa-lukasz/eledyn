import React from "react"
import { Col, Button } from "react-bootstrap"
import "./history.css"
import TimelineCards from "./history-card"

const History = () => {
    return (
        <div className="pt-5 mt-5 text-white d-flex justify-content-center flex-wrap">
            <div className="w-100 text-center">
                <h1 className="fs-1 bg mt-auto">Historia Kn Eledyn</h1>
                <p className="fs-3 text-secondary ">Kolebka profesorów</p>
            </div>
            <div className=" w-100 d-flex flex-wrap" style={{ maxWidth: "1900px" }}>
                
                <TimelineCards/>
            </div>
        </div>
    )
}
export default History