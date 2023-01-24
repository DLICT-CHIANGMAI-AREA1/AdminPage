import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonDelete from "../../Component/ButtonCRUD/ButtonDelete/ButtonDelete";
import ButtonEdit from "../../Component/ButtonCRUD/ButtonEdit/ButtonEditData";
import ButtonCreateData from "../../Component/ButtonCRUD/ButtonCreate/ButtonCreateData";
import ButtonSeeFullImage from "../../Component/ButtonCRUD/ButtonImage";
import Post from "../../Component/Posts";
import Pagination from "../../Component/Pagination";
import jwtDecode from "jwt-decode";
const { REACT_APP_PATH } = process.env;
const Data = () => {
    // check token
    const jwt = localStorage.getItem("mini-session");
    const navigate = useNavigate();
    if (!jwt) {
        navigate("/Login");
    }
    const { exp } = jwtDecode(jwt);
    const expirationTime = exp * 1000 - 60000;
    if (Date.now() >= expirationTime) {
        localStorage.clear();
        navigate("/Login");
    }
    ////////////////////////////////////////////////////
    const { param1, param2, param3 } = useParams();
    const [Data, setData] = useState([]);

    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindDataEachYearByDate/${param2}/${param3}`).then((res) => {
                setData(res.data[0].data);
            });
        }
        get();
    }, [param1, param2, param3]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    // Current Page
    const indexOfLastPosts = currentPage * postsPerPage;
    const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
    const currentPosts = Data.slice(indexOfFirstPosts, indexOfLastPosts);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <div className="landing-data-page">
                                <div class="p-2">
                                    <div>
                                        <ButtonCreateData id_year={param1} id_data={param2} id_date={param3} />
                                    </div>
                                </div>
                                <ListGroup>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th class="col-md-7">Name</th>
                                                <th>Data</th>
                                                <th>Excel</th>
                                                <th>PDF</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <Post
                                            data={currentPosts}
                                            param1={param1}
                                            param2={param2}
                                            param3={param3}
                                        ></Post>
                                    </table>
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={Data.length}
                                        setCurrentPage={setCurrentPage}
                                        currentPage={currentPage}
                                    />
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Data;
