
import React from "react";

import { LoginForm } from "../../components/LoginForm";
import './index.scss'


export function SignupForm() {
    return (
        <div className="SignupForm">
            <h3>Sign Up</h3>
            <div className="fullName">
                <input className="name" type="text" placeholder="First name" />
                <input className="name" type="text" placeholder="Last name" />
            </div>
            <input className="email" type="text" placeholder="Email address" />
            <p>(Check your Gmail for Passcode)</p>
            <input className="passcode" type="text" placeholder="HJAKA - HFDJK - HDJKS - KIJLM" />
            <p>By signing up you agree to GraFish’s <a href="">Terms of Service</a>
            &nbsp; & &nbsp; <a href="">Privacy Policy</a>. This page is protected by reCAPTCHA and is subjected to  Google’s Team</p>
            <button className="signupButton">Sign Up</button>
        </div>
    )
}