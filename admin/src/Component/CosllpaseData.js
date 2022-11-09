import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
function FlushExample({ data }) {
    console.log(data.data)
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>{data.name_year}</Accordion.Header>
            <Accordion.Body>
                <div class="row gy-5">
                    <div class="col-8">
                        <h2 className="m-3">Student Details</h2>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-danger rounded-pill m-3">
                            Delete Record
                        </button>
                        <button type="button" class="btn btn-success rounded-pill">
                            + Add New
                        </button>
                    </div>
                </div>

                <ListGroup>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th class="col-md-7">Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((x) => (
                        
                                <tr>
                                    <td class="col-md-7">{x.name}</td>
                                    <td>
                                        <button type="button" class="btn btn-success">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default FlushExample;

// /*ตรงนี้ axios ข้อมูลจาก DataBase*/
