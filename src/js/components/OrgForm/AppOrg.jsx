import React from 'react';
import leo from '../../img_4.png'
import logo from '../../wsht-red.png'
import Navbar from "./Navbar.jsx";
import Screens from "./Screens.jsx";

export default function AppOrg() {
    const[NavbarObserver, setNavbarObserver]=React.useState('FirstPage')
    function NavbarClick(currentPage){
        setNavbarObserver(currentPage)
    }
    return (
        <div style={{ backgroundImage: `url(${leo})`}} className='App'>
            <header  className='Header'> <img className='logo' src={logo}/>FUCKING APP</header>
            <Navbar  NavbarClick={NavbarClick}/>
            <div  className='Screen'><Screens  NavbarObserver={NavbarObserver}/></div>

        </div>
    )
}