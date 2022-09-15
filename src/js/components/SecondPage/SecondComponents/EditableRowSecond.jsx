import React from "react";
import img from "../../../img_4.png";

const EditableRowSecond = ({
                         editFormData,
                         handleEditFormChange,
                         handleCancelClick,
                     }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an address..."
                    name="data_start"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="data_end"
                    value={editFormData.roleOfExpert}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an email..."
                    name="city"
                    value={editFormData.description}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}}
                        type="submit">
                    SAVE
                </button>
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}}
                        type="button" onClick={handleCancelClick}>
                    CANCEL
                </button>
            </td>
        </tr>
    );
};

export default EditableRowSecond;