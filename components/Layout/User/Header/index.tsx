"use client";
import React, { useEffect, useRef, useState } from "react";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Col, Dropdown, Input, Menu, Row } from "antd";
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
      key: "2",
      label: <Link href={"/user/account_setting"}>Profile</Link>,
    },
    {
      key: "3",
      label: <Link href={"/introduction/login"}>Log out</Link>,
    },
  ];

  const [isOpenNotice, setIsOpenNotice] = useState(false);
  const [openBrowse, setOpenBrowse] = useState(false);
  const browseContentRef = useRef(null);

  const showDrawer = () => {
    setIsOpenNotice(true);
  };

  const onClose = () => {
    setIsOpenNotice(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <div>
          <h2>test</h2>

        </div>
      </Menu.Item>
      {/* Các menu item khác nếu cần */}
    </Menu>
  );

  return (
    <div>
      <div className="header-container">
        <div className="left">
          <Link href={"/user/home"}>
            <img
              className="logo"
              src="/images/logo_business.png"
              height={48}
            ></img>
          </Link>
          <div className="browse">
            <Button className="btn" size="large" onClick={() => setOpenBrowse(!openBrowse)}>
              Browse
            </Button>
            <div className={`browse_content ${openBrowse ? "d_block" : "d_none"}`} ref={browseContentRef}>
              <Row>
                <Col span={6}>
                  <div className="browse_content-left">
                    <div>
                      <h4 className="title">Create</h4>
                    </div>
                    <ul className="create_list">
                      <li>Animation</li>
                      <li>3D Art</li>
                      <li>Film & Video</li>
                      <li>Fine Art</li>
                      <li>Graphic Design</li>
                      <li>Illustration</li>
                      <li>Photography</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                </Col>
                <Col span={18}>
                  <div className="browse_content-right">
                    <div>
                      <h4 className="title">Software</h4>
                    </div>
                    <Row>
                      <Col span={8}>
                      <ul className="create_list">
                        <li>Photoshop</li>
                        <li>Premiere</li>
                        <li>After Effect</li>
                        <li>Illustrator</li>
                        <li>Figma</li>
                        <li>Maya</li>
                        <li>Substance Painter</li>
                        <li>Zbrush</li>
                      </ul>
                      </Col>
                      <Col span={8}>
                      <ul className="create_list">
                        <li>Unreal Engine</li>
                        <li>Ziva</li>
                        <li>Marmoset</li>
                        <li>Mari</li>
                        <li>Marvelous</li>
                        <li>Mudbox</li>
                        <li>Davinci Resolve</li>
                        <li>Nuke</li>
                      </ul>
                      </Col>
                      <Col span={8}>
                      <ul className="create_list">
                        <li>Blender</li>
                        <li>Unity</li>
                        <li>Fusion</li>
                        <li>C4D</li>
                        <li>3Dsmax</li>
                        <li>Arnold</li>
                        <li>Redshift</li>
                        <li>Vray</li>
                      </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <div>

              </div>
            </div>
          </div>
          <Link href={"/user/learning_path"}>
            <Button className="btn" size="large">
              Learning Path
            </Button>
          </Link>
          <div>
            <Input className="search" type='text' placeholder="Search"></Input>
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
