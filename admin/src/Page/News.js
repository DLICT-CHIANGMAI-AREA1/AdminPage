import React, { useEffect, useState } from "react";
import axios from "axios";
import AddNewsButton from "../Component/ButtonNews/ButtonAddNews";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ListGroup from "react-bootstrap/ListGroup";
import ListService from "../Component/ListComponent/ListService";
const { REACT_APP_PATH } = process.env;
const NewPage = () => {
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
                                            <tbody></tbody>
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
