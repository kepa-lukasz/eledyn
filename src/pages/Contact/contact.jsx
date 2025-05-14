import React from "react";
import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="vh-100  d-flex justify-content-center align-items-center text-white">
            <div className="container contact-shadow pt-5 mt-5 ">
                <img  className="bg-logo" src="/images/logo.png"/>
                <div  className="row  align-items-center ">
                    {/* Sekcja kontaktowa */}
                    <div  className=" col-lg-6 d-flex justify-content-center">
                        <div className="half">

                        <h2 className="mb-4">Skontaktuj się z nami</h2>
                        <table className="mb-5">
                            <tr>
                                <td className="d-flex align-items-top">
                                    <MdEmail color="var(--main)" size={50} />
                                </td>
                                <td className="pb-4">
                                    <h3 className="pt-2" style={{ color: "var(--main)" }}> Email</h3>
                                    <p className="pb-1">eledyn@po.edu.pl</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex align-items-top">
                                    <FaDiscord color="var(--main)" size={50} />
                                </td>
                                <td>
                                    <h3 className="pt-2" style={{ color: "var(--main)" }}> Discord</h3>
                                    <p style={{position: "relative"}}>Link/do/disorda</p>
                                </td>
                            </tr>
                        </table>
                        </div>
                        
                    </div>

                    {/* Formularz kontaktowy */}
                    <div  className=" col-lg-6 d-flex justify-content-center justify-content-lg-start ">
                        <div className="half card glass-card p-4">
                            <h4 className="mb-3">Formularz kontaktowy</h4>
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Imię i nazwisko
                                    </label>
                                    <input type="text" className="form-control" id="name" placeholder="Wpisz swoje imię" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Adres e-mail
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Wiadomość
                                    </label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Napisz wiadomość"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Wyślij
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;