"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form, Input, notification } from "antd";

import "./index.scss";
import { checkExistUser } from "@/services/ApiUser";

export function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: any) => {
    checkExistUser(e.username, e.password).then((res) => {
      console.log(res);
      if (res) {
        if (res.roleName === "user") {
          router.push("/user/home");
        } else if (res.roleName === "instructor") {
          router.push("/instructor/home");
        } else if (res.roleName === "admin") {
          router.push("/admin/course_management");
        }
        notification.success({
          message: "Login successfully"
        })
      } else {
        notification.error({
          message: "Login failed"
        })
      }
    });
  };
  return (
    <div className="LoginForm">
      <h4>Login</h4>

      <Form onFinish={handleLogin}>
        <div>
          <Form.Item name={"username"}>
            <Input
              className="signin-box signin-input"
              type="text"
              placeholder="Email address/ User name"
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input
              className="signin-box signin-input"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button htmlType="submit" className="signin-box signin-button">
            <strong>Sign in</strong>
          </Button>
        </Form.Item>
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
          <Link href="/introduction/signup">
            <strong>Sign up</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
