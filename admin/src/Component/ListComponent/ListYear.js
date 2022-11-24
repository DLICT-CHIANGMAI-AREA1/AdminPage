import React from "react";
import ButtonEditLink from "../ButtonCRUD/ButtonEdit/ButtonEditLink";
import ButtonDeleteYear from "../ButtonCRUD/ButtonDelete/ButtonDeleteYear";

function ListYear({ data }) {
    return (
        <tr>
            <td>
                <p>{data.name_year}</p>
            </td>
            <td> 
                <ButtonEditLink data={data} />  
            </td>
            <td>
                <ButtonDeleteYear data={data} id={data._id} />
            </td>
        </tr>
    );
}


export default ListYear;


