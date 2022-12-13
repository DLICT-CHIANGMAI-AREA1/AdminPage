import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;
const EditService = (x) => {
    const [id] = useState(x.data.data._id)
    const [show, setShow] = useState(false);
    const [name, setName] = useState(x.data.data.name);
    const [URL, setURL] = useState(x.data.data.url);
    const [image, setImage] = useState(x.data.data.image);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const notify = () =>
        toast.warn("กรุณา กรอกข้อมูลให้ครบถ้วน ", {
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
        toast.success("อัพเดทข้อมูลสำเร็จ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifyURL = () =>
        toast.warn("URL ไม่ถูกต้อง ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
 
    const onSubmit = async () => {
        if (name === "" || URL === "") {
            notify();
        } else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("url", URL);
            formData.append("image", image);
            await axios.put(`http://localhost:7000/admin/api/EditService/${id}`, formData).then((a) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    function Reload() {
        window.location.reload();
    }
    return (
        <td>
            <img
                src="images/contract.png"
                alt="Girl in a jacket"
                width="50"
                height="50"
                class="pointer"
                onClick={handleShow}
            ></img>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>เเก้ไขข้อมูล</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ชื่อบริการ</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={URL}
                                onChange={(event) => setURL(event.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>เลือกรูปภาพ</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={(event) => setImage(event.target.files[0])}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </td>
    );
};

export default EditService;
