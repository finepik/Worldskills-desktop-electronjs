import React from 'react';
import FirstPage from "./FirstPage/FirstPage.jsx";
import SecondPage from "./SecondPage/SecondPage.jsx";
import ThirdPage from "./ThirdPage/ThirdPage.jsx";


function Screens(props) {
            switch(props.NavbarObserver){
            case 'FirstPage':
            return <FirstPage/>
            case 'SecondPage':
            return <SecondPage/>
            case 'ThirdPage':
            return <ThirdPage/>
            default: return <FirstPage/>
            }
}

export default Screens;