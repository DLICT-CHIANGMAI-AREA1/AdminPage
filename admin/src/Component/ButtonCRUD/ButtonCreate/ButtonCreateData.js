import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const { REACT_APP_PATH } = process.env;
const ButtonAdd = (x) => {
    const [param] = useState(x.id_year);
    const [param2] = useState(x.id_data);
    const [param3] = useState(x.id_date);
    const [showAddRecord, setShowAddRecord] = useState(false);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [csv, setCsv] = useState("");
    const [Pdf, setPdf] = useState("");
    const handleCloseAddRecord = () => setShowAddRecord(false);
    const handleShowAddRecord = () => setShowAddRecord(true);
    /*****************************************/

    const onSubmit = async () => {
        if (name === "") {
            notifyURL();
        } else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("url", url);
            formData.append("csv_url", csv);
            formData.append("pdf", Pdf);
            const id = toast.loading("Please wait...");
            await axios
                .post(`http://localhost:7000/admin/api/CreateData/${param}/${param2}/${param3}`, formData)
                .then((a) => {
                    toast.update(id, { render: "All is good", type: "success", isLoading: false });
                    notifySucceed();
                    setTimeout(Reload, 2000);
                });
        }
    };

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        setPdf(file);
    };

    return (
        <div className="CreateDataButton">
            <button type="button" class="btn btn-success rounded-pill m-3" onClick={handleShowAddRecord}>
                + Add New Data
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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>URL ของ DataVisualization</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setUrl(event.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>URL ของ File CSV หรือ excel </Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(event) => setCsv(event.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload PDF file</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".pdf"
                                onChange={(e) => {
                                    uploadFile(e);
                                }}
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
                <ToastContainer />
            </Modal>
        </div>
    );
};

function Reload() {
    window.location.reload();
}
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
const validation = (url) => {
    const regEx = new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?");
    return regEx.test(url);
};
const validation2 = (url) => {
    const regEx = new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?");
    return regEx.test(url);
};

export default ButtonAdd;
