import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swa from "sweetalert2";

const ButtonDelete = (x) => {
    const [id, setId] = useState(x.data);
    const [idYear, setIdYear] = useState(x.id);

    const Delete = async () => {
        Swa.fire({
            title: "ต้องการลบข้อมูลนี้หรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            let data = axios.delete(`http://localhost:5000/admin/api/DeleteData/${idYear}/${id}`).then((result) => {
                notifySucceed();
                setTimeout(Reload, 2000);
            });
        });
    };

    const notifySucceed = () =>
        toast.success("ลบรายการสำเร็จ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    function Reload() {
        window.location.reload();
    }
    return (
        <td>
            <button type="button" class="btn btn-danger" onClick={Delete}>
                Delete
            </button>
        </td>
    );
};

export default ButtonDelete;
