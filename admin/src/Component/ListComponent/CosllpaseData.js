import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ButtonAdd from "../ButtonCRUD/ButtonCreate/ButtonCreateDate";
import ButtonDeleteRecord from "../ButtonCRUD/ButtonDelete/ButtonDeleteRecordDate";
import ButtonDelete from "../ButtonCRUD/ButtonDelete/ButtonDeleteDate";
import ButtonEditLink from "../ButtonCRUD/ButtonEdit/ButtonEditLink2";
import ListGroup from "react-bootstrap/ListGroup";
import { v4 as uuidv4 } from "uuid";

function FlushExample({ data, id_year }) {
    return (
        <Accordion.Item eventKey={uuidv4()}>
            <Accordion.Header>{data.name_data}</Accordion.Header>
            <Accordion.Body>
                <div class="row gy-5">
                    <div class="col-8">
                        <h2 className="m-4"></h2>
                    </div>
                    <div class="col-2">
                        <ButtonDeleteRecord data={data._id} id_year={id_year} />
                    </div>
                    <div class="col-2">
                        <ButtonAdd id_data={data._id} id_year={id_year} />
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
                            {data.date.map((x, index) => (
                                <tr>
                                    <td class="col-md-10">
                                        <p>{x.name_date}</p>
                                    </td>
                                    <td>
                                        <ButtonEditLink data={x} id={data._id} id_year={id_year} />
                                    </td>
                                    <td>
                                        <ButtonDelete id_date={x._id} id={data._id} id_year={id_year} />
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
