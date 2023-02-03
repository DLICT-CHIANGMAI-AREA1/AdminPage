import React from "react";
import EditNews from "../ButtonNews/ButtonUpdate";
import ButtonDeleteNews from "../ButtonNews/ButtonDelete";
const { REACT_APP_PATH } = process.env;
const ListNews = (data) => {

    return (
        <tr>
            <td>
                <p className="font-weight-bold">{data.data.Headline}</p>
                <footer className="blockquote-footer">{data.data.DateTime}</footer>
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
