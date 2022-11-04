import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
const { REACT_APP_PATH } = process.env;

const PDFViewer = () => {
    const [Data, setData] = useState("");
    const [Id, setId] = useState("");
    useEffect(() => {
        function get() {
            axios.get(`${REACT_APP_PATH}/admin/api/FindPDF`).then((res) => {
                setData(res.data[0].file);
                setId(res.data[0]._id);
            });
        }
        get();
    }, []);

    const [input, setInput] = useState([]);
    const [File, setFile] = useState();


    /*function _treat(e) {
        const { files } = e.target;
        setFile(e.target.value)
        console.log(e.target.value)
        console.log(File)
        let images = [];
        const selecteds = [...[...files]];
        selecteds.forEach((i) => images.push(URL.createObjectURL(i)));
        setInput(images);
    }*/

    
    const editNews = async () => {
        const formData = new FormData();
        formData.append("filename", 'operation');
        formData.append("file", File);
       
        let data = await axios.put(`http://localhost:5000/admin/api/UpdatePDF_OPM/${Id}`, formData);
    };

    return (
        <Container>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="op">
                            <iframe
                                src={`http://localhost:5000/${Data}`}
                                frameborder="0"
                                height="90%"
                                width="90%"
                                title="myFrame"
                            ></iframe>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="landing">
                                    {input.map((i) => (
                                        <div className="op">
                                            <iframe
                                                key={i}
                                                src={i}
                                                frameborder="0"
                                                height="90%"
                                                width="100%"
                                                title="myFrame"
                                            ></iframe>
                                        </div>
                                    ))}
                                    <form>
                                        <label>
                                            <input type="file" multiple onChange={(event) => setFile(event.target.files[0])} />
                                            <button type="button" onClick={editNews}>
                                                Upload
                                            </button>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default PDFViewer;
