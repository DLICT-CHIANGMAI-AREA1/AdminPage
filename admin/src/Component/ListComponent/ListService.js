import React from "react";
import DeleteService from "../ButtonService/DeleteService";
import EditService from "../ButtonService/EditService";
const { REACT_APP_PATH } = process.env;
const ListService = (data) => {
    return (
        <tr>
            <td>
                <a href={`${data.data.url}`}><img src={`${REACT_APP_PATH}/${data.data.image}`} alt="asd" width="100" height="100"></img></a>
            </td>
            <td>
                <p className="center">{data.data.name}</p>
            </td>

            <td>
                {" "}
                <EditService data={data} />
            </td>
            <td>
                <DeleteService data={data} />
            </td>
        </tr>
    );
};

export default ListService;
