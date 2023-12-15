"use client";
import React, { useState } from "react";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import Link from "next/link";

import "./index.scss";

export function Header() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/user/my_classes"}>My Classs</Link>,
    },
    {
      key: "1",
      label: <Link href={"/user/account_setting"}>Profile</Link>,
    },
    {
      key: "2",
      label: <Link href={"/user/login"}>Log out</Link>,
    },
  ];

  const [isOpenNotice, setIsOpenNotice] = useState(false);

  const showDrawer = () => {
    setIsOpenNotice(true);
  };

  const onClose = () => {
    setIsOpenNotice(false);
  };

  return (
    <div>
      <div className="header-container">
        <div className="left">
          <img
            className="logo"
            src="/images/logo_business.png"
            height={48}
          ></img>
          <Link href={"/instructor/my_courses"}>
            <Button className="btn" size="large">
              My Courses
            </Button>
          </Link>
          <Link href={"/instructor/performance"}>
            <Button className="btn" size="large">
              Performance
            </Button>
          </Link>
          <Link href={"/instructor/communication"}>
            <Button className="btn" size="large">
              Communication
            </Button>
          </Link>
          <div>
            {/* <Search className="search" type='text' placeholder="Search"></Search> */}
          </div>
        </div>
        <div className="right">
          <Link href={"/user/help_center"} className="btn-text">
            <span>Help Center</span>
          </Link>
          <Link href={"/user"} className="btn-text">
            <span>Students</span>
          </Link>
          <Link href={"/user/shop_cart"} className="btn-text">
            <ShoppingCartOutlined />
          </Link>
          <span className="btn-text" onClick={showDrawer}>
            <BellOutlined />
          </span>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Avatar src="/images/avatar.jpg" size={"large"}></Avatar>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
