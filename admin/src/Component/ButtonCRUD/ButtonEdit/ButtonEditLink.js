import React from "react";
import { Link  } from "react-router-dom";
const ButtonEdit = (x) => {
    return (
        <div>
            <Link className="btn" role="button" to={`/BigData/ListData/${x.data._id}`} >
                <button type="button" class="btn btn-success ">
                    Edit
                </button>
            </Link>
        </div>
    );
};

export default ButtonEdit;
