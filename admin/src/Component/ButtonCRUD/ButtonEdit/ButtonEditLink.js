import React from "react";
import { Link  } from "react-router-dom";
const ButtonEdit = (x) => {
    return (
        <div>
            <Link className="btn" role="button" to={`/BigData/ListData/${x.data._id}`} > 
            <img src="images/contract.png" alt="Girl in a jacket" width="50" height="50" class="pointer"></img>
            </Link>
        </div>
    );
};

export default ButtonEdit;
