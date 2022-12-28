import React, { useState } from "react";
import axios from "axios";
import { fetchUser } from "../Reducer/Action";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";


function LoginForm() {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();

    const notify = () =>
        toast.warn("Username หรือ Password ไม่ถูกต้อง", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            username: Username,
            password: Password,
        };

        await axios
            .post("http://localhost:7000/admin/api/login", data)
            .then((res) => {
                if (res.data.text === "Invalid password") {
                  notify()
                } else {
                    dispatch(fetchUser(res.data));
                    localStorage.setItem("mini-session", JSON.stringify(res.data));
                    navigate("/News");
                    
                    
                }
            })
            .catch(() => {
                console.log("error");
            });
    };

    return (
        <Container>
            <Form className="login" style={{ width: "20rem" }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}

export default LoginForm;
