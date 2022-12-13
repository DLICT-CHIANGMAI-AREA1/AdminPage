import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;

const ButtonCreateMedia = () => {
    const [showAddRecord, setShowAddRecord] = useState(false);
    const handleCloseAddRecord = () => setShowAddRecord(false);
    const handleShowAddRecord = () => setShowAddRecord(true);
    const [Message, setMessage] = useState('');

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
        if (Message === "") {
            notify();
        } else {
            let data = { text: Message };
            await axios.post(`${REACT_APP_PATH}/admin/api/AddMission`, data).then((a) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    return (
        <div className="CreateDataButton">
            <button type="button" class="btn btn-success" onClick={handleShowAddRecord}>
                + เพิ่มขอบข่าย/ภารกิจ
            </button>
            <Modal show={showAddRecord} onHide={handleCloseAddRecord}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มขอบข่าย/ภารกิจ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>เพิ่มขอบข่าย/ภารกิจ</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />
                        </Form.Group>
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

export default ButtonCreateMedia;
