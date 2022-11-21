import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ButtonAdd from "../ButtonCRUD/ButtonAddData";
import ButtonDeleteRecord from "../ButtonCRUD/ButtonDelete/ButtonDeleteRecordDate";
import ButtonDelete from "../ButtonCRUD/ButtonDelete/ButtonDeleteDate";
import ButtonEditLink from "../ButtonCRUD/ButtonEdit/ButtonEditLink2";
import ListGroup from "react-bootstrap/ListGroup";

function FlushExample({ data, id_year }) {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                {data._id}
                {data.name_data}
            </Accordion.Header>
            <Accordion.Body>
                <div class="row gy-5">
                    <div class="col-8">
                        <h2 className="m-4"></h2>
                    </div>
                    <div class="col-2">
                        <ButtonDeleteRecord data={data._id} id_year={id_year} />
                    </div>
                    <div class="col-2">
                        <ButtonAdd data={data._id} />
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
                                    <td class="col-md-7">
                                        {x.name_date}
                                        {x._id}
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
