
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
// import "../../App.css";
import './FirstPage.scss'
import ReadOnlyRow from "./Components/ReadOnlyRow.jsx";
import img from '../../../img_4.png'
// import './../../index.scss'

const FirstPage = () => {
    const data = [
        {
            id: 1,
            title: 'WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Abu Dhabi'
        },
        {
            id: 2,
            title: 'WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Abu Dhabi'
        },
        {
            id: 3,
            title: 'WorldSkills Abu Dhabi 2017',
            data_start: '2017-11-14',
            data_end: '2017-11-19',
            city: 'Abu Dhabi'
        }

    ]

    const [contacts, setContacts] = useState(data);


    return (
        <div >
            <form>
                <table>
                    <thead>
                    <tr className='header'>
                        <th>NAME OF TOURNAMENT</th>
                        <th>START</th>
                        <th>END</th>
                        <th>CITY</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <Fragment key={contact.id}>

                                <ReadOnlyRow
                                    contact={contact}

                                />

                        </Fragment>
                    ))}
                    </tbody>
                </table>
            </form>



        </div>
    );
};

export default FirstPage;