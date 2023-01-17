import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;
const ButtonCreateRecords = (data) => {
    const [showAddRecord, setShowAddRecord] = useState(false);
    const [DataName, setDataName] = useState("");
    const [param] = useState(data.id_year);
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
        toast.success("สร้างปีการศึกษา-ภาคเรียนชุดใหม่สำเร็จ", {
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
        if (DataName === "") {
            notify();
        } else {
            const data = {
                name_data: DataName,
                date: [],
            };
            await axios.post(`${REACT_APP_PATH}/admin/api/CreateDataName/${param}`, data).then((a) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        }
    };

    function Reload() {
        window.location.reload();
    }

    return (
        <div className="CreateDataButton">
            <button type="button" class="btn btn-success" onClick={handleShowAddRecord}>
                + Create Record Data Name
            </button>
            <Modal show={showAddRecord} onHide={handleCloseAddRecord}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลชุดใหม่</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ชื่อของกลุ่มข้อมูล</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setDataName(event.target.value)}
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
                <ToastContainer />
            </Modal>
        </div>
    );
};

export default ButtonCreateRecords;
