import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const { REACT_APP_PATH } = process.env;
const PersonDetail = () => {
    const { param } = useParams();
    const [Data, setData] = useState();
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [JobTitle, setJobTitle] = useState();
    const [Department, setDepartment] = useState();
    const [Genders, setGenders] = useState();

    const [input, setInput] = useState([]);
    const [Profile, setProfile] = useState();
    const [OldProfile, setOldProfile] = useState();
    const [OperatingManual, setOperatingManual] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/DataPersonById/${param}`).then((res) => {
                console.log(res.data);
                setData(res.data);
                setLastName(res.data.Last_name);
                setFirstName(res.data.First_name);
                setEmail(res.data.Email);
                setPhone(res.data.Phone);
                setJobTitle(res.data.Job_title);
                setDepartment(res.data.Department);
                setGenders(res.data.Gender);
                setOperatingManual(res.data.Operating_Manual);
                setProfile(res.data.Profile);
                console.log(Profile);
            });
        }
        get();
    }, [param]);


    function AddOPM(e) {
        setOperatingManual(e.target.files[0]);
    }
    
    function AddIMG(e){
        setOldProfile(e.target.files[0]);
    }

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


    const onSubmit = async (e) => {
        const formData = new FormData();
        formData.append("First_name", FirstName);
        formData.append("Last_name", LastName);
        formData.append("Gender", Genders);
        formData.append("Email", Email);
        formData.append("JobTitle", JobTitle);
        formData.append("Department", Department);
        formData.append("Phone", Phone);
        formData.append("Operating_Manual", OperatingManual);
        formData.append("Profile", OldProfile);

        await axios.put(`http://localhost:5000/admin/api/UpdatePerson/${param}`, formData).then((res) => {
            if(res){
                notifySucceed()
                setTimeout(2000);
                navigate("/Person");
            }
          
        });
    };

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-data-page">
                                <div class="row p-2">
                                    <div class="col-5">
                                        <img
                                            src={`http://localhost:5000/${Profile}`}
                                            alt="Girl in a jacket"
                                            width="350"
                                            height="500"
                                        ></img>
                                    </div>
                                    <div class="col">
                                        <Form>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Form.Control
                                                        placeholder="First name"
                                                        type="text"
                                                        autoFocus
                                                        value={FirstName}
                                                        onChange={(event) => setFirstName(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        placeholder="Last name"
                                                        type="text"
                                                        autoFocus
                                                        value={LastName}
                                                        onChange={(event) => setLastName(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-4">
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Select
                                                        value={Genders}
                                                        onChange={(event) => setGenders(event.target.value)}
                                                    >
                                                        <option value="">เพศ</option>
                                                        <option value="ชาย">ชาย</option>
                                                        <option value="หญิง">หญิง</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Form.Control
                                                        placeholder="ตำเเหน่ง"
                                                        type="text"
                                                        autoFocus
                                                        value={JobTitle}
                                                        onChange={(event) => setJobTitle(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        placeholder="กลุ่ม"
                                                        type="text"
                                                        autoFocus
                                                        value={Department}
                                                        onChange={(event) => setDepartment(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Form.Control
                                                        placeholder="Email"
                                                        type="email"
                                                        autoFocus
                                                        value={Email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Form.Control
                                                        placeholder="เบอร์โทร xxx-xxx-xxxx"
                                                        type="tel"
                                                        autoFocus
                                                        value={Phone}
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                        onChange={(event) => setPhone(event.target.value)}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Form.Group controlId="formFile" className="mb-3">
                                                        <Form.Label>คู่มือปฎิบัติงาน</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            accept="application/pdf"
                                                            onChange={AddOPM}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formFile" className="mb-3">
                                                        <Form.Label>Profile</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            accept="image/png, image/jpeg"
                                                            onChange={AddIMG}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Container>
    );
};

export default PersonDetail;
