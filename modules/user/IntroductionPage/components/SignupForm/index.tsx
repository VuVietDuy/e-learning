'use client'
import React from "react";

import './index.scss'
import { Button, Form, Input } from "antd";
import { createNewUser } from "@/services/ApiUser";
import { useRouter } from "next/navigation";


export function SignupForm() {
    const router = useRouter();

    function handleSignup(e:any) {
        console.log(e);
        createNewUser(e);
        router.push("/introduction/login")
    }
    return (
        <Form
            onFinish={handleSignup}
        >
            <div className="SignupForm">
                <h3>Sign Up</h3>
                <div className="fullName">
                    <Form.Item  name="firstName">
                        <input className="name" type="text" placeholder="First name" />
                    </Form.Item>
                    <Form.Item name="lastName">
                        <input className="name" type="text" placeholder="Last name" />
                    </Form.Item>
                </div>
                <Form.Item name="email">
                    <Input name="email" className="email" type="text" placeholder="Email address" />
                </Form.Item>
                <p>(Check your Gmail for Passcode)</p>
                <input className="passcode" type="text" placeholder="HJAKA - HFDJK - HDJKS - KIJLM" />
                <p>By signing up you agree to GraFish’s <a href="">Terms of Service</a>
                &nbsp; & &nbsp; <a href="">Privacy Policy</a>. This page is protected by reCAPTCHA and is subjected to  Google’s Team</p>
                <Button htmlType="submit" className="signupButton">Sign Up</Button>
            </div>
        </Form>
    )
}