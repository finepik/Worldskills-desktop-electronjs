import React from "react";
import img from "../../../../img_4.png";

const ReadOnlyRow = ({ contact,  handleReadClick }) => {
    return (
        <tr>
            <td>{contact.protocolName}</td>
            <td><a href={contact.link} target='_blank' style={{color: '#fff'}}>View protocoL</a></td>

            <td>
                {contact.isRead===true?
                <button style={{
                    backgroundImage: `url(${img})`,
                    borderRadius:'20%',color: '#BD2A4E',
                    fontFamily: 'Papyrus',
                    fontWeight: 'bold'}} type="button" onClick={() => handleReadClick(contact.id)}>
                    SUBSCRIBE
                </button>:
                    <button style={{
                        backgroundImage: `url(${img})`,
                        borderRadius:'20%',color: '#BD2A4E',
                        fontFamily: 'Papyrus',
                        fontWeight: 'bold'}} type="button" >
                        SUBSCRIBED
                    </button>}
            </td>
        </tr>
    );
};

export default ReadOnlyRow;