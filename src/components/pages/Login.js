import React, { useEffect, useState } from 'react';

import Wave from '../../assets/img/wave.png'
import Img from '../../assets/img/img.svg'
import Avatar from '../../assets/img/avatar.svg'

import { FaUser, FaLock } from 'react-icons/fa';

function Login() {

    return (
        <div>
            <img className="wave" src={Wave} alt="" />
            <div className="container">
                <div className="img">
                    <img src={Img} alt="" />
                </div>
                <div className="login-container">
                    <form action="/home">
                        <img className="avatar" src={Avatar} alt="" />
                        <h2>Welcome</h2>
                        <div className="input-div one focus">
                            <div className="i"><FaUser className="fa" /></div>
                            <div>
                                <h5>Username</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>

                        <div className="input-div two focus">
                            <div className="i"><FaLock className="fa" /></div>
                            <div>
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;