import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonCreateMission from "../Component/ButtonMission/CreateMission";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ListGroup from "react-bootstrap/ListGroup";
import SubMission from "../Page/SubPage/subMission"

const Mission = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/FindMission`).then((res) => {
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
                                    <ButtonCreateMission />
                                </div>
                                <div class="row ">
                                    <ListGroup variant="flush">
                                        {Data ? (
                                            Data.map((data) => {
                                                return  <SubMission key={data._id} data={data}/>
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

export default Mission;
