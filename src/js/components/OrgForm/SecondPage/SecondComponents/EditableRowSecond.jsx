import React from "react";
import img from "../../../../img_4.png";

const EditableRowSecond = ({
                         editFormData,
                         handleEditFormChange,
                         handleCancelClick,
                               rolesCombo,
                               fullNamesCombo
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
                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='fullName'
                    onChange={handleEditFormChange}
                    value={editFormData.fullName}

                >
                    {fullNamesCombo.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>
            </td>
            <td>

                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='roleOfExpert'
                    onChange={handleEditFormChange}
                    value={editFormData.roleOfExpert}

                >
                    {rolesCombo.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>
            </td>
            <td>
                <input
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        fontWeight: 'bold'}}
                    type="text"
                    required="required"
                    placeholder="Enter description..."
                    name="description"
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