'use client'
import { Form, Input, Button } from 'antd'
import React from 'react'

import './index.scss'

export function ChangePassword(props : any) {
  const handleChangePassword = (e : any) => {
    console.log(e);
  };
  const {className} = props;
  return (
    <div className={`change-password-form ${className}`}>
      <h3 className="title">Change Password</h3>
      <Form
        // name='ChangePassword'
        onFinish={handleChangePassword}
      >
        <Form.Item name="currentPassword">
          <label className="label">Current Password</label>
          <Input className="input" name="curPassword"></Input>
        </Form.Item>
        <Form.Item name="newPassword">
          <label className="label">New Password</label>
          <Input className="input" name="newPassword"></Input>
        </Form.Item>
        <Form.Item name="cfNewPassword">
          <label className="label">Confirm New Password</label>
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
