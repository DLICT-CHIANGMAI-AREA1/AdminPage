import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ListYear from "../Component/ListComponent/ListYear";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ButtonCreateRecords from "../Component/ButtonCRUD/ButtonCreateRecord";
const Data = () => {
    const [Data, setData] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/FindDataEachYear`).then((res) => {
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
                                <div class="p-2" >
                                    <ButtonCreateRecords />
                                </div>
                                <ListGroup>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th class="col-md-7">ปีข้อมูล</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data ? (
                                                Data.map((data) => {
                                                    return <ListYear key={data._id} data={data} />;
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

export default Data;
