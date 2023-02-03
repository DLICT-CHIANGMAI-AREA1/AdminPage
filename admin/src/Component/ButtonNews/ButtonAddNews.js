import React, { useState } from "react";
import { Link  } from "react-router-dom";
const ButtonAddNews = () => {
   
    return (
        <div className="CreateDataButton">
            <Link className="btn" role="button" to={`/News/AddNews`}>
            <button type="button" className="btn btn-success" >
                + Add News
            </button>
            </Link>
        </div>
    );
};

export default ButtonAddNews;
