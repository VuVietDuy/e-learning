'use client'
import React from "react";

import "./index.scss";
import Link from "next/link";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter()
  const handleLogin = (e : any) => {
    console.log(e);
    if(e.username==="user") {
      router.push("/user/home")
    } else if(e.username==="instructor") {
      router.push("/instructor/home")
    } else if(e.username==="admin") {
      router.push("/admin/course_management")
    }
  }
  return (
    <div className="LoginForm">
      <h4>Login</h4>

      <Form
      onFinish={handleLogin}
      >
        <div className="singin-infor">
          <Form.Item name={"username"}>
            <input
              className="signin-box signin-input"
              type="text"
              placeholder="Email address/ User name"
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <input
              className="signin-box signin-input"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>

        <Button htmlType="submit" className="signin-box signin-button">
          <strong>Sign in</strong>
        </Button>
      </Form>
      <div>
        or{" "}
        <a href="/">
          <strong>Forgot Password</strong>
        </a>
      </div>
      <div>
        <div className="line">
          <br />
        </div>
        <div>
          Don't have an account ?{" "}
          <Link href="/signup">
            <strong>Sign up</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
