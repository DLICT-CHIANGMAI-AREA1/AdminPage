import React, { useState } from "react";
import axios from "axios";
import Swa from "sweetalert2";
import {toast} from "react-toastify";

const ButtonDeleteYear = (x) => {
    const [id, setId] = useState(x.id);
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
                let data = axios
                    .delete(`http://localhost:5000/admin/api/DeleteDataYear/${id}`)
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
        <div>
            <button type="button" class="btn btn-danger rounded-pill m-3" onClick={DeleteRecord}>
                Delete Record
            </button>
        </div>
    );
};

export default ButtonDeleteYear;
