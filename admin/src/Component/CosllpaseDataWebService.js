import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonAdd from "./ButtonCRUDwebService/ButtonAddData";
import ButtonEdit from "./ButtonCRUDwebService/ButtonEdit";
import ButtonDelete from "./ButtonCRUDwebService/ButtonDelete";
import ButtonDeleteRecord from "./ButtonCRUDwebService/ButtonDeleteRecord";
function FlushExample({ data }) {
    console.log(data.name_year)
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>{data.name_year}</Accordion.Header>
            <Accordion.Body>
                <div class="row gy-5">
                    <div class="col-8">
                        <h2 className="m-4">ข้อมูลนักเรียน</h2>
                    </div>
                    <div class="col-2">
                        <ButtonDeleteRecord data={data._id} />
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
                                <th class="col-md-1">csv</th>
                                <th class="col-md-1">json</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((x, index) => (
                              
                                <tr>
                                    <td class="col-md-7">{x.name}</td>
                                    <td class="col-md-1"><a href={x.csv_url} target="_blank" rel="noreferrer">csv</a></td>
                                    <td class="col-md-1"><a href={x.json_url} target="_blank" rel="noreferrer">json</a></td>
                                    <td>
                                        <ButtonEdit data={x} id={data._id}/>
                                    </td>
                                    <td>
                                        <ButtonDelete data={x._id} id={data._id} />
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
