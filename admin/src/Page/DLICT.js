import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonCreateServiceIcon from "../Component/ButtonService/CreateServiceIcon";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ListGroup from "react-bootstrap/ListGroup";
import ListService from "../Component/ListComponent/ListService";
import TitleText from "../Page/SubPage/TitleText";
const { REACT_APP_PATH } = process.env;

const DLICTPage = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:7000/admin/api/FindService`).then((res) => {
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
                                    <ButtonCreateServiceIcon />
                                </div>
                                <div class="row ">
                                    <ListGroup variant="flush">
                                        <TitleText />
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th class="col-md-10">Name</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Data ? (
                                                    Data.map((data) => {
                                                        return <ListService key={data._id} data={data} />; // map ออกมาเป็นปีก่อน
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

export default DLICTPage;
