import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewsPage = () => {
    const [input, setInput] = useState([]);
    const [File, setFile] = useState();

    function _treat(e) {
        setFile(e.target.files[0]);
        const { files } = e.target;
        let images = [];
        const selecteds = [...[...files]];
        selecteds.forEach((i) => images.push(URL.createObjectURL(i)));
        setInput(images);
    }

    const [Minput, setMInput] = useState([]);
    const [MFile, setMmFile] = useState();

    function _treatMultiple(e) {
        setMmFile(e.target.files[0]);
        const { files } = e.target;
        let images = [];
        const selecteds = [...[...files]];
        selecteds.forEach((i) => images.push(URL.createObjectURL(i)));
        setMInput(images);
    }

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-data-page">
                                <div class="p-2">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>HeadLine</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>

                                <div class="p-2" className="img-center">
                                    {input.map((i) => (
                                        <img key={i} src={i} alt="Girl in a jacket" width="auto" height="500"></img>
                                    ))}
                                </div>

                                <div class="p-2">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        {Minput.map((i) => (
                                            <div class="col">
                                                <img
                                                    key={i}
                                                    src={i}
                                                    alt="Girl in a jacket"
                                                    width="auto"
                                                    height="500"
                                                ></img>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="p-2">
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Default file input example</Form.Label>
                                        <Form.Control type="file" onChange={_treat} />
                                    </Form.Group>
                                </div>
                                <div class="p-2">
                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Multiple files input example</Form.Label>
                                        <Form.Control type="file" multiple onChange={_treatMultiple} />
                                    </Form.Group>
                                </div>
                                <div class="row "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Container>
    );
};

export default AddNewsPage;
