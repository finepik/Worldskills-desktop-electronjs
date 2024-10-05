import React from 'react';

function Navbar(props) {
    return (
        <div className='Navbar'>
            <div onClick={()=>{props.NavbarClick('FirstPage')}}>TOURNAMENTS</div>
            <div onClick={()=>{props.NavbarClick('SecondPage')}}>EXPERTS</div>
            <div onClick={()=>{props.NavbarClick('ThirdPage')}}>PARTICIPANTS</div>
            <div onClick={()=>{props.NavbarClick('FourthPage')}}>DOCUMENTS</div>
        </div>
    );
}

export default Navbar;