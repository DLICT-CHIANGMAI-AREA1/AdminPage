import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
function FlushExample() {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>ปีการศึกษา-ภาคเรียน 2565-1</Accordion.Header>
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
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>ลำดับ</th>
                                    <th class="col-md-7">Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="col-md-7">Mark</td>
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
                                <tr>
                                    <td>1</td>
                                    <td class="col-md-7">Mark</td>
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
                            </tbody>
                        </Table>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FlushExample;

// /*ตรงนี้ axios ข้อมูลจาก DataBase*/
