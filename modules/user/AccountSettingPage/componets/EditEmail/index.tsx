'use client'
import React from "react";
import "./index.scss";
import { Button, Form, Input } from "antd";

export function EmailAddress(props : any) {
  const handleChangeEmail = (e : any) => {
    console.log(e);
  };
  const {className} = props;
  return (
    <div className={`change-email-form ${className}`}>
      <h3 className="title">Email Address</h3>
      <Form
        // name='changeEmail'
        onFinish={handleChangeEmail}
      >
        <Form.Item name="currentEmail">
          <label className="label">Current Email</label>
          <Input className="input" name="curEmail"></Input>
        </Form.Item>
        <Form.Item name="newEmail">
          <label className="label">New Email</label>
          <Input className="input" name="newEmail"></Input>
        </Form.Item>
        <Form.Item name="cfNewEmail">
          <label className="label">Confirm code</label>
          <Input className="input" name="confirmCode"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="bg_green text_black">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
