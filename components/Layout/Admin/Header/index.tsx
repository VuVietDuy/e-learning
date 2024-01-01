"use client";
import { randomColor } from "@/utils/RandomColor";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Select } from "antd";
import { useState } from "react";

const { Header } = Layout;

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

export function HeaderAdminPage():JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Header className="d_flex justify_content_between" style={{ padding: 0, backgroundColor: "#fff"}}>
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
          defaultValue="english"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "english",
              label: "English",
            },
            {
              value: "vietnamese",
              label: "Vietnamese",
            },
          ]}
        />
        <div className="wh_64 me_4">
          <Dropdown
            menu={{
              items,
            }}
          >
            <Avatar size={40} style={{ backgroundColor: `${randomColor()}` }}>
              U
            </Avatar>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
