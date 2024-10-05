import React from "react";
import img from "../../../../img_4.png";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.title}</td>
            <td>{contact.data_start}</td>
            <td>{contact.data_end}</td>
            <td>{contact.city}</td>
            <td>
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}}
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}>
                    EDIT
                </button>
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

export default ReadOnlyRow;