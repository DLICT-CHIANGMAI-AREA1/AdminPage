import React from "react";
import { Link } from "react-router-dom";
const ButtonEditLink = (x) => {
    return (
        <td>
            <Link className="btn" role="button" to={`/BigData/ListData/Data/${x.id_year}/${x.id}/${x.data._id}`}>
                <img src="images/contract.png" alt="Girl in a jacket" width="50" height="50" class="pointer"></img>
            </Link>
        </td>
    );
};

export default ButtonEditLink;
