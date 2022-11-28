import React from "react";
import { Link  } from "react-router-dom";
const PeronDetail = (x) => {
    return (
        <div>
            <Link className="btn" role="button" to={`/Person/${x.data.data._id}`} > 
            <img src="images/contract.png" alt="Girl in a jacket" width="50" height="50" class="pointer"></img>
            </Link>
        </div>
    );
};

export default PeronDetail;
