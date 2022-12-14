import React, { useEffect, useState } from "react";
import axios from "axios";
import AddNewsButton from "../Component/ButtonNews/ButtonAddNews";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ListGroup from "react-bootstrap/ListGroup";
import ListsNews from "../Component/ListComponent/ListNew";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const { REACT_APP_PATH } = process.env;
const NewPage = () => {
    
    // check token 
    const jwt = localStorage.getItem("mini-session");
    const navigate = useNavigate();
    if (!jwt) {
        navigate("/Login");
    }
    const { exp } = jwtDecode(jwt)
    const expirationTime = (exp * 1000) - 60000
    if (Date.now() >= expirationTime) {
        localStorage.clear();
        navigate("/Login");
      }
      console.log("Token "+expirationTime)
      console.log("DateT "+Date.now())
////////////////////////////////////////////////////
    
   


    const [Data, setData] = useState();
    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindNews`).then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-data-page">
                                <div class="p-2">
                                    <AddNewsButton />
                                </div>
                                <div class="row ">
                                    <ListGroup variant="flush">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="col-md-10">Name</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Data ? (
                                                    Data.map((data) => {
                                                        return <ListsNews key={data._id} data={data} />; // map ?????????????????????????????????????????????
                                                    })
                                                ) : (
                                                    <Spinner
                                                        animation="border"
                                                        role="status"
                                                        style={{ width: "3rem", height: "3rem", margin: "20px" }}
                                                    >
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                )}
                                            </tbody>
                                        </table>
                                    </ListGroup>
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

export default NewPage;
