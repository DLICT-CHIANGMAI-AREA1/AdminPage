import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FlushExample from "../Component/CosllpaseDataWebService";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ButtonCreateRecords from "../Component/ButtonCRUDwebService/ButtonCreateRecord";

const DataWebService = () => {
    const [Data, setData] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/FindDataStudentWebService`).then((res) => {
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
                                <div>
                                    <ButtonCreateRecords />
                                </div>
                                <Accordion flush>
                                    {Data ? (
                                        Data.map((data) => {
                                            return <FlushExample key={data._id} data={data} />;
                                        })
                                    ) : (
                                        <div>Loading</div>
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default DataWebService;
