
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
import './FourthPage.scss'
//import EditableRow from "./Components/EditableRow.jsx";
import img from '../../../img_4.png'
import ReadOnlyRowFourth from "./ReadOnlyRowFourth.jsx";
// import './../../index.scss'

const FourthPage = () => {
    const data = [
        {
            id: 1,
            protocolName:'Registration of experts',
            role:'Experts'
        },
        {
            id: 2,
            protocolName:'Introduction to safety',
            role:'Participants'
        },
        {
            id: 3,
            protocolName:'Introduction to safety',
            role:'Experts'
        }
    ]
    const roles=['Experts','Participants','All']
    const protocols=['Registration of experts','Introduction to safety','Summarizing']
    const [addFormData, setAddFormData] = useState({
        protocolName:'',
        role:''
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
            protocolName: addFormData.protocolName,
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
                        <th>PROTOCOL</th>
                        <th>RECIPIENT</th>
                        <th>ACTIONS</th>

                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                            <ReadOnlyRowFourth
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
                fontWeight: 'bold'}}>ADD &nbsp; PROTOCOL</h2>
            <form onSubmit={handleAddFormSubmit}>
                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='protocolName'
                    onChange={handleAddFormChange}
                    value={addFormData.protocolName}

                >
                    {protocols.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>
                <select
                    style={{
                        backgroundColor: '#202932',
                        color: '#BD2A4E',
                        borderRadius:'5%',
                        border: '.5px solid white',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}}
                    name='role'
                    onChange={handleAddFormChange}
                    value={addFormData.role}

                >
                    {roles.map((t,index) => <option key={index} value={t}>{t}</option>)}
                </select>
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}} type="submit">ADD</button>
            </form>
        </div>
    );
};

export default FourthPage;