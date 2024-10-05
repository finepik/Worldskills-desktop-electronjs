import React from "react";
import img from "../../../../img_4.png";

const ReadOnlyRow = ({ contact}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.title}</td>
            <td>{contact.direction}</td>
            <td>{contact.points}</td>

        </tr>
    );
};

export default ReadOnlyRow;