import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FlushExample from "../Component/CosllpaseData";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { REACT_APP_PATH } = process.env;

const Data = () => {
    return (
        <Container>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="landing-data-page">
                                    <FlushExample/>
                                    <form>
                                        <label>
                                            <Row></Row>
                                            <Row></Row>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Data;
