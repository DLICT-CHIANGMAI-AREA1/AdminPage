import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ButtonEdit = (x) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(x.data.name);
    const [CsvURL, setCsvURL] = useState(x.data.csv_url);
    const [JsonURL, setJsonURL] = useState(x.data.json_url);
    const [id, setId] = useState(x.id);
    const [ids,setIds] = useState(x.data._id);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const onSubmit = async () => {
        if (name === "" || CsvURL === "" || JsonURL === "" ) {
            notify();
        } else {
            const data = {
                name: name,
                csv_url: CsvURL,
                json_url:JsonURL
            };
            await axios.put(`http://localhost:5000/admin/api/UpdateDataDataWebService/${id}/${ids}`, data).then((a) => {
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
            <button type="button" class="btn btn-success" onClick={handleShow}>
                Edit
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>เเก้ไขข้อมูล</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ชื่อ</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>CSV_URL</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={CsvURL}
                                onChange={(event) => setCsvURL(event.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Json_URL</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={JsonURL}
                                onChange={(event) => setJsonURL(event.target.value)}
                                required
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

export default ButtonEdit;
