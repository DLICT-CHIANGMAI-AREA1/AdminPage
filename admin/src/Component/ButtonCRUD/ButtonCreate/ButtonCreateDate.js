import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;
const ButtonAdd = (x) => {
    const [param] = useState(x.id_year)
    const [param2] = useState(x.id_data)
    const [showAddRecord, setShowAddRecord] = useState(false);
    const [name, setName] = useState("");
    const handleCloseAddRecord = () => setShowAddRecord(false);
    const handleShowAddRecord = () => setShowAddRecord(true);

    const notify = () =>
        toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน ", {
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

    const onSubmit = async () => {
        if (name === "") {
            notify();
        } else {
            const data = {
                name_date:name,
                
            };
            await axios.post(`${REACT_APP_PATH}/admin/api/CreateDate/${param}/${param2}`, data).then((a) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    function Reload() {
        window.location.reload();
    }

    return (
        <div>
            <button type="button" class="btn btn-success rounded-pill m-3" onClick={handleShowAddRecord}>
                + Add Data
            </button>
            <Modal show={showAddRecord} onHide={handleCloseAddRecord}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูล</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ชื่อข้อมูล</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setName(event.target.value)}
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
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default ButtonAdd;
