
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
// import "../../App.css";
import './FirstPage.scss'
import EditableRow from "./Components/EditableRow.jsx";
import ReadOnlyRow from "./Components/ReadOnlyRow.jsx";
import img from './../../img_4.png'
// import './../../index.scss'

const FirstPage = () => {
    console.log("hi.stack.imgur.com/srGLq")
    const data = [
        {
            id: 1,
            title: 'Мировой чемпионат по профессиональному мастерству WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Абу-Даби'
        },
        {
            id: 2,
            title: 'Мировой чемпионат по профессиональному мастерству WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Абу-Даби'
        },
        {
            id: 3,
            title: 'Мировой чемпионат по профессиональному мастерству WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Абу-Даби'
        }

    ]

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        title: "",
        data_start: "",
        data_end: "",
        city: "",
    });

    const [editFormData, setEditFormData] = useState({
        title: "",
        data_start: "",
        data_end: "",
        city: "",
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
            data_start: addFormData.data_start,
            data_end: addFormData.data_end,
            city: addFormData.city,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            title: editFormData.title,
            data_start: editFormData.data_start,
            data_end: editFormData.data_end,
            city: editFormData.city,
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
            data_start: contact.data_start,
            data_end: contact.data_end,
            city: contact.city,
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
                        <th>START</th>
                        <th>END</th>
                        <th>CITY</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <Fragment key={contact.id}>
                            {editContactId === contact.id ? (
                                <EditableRow
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                            ) : (
                                <ReadOnlyRow
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

            <h2>Добавление турнира</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter name..."
                    onChange={handleAddFormChange}
                />
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="data_start"
                    required="required"
                    placeholder="Enter date..."
                    onChange={handleAddFormChange}
                />
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="data_end"
                    required="required"
                    placeholder="Enter date..."
                    onChange={handleAddFormChange}
                />
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="city"
                    required="required"
                    placeholder="Enter city..."
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

export default FirstPage;