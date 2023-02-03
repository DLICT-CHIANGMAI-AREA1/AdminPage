import React, { useState } from "react";
import axios from "axios";
import Swa from "sweetalert2";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const { REACT_APP_PATH ,REACT_APP_IMGEPATH} = process.env;
const ButtonDeleteYear = (x) => {
    const [id] = useState(x.id);
    const DeleteRecord = async () => {
        Swa.fire({
            title: "ต้องการลบข้อมูลชุดนี้หรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                let data = axios.delete(`${REACT_APP_PATH}/admin/api/DeleteDataYear/${id}`).then((result) => {
                    notifySucceed();
                    setTimeout(Reload, 2000);
                });
            }
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
        <div>
            <Link className="btn" role="button">
                <img
                   src={`${REACT_APP_IMGEPATH}/images/delete-button.png`}
                    alt="Girl in a jacket"
                    width="40"
                    height="45"
                    className="pointer"
                    onClick={DeleteRecord}
                ></img>
            </Link>
        </div>
    );
};

export default ButtonDeleteYear;
