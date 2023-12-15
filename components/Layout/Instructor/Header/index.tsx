"use client";
import React, { useState } from "react";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import Link from "next/link";

import Notice from "../Notice";
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
          <Button className="btn" size="large">
            Browse
          </Button>
          <Link href={"/user/learning_path"}>
            <Button className="btn" size="large">
              Learning Path
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
            <span>Teacher</span>
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
      <Notice onClose={onClose} isOpenNotice={isOpenNotice}></Notice>
    </div>
  );
}
