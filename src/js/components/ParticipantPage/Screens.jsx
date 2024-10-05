import React from 'react';
import FirstPage from "./FirstPage/FirstPage.jsx";
import SecondPage from "./SecondPage/SecondPage.jsx";


function Screens(props) {
            switch(props.NavbarObserver){
            case 'FirstPage':
            return <FirstPage/>
            case 'SecondPage':
            return <SecondPage/>
            default: return <FirstPage/>
            }
}

export default Screens;