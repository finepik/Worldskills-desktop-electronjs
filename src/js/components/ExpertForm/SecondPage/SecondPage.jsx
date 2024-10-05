
import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
// import "../../App.css";
import './SecondPage.scss'
import ReadOnlyRow from "./Components/ReadOnlyRow.jsx";
import img from '../../../img_4.png'
// import './../../index.scss'

const SecondPage = () => {
    const data = [

        {
            id: 1,
            name: 'Antipov A.A.',
            title: 'WorldSkills Abu Dhabi 2017',
            direction: 'Mobile development',
            points:'50'
        },
        {
            id: 2,
            name: 'Supchikov S.V.',
            title: 'WorldSkills Abu Dhabi 2017',
            direction: 'WEB development',
            points:'46'

        },
        {
            id: 3,
            name: 'Subzero V.B.',
            title: 'WorldSkills Abu Dhabi 2017',
            direction: 'WEB development',
            points:'51'

        },
        {
            id: 4,
            name: 'Velenov A.B.',
            title: 'WorldSkills Abu Dhabi 2017',
            direction: 'WEB development',
            points:'36'
        },
        {
            id: 5,
            name: 'Linchuk D.S.',
            title: 'WorldSkills Abu Dhabi 2017',
            direction: 'Mobile development',
            points:'51'
        }


    ]

    const [contacts, setContacts] = useState(data);

    return (
        <div >
            <form>
                <table>
                    <thead>
                    <tr className='header'>
                        <th>NAME </th>
                        <th>NAME OF TOURNAMENT</th>
                        <th>DIRECTION</th>
                        <th>POINTS</th>
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

export default SecondPage;