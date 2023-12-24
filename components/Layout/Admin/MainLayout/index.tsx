"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AreaChartOutlined,
  BookOutlined,
  ExceptionOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, Select } from "antd";
import { randomColor } from "@/utils/RandomColor";

const { Sider, Header, Content } = Layout;

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Setting
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Log out
      </a>
    ),
  },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState("Courses Management");
  // const {
  //     token: { colorBgContainer },
  // } = theme.useToken();

  // const collapsed = true;
  const open = () => {
    setCollapsed(true);
  };

  const close = () => {
    setCollapsed(false);
  };

  const listRouter = [
    {
      key: 1,
      path: "/admin/course_management",
      icon: <BookOutlined />,
      title: "Courses Management",
    },
    {
      key: 2,
      path: "/admin/student_management",
      icon: <TeamOutlined />,
      title: "Students Management",
    },
    {
      key: 3,
      path: "/admin/instructor_management",
      icon: <UserOutlined />,
      title: "Instructors Management",
    },
    {
      key: 4,
      path: "/admin/complains_management",
      icon: <ExceptionOutlined />,
      title: "Complains Management",
    },
    {
      key: 5,
      path: "/admin/transactions_statistic",
      icon: <AreaChartOutlined />,
      title: "Transactions Statistic",
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{ minHeight: "100vh" }}
      >
        <div
          className="logo d_flex align_item_center justify_content_center"
          style={{ height: 64 }}
        >
          {!collapsed && (
            <Image
              src="/images/logo_business.png"
              alt=""
              width={140}
              height={48}
            />
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {listRouter.map((item, i) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => setTitle(item.title)}
            >
              <Link href={item.path}>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="d_flex justify_content_between"
          style={{ padding: 0, backgroundColor: "#fff" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h1>{title}</h1>
          </div>
          <div className="d_flex align_item_center">
            <Select
              className=" me_4"
              defaultValue="vietnamese"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "vietnamese",
                  label: "Vietnamese",
                },
                {
                  value: "english",
                  label: "English",
                },
              ]}
            />
            <div className="wh_64 me_4">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Avatar
                  size={40}
                  style={{ backgroundColor: `${randomColor()}` }}
                >
                  U
                </Avatar>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
