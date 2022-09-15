import React from 'react';

function Navbar(props) {
    return (
        <div className='Navbar'>
            <div onClick={()=>{props.NavbarClick('FirstPage')}}>TOURNAMENTS</div>
            <div onClick={()=>{props.NavbarClick('SecondPage')}}>EXPERTS</div>
            <div>PARTICIPANTS</div>
            <div>DOCUMENTS</div>
        </div>
    );
}

export default Navbar;