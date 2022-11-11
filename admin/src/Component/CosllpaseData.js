import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonAddRecord from "./ButtonCRUD/ButtonAddRecord";
import ButtonEdit from "./ButtonCRUD/ButtonEdit";
import ButtonDelete from "./ButtonCRUD/ButtonDelete";
function FlushExample({ data }) {
    return (
        
        <Accordion.Item eventKey="0">
            <Accordion.Header>{data.name_year}</Accordion.Header>
            <Accordion.Body>
                <div class="row gy-5">
                    <div class="col-8">
                        <h2 className="m-3">Student Details</h2>
                    </div>
                    <ButtonAddRecord />
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
                        
                            {data.data.map((x,index) => (
                                <tr>
                                    
                                    <td class="col-md-7">{x._id}</td>
                                    <td>
                                       <ButtonEdit data={x}/>
                                    </td>
                                    <td>
                                    <ButtonDelete  data={x._id} id={data._id}/>
                                        
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
