import React from "react";
import EditNews from "../ButtonNews/ButtonUpdate";
import ButtonDeleteNews from "../ButtonNews/ButtonDelete";
const { REACT_APP_PATH } = process.env;
const ListNews = (data) => {

    return (
        <tr>
            <td>
                <p class="font-weight-bold">{data.data.Headline}</p>
                <footer class="blockquote-footer">{data.data.DateTime}</footer>
            </td>
            <td>
                <EditNews data={data}/>
            </td>
            <td>
                <ButtonDeleteNews data={data}/>
            </td>
        </tr>
    );
};

export default ListNews;
