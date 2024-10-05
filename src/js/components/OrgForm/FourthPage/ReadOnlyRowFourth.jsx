import React from "react";
import img from "../../../img_4.png";

const ReadOnlyRowFourth = ({ contact, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.protocolName}</td>
            <td>{contact.role}</td>
            <td>
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}} type="button" onClick={() => handleDeleteClick(contact.id)}>
                    DELETE
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRowFourth;