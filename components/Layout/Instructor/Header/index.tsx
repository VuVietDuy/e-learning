"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";

import "./index.scss";

export function Header() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/instructor/my_courses"}>My Courses</Link>,
    },
    {
      key: "2",
      label: <Link href={"/instructor/account_setting"}>Profile</Link>,
    },
    {
      key: "3",
      label: <Link href={"/introduction/login"}>Log out</Link>,
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
          <Image
            className="logo"
            src="/images/logo_business.png"
            alt=""
            width={140}
            height={48}
          />
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
          <Link href={"/instructor/help_center"} className="btn-text">
            <span>Help Center</span>
          </Link>
          <Link href={"/instructor/home"} className="btn-text">
            <span>Students</span>
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
