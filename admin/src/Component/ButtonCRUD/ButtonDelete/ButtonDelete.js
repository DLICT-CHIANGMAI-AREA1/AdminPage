import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swa from "sweetalert2";
const { REACT_APP_PATH, REACT_APP_IMGEPATH } = process.env;
const ButtonDelete = (x) => {
    const { param1, param2, param3 } = useParams();
    const [id, setId] = useState(x.data._id);

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
                    .delete(`${REACT_APP_PATH}/admin/api/DeleteData/${param1}/${param2}/${param3}/${id}`)
                    .then((result) => {
                        console.log(result.data);
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
        <td class="col-md-10">
            <img
                style={{ marginTop: "11px" }}
                src={`${REACT_APP_IMGEPATH}/images/delete-button.png`}
                alt="Girl in a jacket"
                width="40"
                height="45"
                class="pointer"
                onClick={Delete}
            ></img>
        </td>
    );
};

export default ButtonDelete;
