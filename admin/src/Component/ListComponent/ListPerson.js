import React from "react";
import PeronDetail from "../ButtonCRUDPerson/PersonDetail";
import ButtonDeletePerson from "../ButtonCRUDPerson/ButtonDelete";
const ListPerson = (data) => {
    return (
        <tr>
            <td>
                <img src={`http://localhost:5000/${data.data.Profile}`} width="50" height="70"></img>
            </td>
            <td>
                <p>
                    {data.data.First_name}&nbsp;&nbsp;{data.data.Last_name}
                </p>
            </td>
            <td>
                <PeronDetail data={data} />
            </td>
            <td>
                <ButtonDeletePerson data={data} id={data._id} />
            </td>
        </tr>
    );
};

export default ListPerson;
