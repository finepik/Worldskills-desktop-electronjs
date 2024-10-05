import React from 'react';

function Navbar(props) {
    return (
        <div className='Navbar'>
            <div onClick={()=>{props.NavbarClick('FirstPage')}}>TOURNAMENTS</div>
            <div onClick={()=>{props.NavbarClick('SecondPage')}}>PROTOCOLS</div>

        </div>
    );
}

export default Navbar;