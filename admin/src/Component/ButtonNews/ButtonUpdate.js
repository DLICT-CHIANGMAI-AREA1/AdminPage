import React from "react";
import { Link } from "react-router-dom";
const { REACT_APP_IMGEPATH } = process.env;
const EditNews = (x) => {
    
    return (
        <td>
            <Link className="btn" role="button" to={`/News/${x.data.data._id}`}>
                <img
                    src={`${REACT_APP_IMGEPATH}/images/contract.png`}
                    alt="Girl in a jacket"
                    width="50"
                    height="50"
                    class="pointer"
                ></img>
            </Link>
        </td>
    );
};

export default EditNews;
