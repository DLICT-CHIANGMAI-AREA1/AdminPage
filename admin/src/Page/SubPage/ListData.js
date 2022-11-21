import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import FlushExample from "../../Component/ListComponent/CosllpaseData";
import Accordion from "react-bootstrap/Accordion";

const Data = () => {
    const { param1 } = useParams();
    const [Data, setData] = useState();
    useEffect(() => {
        function get() {
            axios.get(`http://localhost:5000/admin/api/FindDataEachYearById/${param1}`).then((res) => {
                setData(res.data.data);
            });
        }
        get();
    }, [param1]);
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-data-page">
                                <div class="p-2"></div>
                                <Accordion flush>
                                    {Data ? (
                                        Data.map((data) => {
                                            return <FlushExample key={data._id} data={data} id_year={param1} />;
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
};

export default Data;
