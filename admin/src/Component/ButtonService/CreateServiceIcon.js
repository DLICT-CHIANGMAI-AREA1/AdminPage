import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;

const ButtonCreateServiceIcon = () => {
    const [showAddRecord, setShowAddRecord] = useState(false);
    const handleCloseAddRecord = () => setShowAddRecord(false);
    const handleShowAddRecord = () => setShowAddRecord(true);
    const [Message, setMessage] = useState("");
    const [URL, setURL] = useState("");
    const [Image, setImage] = useState("");

    const notify = () =>
        toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifySucceed = () =>
        toast.success("เพิ่มข้อมูลสำเร็จ", {
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

    const onSubmit = async () => {
        if (Message === "" || URL === "") {
            notify();
        } else {
            const formData = new FormData();
            formData.append("name", Message);
            formData.append("url", URL);
            formData.append("image", Image);

            await axios.post(`http://localhost:7000/admin/api/CreateService`, formData).then((a) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    return (
        <div className="CreateDataButton">
            <button type="button" class="btn btn-success" onClick={handleShowAddRecord}>
                + Add Service
            </button>
            <Modal show={showAddRecord} onHide={handleCloseAddRecord}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มหัวข้อการบริการ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>เพิ่มหัวข้อการบริการ</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddRecord}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Create Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ButtonCreateServiceIcon;
