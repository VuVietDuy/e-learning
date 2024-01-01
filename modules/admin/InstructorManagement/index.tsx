"use client";
import React from "react";
import { Avatar, Button, DatePicker, Input, Space, Table, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  PlusOutlined,
  SearchOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./style.scss";
import { randomColor } from "@/utils/RandomColor";
import { ColumnsType } from "antd/es/table";

const { RangePicker } = DatePicker;

interface DataType {
  key: string;
  name: string;
  topic: string[];
  course: string;
  email: string;
  joined: string;
  rating: number;
}

export function InstructorManagement(): JSX.Element {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
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
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
      render: (_: any, dataIndex: any) => (
        <>
          {dataIndex.topic.map((item: string) => (
            <Tag color={`${randomColor()}`}>{item}</Tag>
          ))}
        </>
      ),
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Joined",
      dataIndex: "joined",
      key: "joined",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (_: any, record: any) => (
        <>
          {record.rating} <StarFilled color="rgb(255, 191, 0)" />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>
            <MailOutlined />
          </a>
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      topic: ["Ilustrator", "Photoshop", "UX UI"],
      course: "32 Course",
      email: "tuanlinh@gmail.com",
      joined: "7 July, 2020",
      rating: 4,
    },
    {
      key: "2",
      name: "John Brown",
      topic: ["Ilustrator", "Photoshop", "UX UI"],
      course: "32 Course",
      email: "tuanlinh@gmail.com",
      joined: "7 July, 2020",
      rating: 4,
    },
    {
      key: "3",
      name: "John Brown",
      topic: ["Ilustrator", "Photoshop", "UX UI"],
      course: "32 Course",
      email: "tuanlinh@gmail.com",
      joined: "7 July, 2020",
      rating: 4,
    },
  ];

  return (
    <div className="instructor_management">
      <div className="d_flex justify_content_between mb_4">
        <div>
          <Input
            className="me_4"
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: "300px" }}
          />
          <RangePicker />
        </div>
        <div>
          <Button type="primary">
            <PlusOutlined /> Add new instroctor
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
