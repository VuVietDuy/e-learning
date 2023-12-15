"use client";
import React from "react";
import "./index.scss";
import { Button, Form, Input, Select } from "antd";

export function Language(props : any) {
  const handleFinsh = (e: any) => {
    console.log(e);
  };
  const {className} = props;
  const regions = [
    { value: "Asian", label: "Asian" },
    { value: "African", label: "African" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Americas", label: "Americas" },
  ]
  const countries = [
    { value: "Viet Nam", label: "Vietnamese" },
    { value: "England", label: "England" },
    { value: "USA", label: "USA" },
  ];
  return (
    <div className={`change-language-form ${className}`}>
      <h3 className="title">Language</h3>
      <Form
        // name='changeEmail'
        onFinish={handleFinsh}
      >
        <Form.Item name="region">
          <label className="label">Region</label>
          <Select
            defaultValue="Asian"
            size="large"
            options={regions}
          />
        </Form.Item>
        <Form.Item name="country">
          <label className="label">Country</label>
          <Select
            defaultValue="Viet Nam"
            size="large"
            options={countries}
          />
        </Form.Item>
        <Form.Item name="language">
            <label className="label">Language</label>
            <Select
                defaultValue="Vietnamese"
                size="large"
                options={countries}
            />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="bg_green text_black"
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
