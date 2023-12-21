"use client";
import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Image,
  Input,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import "./style.scss";

const { RangePicker } = DatePicker;
const { Title } = Typography;

export const CourseManagement = (): JSX.Element => {
  const columns = [
    {
      title: "Courses",
      dataIndex: "name",
      key: "name",
      render: (_: any, dataIndex: any) => (
        <div className="title_course">
          <div className="thumnail">
            <Image src="/images/card2.png" width={120} height={72}></Image>
          </div>
          <div>
            <Title level={5}>{dataIndex.title}</Title>
          </div>
        </div>
      ),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Enrolled",
      dataIndex: "enrolled",
      key: "enrolled",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
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
      title: "Ux ui design for beginer",
      instructor: "Vu Viet Duy",
      enrolled: 53,
    },
    {
      key: "2",
      title: "Ux ui design for beginer",
      instructor: "Vu Viet Duy",
      enrolled: 53,
    },
    {
      key: "3",
      title: "Ux ui design for beginer",
      instructor: "Vu Viet Duy",
      enrolled: 53,
    },
  ];

  // const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <div className="d_flex justify_content_between mb_4">
        <div>
          <Input
            className="me_4"
            placeholder="Search"
            size="large"
            prefix={<SearchOutlined />}
            style={{ width: "300px" }}
          />
          <RangePicker size="large" />
        </div>
        <div>
          <Button type="primary" size="large">
            <PlusOutlined /> Add new course
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
