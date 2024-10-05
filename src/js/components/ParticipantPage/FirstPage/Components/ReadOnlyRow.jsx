import React from "react";
import img from "../../../../img_4.png";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.title}</td>
            <td>{contact.data_start}</td>
            <td>{contact.data_end}</td>
            <td>{contact.city}</td>

        </tr>
    );
};

export default ReadOnlyRow;