import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { REACT_APP_PATH } = process.env;

const PDFViewer = () => {
    const [Data, setData] = useState("");
    const [Id, setId] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindPDF`).then((res) => {
                setData(res.data[0].file);
                setId(res.data[0]._id);
            });
        }
        get();
    }, []);

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

    const notify = () =>
        toast.warn("กรุณา upload file pdf. ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const notifySucceed = () =>
        toast.success("upload file สำเร็จ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    function Reload() {
        window.location.reload();
    }

    const editOPM = async () => {
        if (input.length === 0) {
            notify();
        } else {
            const formData = new FormData();
            formData.append("filename", "operation");
            formData.append("file", File);
            /*await axios.post(`${REACT_APP_PATH}/admin/api/CreatePDF`, formData).then((res) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });*/
            await axios.put(`${REACT_APP_PATH}/admin/api/UpdatePDF_OPM/${Id}`, formData).then((res) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    return (
        <Container>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="op">
                            <iframe
                                src={`${REACT_APP_PATH}/${Data}`}
                                frameborder="0"
                                height="90%"
                                width="90%"
                                title="myFrame"
                            ></iframe>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="landing">
                                    {input.map((i) => (
                                        <div className="op">
                                            <iframe
                                                key={i}
                                                src={i}
                                                frameborder="0"
                                                height="90%"
                                                width="100%"
                                                title="myFrame"
                                            ></iframe>
                                        </div>
                                    ))}
                                    <form>
                                        <label>
                                            <Row>
                                                <Col xs={12} md={5} xl={12}>
                                                    <Form.Group controlId="formFile" className="mb-3" onChange={_treat}>
                                                        <Form.Control type="file" accept="application/pdf" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6} xl={5}>
                                                    <button className="upload" type="button" onClick={editOPM}>
                                                        Upload
                                                    </button>
                                                    <ToastContainer />
                                                </Col>
                                            </Row>
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

export default PDFViewer;
