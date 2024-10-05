
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
import './ThirdPage.scss'
//import EditableRow from "./Components/EditableRow.jsx";
import ReadOnlyRowThird from "./ReadOnlyRowThird.jsx";
import img from '../../../img_4.png'
// import './../../index.scss'

const ThirdPage = () => {
    const data = [
        {
            id: 1,
            name: 'Antipov A.A.',
            direction: 'Mobile development',
            role: 'Expert'
        },
        {
            id: 2,
            name: 'Supchikov S.V.',
            direction: 'WEB development',
            role: 'Participant'
        },
        {
            id: 3,
            name: 'Subzero V.B.',
            direction: 'Mobile development',
            role: 'Main expert'
        }

    ]

    const [addFormData, setAddFormData] = useState({
        name: '',
        direction: '',
        role: ''
    });
    const [contacts, setContacts] = useState(data);


    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };



    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            name: addFormData.name,
            direction: addFormData.direction,
            role: addFormData.role
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };


    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className='table-container'>
            <form >
                <table>
                    <thead>
                    <tr className='header'>
                        <th>NAME </th>
                        <th>DIRECTION</th>
                        <th>ROLE</th>
                        <th>ACTIONS</th>

                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                            <ReadOnlyRowThird
                                contact={contact}
                                handleDeleteClick={handleDeleteClick}
                            />


                    ))}
                    </tbody>
                </table>
            </form>

            <h2 style={{
                color: '#BD2A4E',
                fontFamily: 'Papyrus',
                fontWeight: 'bold'}}>ADD &nbsp; PARTICIPANT</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter name..."
                    onChange={handleAddFormChange}
                />
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="direction"
                    required="required"
                    placeholder="Enter direction..."
                    onChange={handleAddFormChange}
                />
                <input style={{backgroundColor: '#202932'}}
                    type="text"
                    name="role"
                    required="required"
                    placeholder="Enter date..."
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

export default ThirdPage;