import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swa from "sweetalert2";
import { Link } from "react-router-dom";
const { REACT_APP_PATH } = process.env;
const ButtonDelete = (x) => {
    const { param1 } = useParams();
    const [id, setId] = useState(x.id_date);
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
            if (result.isConfirmed) {
                let data = axios
                    .delete(`${REACT_APP_PATH}/admin/api/DeleteDataDate/${param1}/${id}`)
                    .then((result) => {
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
        <td>
             <Link className="btn" role="button">
            <img
                src="images/delete-button.png"
                alt="Girl in a jacket"
                width="40"
                height="45"
                class="pointer"
                onClick={Delete}
            ></img>
            </Link>
        </td>
    );
};

export default ButtonDelete;
