import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import ListPerson from "../Component/ListComponent/ListPerson";
import CreatePerson from "../Component/ButtonCRUDPerson/CreatePerson";
const { REACT_APP_PATH } = process.env;
const Person = () => {
    const [Data, setData] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/DataPerson`).then((res) => {
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
                                    <CreatePerson />
                                </div>
                                <ListGroup>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Profile</th>
                                                <th class="col-md-10">Name</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data ? (
                                                Data.map((data) => {
                                                    return <ListPerson key={data._id} data={data} />; // map ออกมาเป็นปีก่อน
                                                })
                                            ) : (
                                                <div>Loading</div>
                                            )}
                                        </tbody>
                                    </table>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Person;
