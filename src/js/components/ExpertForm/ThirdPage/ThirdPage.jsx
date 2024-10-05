
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
// import "../../App.css";
import ReadOnlyRow from "./Components/ReadOnlyRow.jsx";
import img from '../../../img_4.png'
// import './../../index.scss'

const ThirdPage = () => {
    const data = [
        {
            id: 1,
            protocolName:'Registration of experts',
            link:'https://worldskills.ru/assets/docs//4977/19.11.2021_19.11.2021-4_Urazov%20R.N._Ivanyuk%20L.A.pdf',
            isRead:true
        },
        {
            id: 2,
            protocolName:'Introduction to safety',
            link:'https://worldskills.ru/assets/docs//4977/02.04.2021%20_%2002%20.04.2021-3.pdf',
            isRead:true
        },
        {
            id: 3,
            protocolName:'Introduction to safety',
            link:'https://worldskills.ru/assets/docs//4977/19.04.2022_19.04.2022-1.pdf',
            isRead:true
        }


    ]

    const [contacts, setContacts] = useState(data);


    const handleReadClick = (contactId) => {
        const newContacts = [...contacts];

        const ind = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.map((c,index) =>{if(ind==index){ c.isRead=false}});

        setContacts(newContacts);
    };




    return (
        <div >
            <form >
                <table>
                    <thead >
                    <tr>
                        <th>PROTOCOL</th>
                        <th>LINK</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <Fragment key={contact.id}>


                                <ReadOnlyRow
                                    contact={contact}
                                    handleReadClick={handleReadClick}
                                />

                        </Fragment>
                    ))}
                    </tbody>
                </table>
            </form>


        </div>
    );
};

export default ThirdPage;