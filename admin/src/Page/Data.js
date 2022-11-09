import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FlushExample from "../Component/CosllpaseData";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Data = () => {
    const [Data, setData] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/FindDataStudentYear`).then((res) => {
                setData(res.data);
            });
        }
        get();
    }, []);
    return (
        <Container>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="landing-data-page">
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
            </section>
        </Container>
    );
};

export default Data;
