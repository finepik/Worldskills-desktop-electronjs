import React, { useRef, useState, useEffect, useContext } from 'react';

import './Login.css'
import img from "./img_4.png";
const LOGIN_URL = '/auth';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    return (
        <div className="section is-fullheight" style={{width: "100%"}}>
            <div className="container" style={{width: "100%"}}>
                <div style={{width: "100%"}}>
                    <div className="box"
                         style={{
                             color: "#fff",
                             margin: "0px auto",
                             maxWidth: "400px"
                    }}>
                        <h1 style={{fontFamily: 'Papyrus'}}>Login</h1>
                        <form onSubmit={handleSubmit} noValidate
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "0px auto"
                            }}
                        >
                            <div className="field">
                                <label className="label" style={{fontFamily: 'Papyrus', marginBottom: '10px'}}>Email Address</label>
                                <div className="control">
                                    <input
                                        style={{backgroundColor: '#202932', }}
                                        autoComplete="off"
                                        className={`input`}
                                        type="email"
                                        name="email"
                                        value={""}
                                        placeholder="Enter Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" style={{fontFamily: 'Papyrus',}}>Password</label>
                                <div className="control">
                                    <input
                                        style={{backgroundColor: '#202932'}}
                                        autoComplete="off"
                                        className={`input`}
                                        type="email"
                                        name="email"
                                        placeholder="Enter Password"
                                        value={""}
                                        required
                                    />
                                </div>
                            </div>
                            <button style={{
                                marginTop: "20px",
                                backgroundImage: `url(${img})`,
                                border: "2px solid #fff",
                                borderRadius:'20%',color: '#fff',
                                fontFamily: 'Papyrus',
                                fontWeight: 'bold'}} type="button">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
