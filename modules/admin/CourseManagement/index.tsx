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
  Tabs,
  TabsProps,
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
            <Image src={dataIndex.src} width={120} height={72}></Image>
          </div>
          <div>
            <Title level={4}>{dataIndex.title}</Title>
            <span>Added on {dataIndex.publishedAt}</span>
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, dataIndex: any) => (
        <>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "4px",
              backgroundColor:
                dataIndex.status === "Approve" ? "#38a169" : "#f59e0b",
            }}
          ></div>
          <span>{dataIndex.status}</span>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <>
          {record.status === "Approve" ? (
            <>
              <Button style={{ marginRight: "8px" }}>Reject</Button>
              <Button style={{ backgroundColor: "#38a169", color: "#fff" }}>
                Approve
              </Button>
            </>
          ) : (
            <>
              <Button style={{ backgroundColor: "#000", color: "#fff" }}>
                Change status
              </Button>
            </>
          )}
        </>
      ),
    },
    {
      title: "",
      key: "setting",
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

  function dot(status: string) {
    return (
      <>
        <div className={`dot ${status}`}></div>
      </>
    );
  }

  const data = [
    {
      key: "1",
      title: "Ux ui design for beginer",
      src: "/images/card2.png",
      publishedAt: "Jun 23, 2023",
      instructor: "Vu Viet Duy",
      enrolled: 53,
      status: "Approve",
    },
    {
      key: "2",
      title: "Ux ui design for beginer",
      src: "/images/card1.png",
      publishedAt: "Jun 23, 2023",
      instructor: "Vu Viet Duy",
      enrolled: 53,
      status: "Pending",
    },
    {
      key: "3",
      title: "Ux ui design for beginer",
      src: "/images/card.png",
      publishedAt: "Jun 23, 2023",
      instructor: "Vu Viet Duy",
      enrolled: 53,
      status: "Approve",
    },
    {
      key: "4",
      title: "Ux ui design for beginer",
      src: "/images/card2.png",
      publishedAt: "Jun 23, 2023",
      instructor: "Vu Viet Duy",
      enrolled: 53,
      status: "Pending",
    },
    {
      key: "5",
      title: "Ux ui design for beginer",
      src: "/images/card1.png",
      publishedAt: "Jun 23, 2023",
      instructor: "Vu Viet Duy",
      enrolled: 53,
      status: "Pending",
    },
  ];

  // const onSearch = (value, _e, info) => console.log(info?.source, value);

  const items: TabsProps["items"] = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "Approved",
      label: "Approved",
    },
    {
      key: "Pending",
      label: "Pending",
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="All" items={items}></Tabs>
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
            <PlusOutlined /> Add new course
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
