import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ButtonCreateRecords = () => {
    const [showAddRecord, setShowAddRecord] = useState(false);
    const [year, setYear] = useState("");
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
        if (year === "") {
            notify();
        } else {
            const data = {
                name_year: year,
                data:[]
            };
            await axios.post(`http://localhost:5000/admin/api/CreateDataYear`, data).then((a) => {
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
                + Create Record Data Year
            </button>
            <Modal show={showAddRecord} onHide={handleCloseAddRecord}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข้อมูลปีการศึกษาชุดใหม่</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ปีการศึกษา</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setYear(event.target.value)}
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
            <ToastContainer />
        </div>
    );
};

export default ButtonCreateRecords;
