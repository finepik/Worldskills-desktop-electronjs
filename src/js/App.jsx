
import React from 'react';
import './App.css';
import AppOrg from "./components/OrgForm/AppOrg.jsx";
import AppExperts from "./components/ExpertForm/AppExperts.jsx";
import AppParticipants from "./components/ParticipantPage/AppParticipants.jsx";
import Login from "./Login.jsx";
import leo from "./img_4.png";
import logo from "./wsht-red.png";

export default function App() {

  return (
     <div>
            <AppOrg/>
             <AppExperts/>
             <AppParticipants/>
        {/* <div style={{ backgroundImage: `url(${leo})`, height: "100vh"}}>
             <header  className='Header'> <img className='logo' src={logo}/>WS App</header>
             <Login/>
         </div>*/}
     </div>
  )
}
