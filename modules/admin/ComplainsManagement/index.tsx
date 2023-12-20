"use client";
import React from "react";
import { Avatar, Button, DatePicker, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { randomColor } from "@/utils/RandomColor";

const { RangePicker } = DatePicker;

export const ComplainsManagement = () :JSX.Element => {
  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
      render: (text: any) => (
        <Space size="middle">
          <Avatar style={{ backgroundColor: randomColor() }}>{text[0]}</Avatar>
          <a>{text}</a>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Complain Detail",
      key: "action",
      render: (_: any, dataIndex: any) => (
        <>
          <Button>Xem chi tiết</Button>
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "vuvietduy@gmail.com",
      createdAt: "10/10/2023",
    },
    {
      key: "3",
      name: "John Brown",
      email: "vuvietduy@gmail.com",
      createdAt: "10/10/2023",
    },
  ];

  return (
    <div className="complains_management">
      <div className="d_flex justify_content_start mb_4">
        <Input
          className="me_4"
          placeholder="Search"
          size="large"
          prefix={<SearchOutlined />}
          style={{ width: "300px" }}
        />
        <RangePicker size="large" />
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
