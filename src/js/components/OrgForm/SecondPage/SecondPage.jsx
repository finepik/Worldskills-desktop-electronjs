
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
// import "../../App.css";
import './SecondPage.scss'
import img from '../../../img_4.png'
import ReadOnlyRowSecond from "./SecondComponents/ReadOnlyRowSecond.jsx";
import EditableRowSecond from "./SecondComponents/EditableRowSecond.jsx";
// import './../../index.scss'

const SecondPage = () => {
    const data = [
        {
            id: 1,
            title: ' WorldSkills Abu Dhabi 2017',
            fullName: 'Antipov A.A.',
            roleOfExpert: 'Expert',
            description: 'Something about expert'
        },
        {
            id: 2,
            title: 'WorldSkills Abu Dhabi 2017',
            fullName: 'Subzero V.B.',
            roleOfExpert: 'Main expert',
            description: 'Something about main expert'
        }

    ]
    const [contacts, setContacts] = useState(data);
    const fullNamesCombo=['Dueta A.B','Filipko B.D.','Hiamaranda N.L.']
    const rolesCombo=['Main Expert','Expert','Tech Expert']

    const [addFormData, setAddFormData] = useState({
        title: "",
        fullName: "",
        roleOfExpert: "",
        description: "",
    });

    const [editFormData, setEditFormData] = useState({
        title: "",
        fullName: "",
        roleOfExpert: "",
        description: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            title: addFormData.title,
            fullName: addFormData.fullName,
            roleOfExpert: addFormData.roleOfExpert,
            description: addFormData.description,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            title: editFormData.title,
            fullName: editFormData.fullName,
            roleOfExpert: editFormData.roleOfExpert,
            description: editFormData.description,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            title: contact.title,
            fullName: contact.fullName,
            roleOfExpert: contact.roleOfExpert,
            description: contact.description,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className='table-container'>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                    <tr className='header'>
                        <th>NAME OF TOURNAMENT</th>
                        <th>FULL NAME</th>
                        <th>ROLE OF EXPERT</th>
                        <th>DESCRIPTION</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <Fragment>
                            {editContactId === contact.id ? (
                                <EditableRowSecond
                                    editFormData={editFormData}
                                    addFormData={addFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                    rolesCombo={rolesCombo}
                                    fullNamesCombo={fullNamesCombo}
                                />
                            ) : (
                                <ReadOnlyRowSecond
                                    contact={contact}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            )}
                        </Fragment>
                    ))}
                    </tbody>
                </table>
            </form>

            <h2 style={{
                color: '#BD2A4E',
                fontFamily: 'Papyrus',
                fontWeight: 'bold'}}>ADD &nbsp; EXPERT</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input style={{
                    backgroundColor: '#202932',
                    color: '#BD2A4E',
                    fontWeight: 'bold'}}
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter name..."
                    onChange={handleAddFormChange}
                />
                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='fullName'
                    onChange={handleAddFormChange}
                    value={addFormData.fullName}

                >
                    {fullNamesCombo.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>
                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='roleOfExpert'
                    onChange={handleAddFormChange}
                    value={addFormData.roleOfExpert}

                >
                    {rolesCombo.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>


                <input style={{
                    backgroundColor: '#202932',
                    color: '#BD2A4E',
                    fontWeight: 'bold'}}
                    type="text"
                    name="description"
                    required="required"
                    placeholder="Enter description..."
                    onChange={handleAddFormChange}
                />
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}} type="submit">ADD</button>
            </form>
        </div>
    );
};

export default SecondPage;