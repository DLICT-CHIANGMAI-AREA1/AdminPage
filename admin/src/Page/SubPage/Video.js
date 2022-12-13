import React from "react";
import ReactPlayer from "react-player/youtube";
import iconDelete from "../../../src/assets/img/close.png";
import Swa from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
const { REACT_APP_PATH } = process.env;

const Video = (data) => {
    const id = data.data._id
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
    const Delete = async () => {
        Swa.fire({
            title: "ต้องการนำวิดิโอนี้ออกหรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${REACT_APP_PATH}/admin/api/DeleteVideo/${id}`).then((result) => {
                    notifySucceed();
                    setTimeout(Reload, 2000);
                });
            }
        });
    };

    return (
        <div class="col-sm-4 p-1">
            <div class="card ">
                <div class="card-header d-flex justify-content-end ">
                    <img className="close_img_size" alt="video" src={iconDelete} onClick={Delete}></img>
                </div>
                <div class="card-body">
                    <ReactPlayer controls className="react-player" url={data.data.url} width="auto" height="200px" />
                </div>
            </div>
        </div>
    );
};

export default Video;
