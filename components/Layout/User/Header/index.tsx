"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BellOutlined,
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Input, Row } from "antd";

import "./index.scss";
import Notice from "../Notice";
import { useRouter } from "next/navigation";

export function Header() {
  const [isOpenNotice, setIsOpenNotice] = useState(false);
  const [isOpenBrowse, setIsOpenBrowse] = useState(false);
  const [isOpenAvatar, setOpenAvatar] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setIsOpenNotice(true);
  };

  const onClose = () => {
    setIsOpenNotice(false);
  };

  const viewProfile = () => {
    router.push("/user/profile");
  };

  const closeAvatar = () => {
    setOpenAvatar(false);
  };

  const openAvatar = () => {
    setOpenAvatar(true);
    closeBrowse();
  };

  const closeBrowse = () => {
    setIsOpenBrowse(false);
  };

  const avatarItems = [
    {
      key: "1",
      label: "My Classs",
      path: "/user/my_classes",
    },
    {
      key: "2",
      label: "Account Setting",
      path: "/user/account_setting",
    },
    {
      key: "3",
      label: "Language: English",
      path: "/user/account_setting",
    },
    {
      key: "4",
      label: "Help Center",
      path: "/user/help_center",
    },
    {
      key: "5",
      label: "Sign out",
      path: "/introduction/login",
    },
  ];

  const handleSearch = () => {
    router.push("/user/search_result");
    closeBrowse()
  };

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
            <Button
              className="btn"
              size="large"
              onClick={() => setIsOpenBrowse(!isOpenBrowse)}
            >
              Browse <DownOutlined />
            </Button>
            <div
              className={`browse_content ${
                isOpenBrowse ? "d_block" : "d_none"
              }`}
            >
              <Row>
                <Col span={6}>
                  <div className="browse_content-left">
                    <div>
                      <h4 className="title">Create</h4>
                    </div>
                    <ul className="create_list">
                      <li onClick={handleSearch}>Animation</li>
                      <li onClick={handleSearch}>3D Art</li>
                      <li onClick={handleSearch}>Film & Video</li>
                      <li onClick={handleSearch}>Fine Art</li>
                      <li onClick={handleSearch}>Graphic Design</li>
                      <li onClick={handleSearch}>Illustration</li>
                      <li onClick={handleSearch}>Photography</li>
                      <li onClick={handleSearch}>UI/UX Design</li>
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
                          <li onClick={handleSearch}>Photoshop</li>
                          <li onClick={handleSearch}>Premiere</li>
                          <li onClick={handleSearch}>After Effect</li>
                          <li onClick={handleSearch}>Illustrator</li>
                          <li onClick={handleSearch}>Figma</li>
                          <li onClick={handleSearch}>Maya</li>
                          <li onClick={handleSearch}>Substance Painter</li>
                          <li onClick={handleSearch}>Zbrush</li>
                        </ul>
                      </Col>
                      <Col span={8}>
                        <ul className="create_list">
                          <li onClick={handleSearch}>Unreal Engine</li>
                          <li onClick={handleSearch}>Ziva</li>
                          <li onClick={handleSearch}>Marmoset</li>
                          <li onClick={handleSearch}>Mari</li>
                          <li onClick={handleSearch}>Marvelous</li>
                          <li onClick={handleSearch}>Mudbox</li>
                          <li onClick={handleSearch}>Davinci Resolve</li>
                          <li onClick={handleSearch}>Nuke</li>
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
              <div></div>
            </div>
          </div>
          <Link href={"/user/learning_path"}>
            <Button className="btn" size="large">
              Learning Path
            </Button>
          </Link>
          <div>
            <Input
              className="search"
              type="text"
              placeholder="Search"
              prefix={<SearchOutlined />}
            ></Input>
          </div>
        </div>
        <div className="right">
          <Link href={"/user/help_center"} className="btn-text">
            <span>Help Center</span>
          </Link>
          {/* <Link href={"/user"} className="btn-text">
            <span>Teacher</span>
          </Link> */}
          <Link href={"/user/shop_cart"} className="btn-text">
            <ShoppingCartOutlined />
          </Link>
          <span className="btn-text" onClick={showDrawer}>
            <BellOutlined />
          </span>
          <div className="avatar_dropdown">
            <Avatar
              src="/images/avatar.jpg"
              size={"large"}
              onClick={() => {
                setOpenAvatar(!isOpenAvatar);
                closeBrowse();
              }}
            ></Avatar>
            <div
              className={`${
                isOpenAvatar ? "d_block" : "d_none"
              } avatar_dropdown_content`}
            >
              <div className="avatar_dropdown_top">
                <div className="avatar">
                  <Image
                    src={"/images/avatar.jpg"}
                    alt="avatar"
                    width={88}
                    height={88}
                  ></Image>
                </div>
                <h3 className="name">Phung Ba Hai Dang</h3>
                <Button className="btn_view" onClick={viewProfile}>
                  View profile
                </Button>
              </div>
              <div className="avatar_dropdown_bottom">
                {avatarItems.map((item, i) => (
                  <div className="item" key={i} onClick={() => closeAvatar()}>
                    <Link href={item.path} style={{ textDecoration: "none" }}>
                      <span>{item.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notice onClose={onClose} isOpenNotice={isOpenNotice}></Notice>
    </div>
  );
}
