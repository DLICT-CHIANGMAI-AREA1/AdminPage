import React from "react";
import ButtonDelete from "../Component/ButtonCRUD/ButtonDelete/ButtonDelete";
import ButtonEdit from "../Component/ButtonCRUD/ButtonEdit/ButtonEditData";
import ButtonSeeFullImage from "../Component/ButtonCRUD/ButtonImage";

const Posts = (data) => {
    
    return (
        <tbody>
            {data.data.map((x, index) => (
                <tr>
                    <td class="col-md-10">
                        <p>
                            <a href={x.url} target="_blank" rel="noreferrer">
                                {x.name}
                            </a>
                        </p>
                    </td>
                    <td>
                        <ButtonSeeFullImage data={x} />
                    </td>
                    <td>
                        <ButtonEdit data={x} id_year={data.param1} id_data={data.param2} id_date={data.param3} />
                    </td>
                    <td>
                        <ButtonDelete data={x} />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default Posts;
