import React from "react";
import { Link  } from "react-router-dom";
const ButtonEditLink = (x) => {
   

    return (
        <td>
            <Link className="btn" role="button" to={`/BigData/ListData/Data/${x.id_year}/${x.id}/${x.data._id}`} >
                <button type="button" class="btn btn-success">
                    Edit
                </button>
            </Link>
        </td>
    );
};

export default ButtonEditLink;