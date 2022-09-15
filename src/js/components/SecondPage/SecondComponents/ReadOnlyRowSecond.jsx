import React from "react";
import img from "../../../img_4.png";

const ReadOnlyRowSecond = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.title}</td>
            <td>{contact.fullName}</td>
            <td>{contact.roleOfExpert}</td>
            <td>{contact.description}</td>
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

export default ReadOnlyRowSecond;