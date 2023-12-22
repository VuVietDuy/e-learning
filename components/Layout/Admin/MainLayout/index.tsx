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
  }
];


export function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
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
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{ height: "100vh" }}
      >
        <div
          className="logo d_flex align_item_center justify_content_center"
          style={{ height: 64 }}
        >
          {!collapsed && <Image
            src="/images/logo_business.png"
            alt=""
            width={140}
            height={48}
          />}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1} icon={<BookOutlined />}>
            <Link href={"/admin/course_management"}>Courses Management</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<TeamOutlined />}>
            <Link href="/admin/student_management">Student Management</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<UserOutlined />}>
            <Link href="/admin/instructor_management">
              Instructor Management
            </Link>
          </Menu.Item>
          <Menu.Item key={4} icon={<ExceptionOutlined />}>
            <Link href="/admin/complains_management">Complains Management</Link>
          </Menu.Item>
          <Menu.Item key={5} icon={<AreaChartOutlined />}>
            <Link href="/admin/transactions_statistic">
              Transactions Statistic
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="d_flex justify_content_between"
          style={{ padding: 0, backgroundColor: "#fff" }}
        >
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
