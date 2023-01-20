import React from "react";
import ButtonDelete from "../Component/ButtonCRUD/ButtonDelete/ButtonDelete";
import ButtonEdit from "../Component/ButtonCRUD/ButtonEdit/ButtonEditData";

const Posts = (data) => {
    console.log(data.data)
    return (
        <tbody>
            {data.data.map((x, index) => (
                <tr>
                    <td class="col-md-10">
                        <p>{x.name}</p>
                    </td>
                    <td class="col-md-10">
                        <p>
                            <a href={x.url} target="_blank" rel="noreferrer">
                                Data
                            </a>
                        </p>
                    </td>{" "}
                    <td class="col-md-10">
                        <p>
                            <a href={x.csv_url} target="_blank" rel="noreferrer">
                               CSV
                            </a>
                        </p>
                    </td>{" "}
                    <td class="col-md-10">
                        <p>
                            <a href={x.pdf.url} target="_blank" rel="noreferrer">
                               PDF
                            </a>
                        </p>
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
