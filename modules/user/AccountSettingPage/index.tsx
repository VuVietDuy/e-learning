"use client";
import React, { use, useState } from "react";
import "./style.scss";
import { Col, Row } from "antd";
import Link from "next/link";
import { EmailAddress } from "./componets/EditEmail";
import { ChangePassword } from "./componets/ChangePassword";
import { Language } from "./componets/Language";
import { PurchasedCourses } from "./componets/PurchasedCourses";

export function AccountSetting() {
  const [activeTab, setActiveTab] = useState("EmailAddress");
  return (
    <div className="account-setting-container">
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <div className="navigation-container">
            <p className="title">ACCOUNT SETTING</p>
            
            <div
              className={`option ${
                activeTab === "EmailAddress" ? "active" : ""
              }`}
              onClick={() => setActiveTab("EmailAddress")}
            >
              <span>Email Address</span>
            </div>
            <div
              className={`option ${activeTab === "Password" ? "active" : ""}`}
              onClick={() => setActiveTab("Password")}
            >
              <span>Password</span>
            </div>
            <div
              className={`option ${activeTab === "Language" ? "active" : ""}`}
              onClick={() => setActiveTab("Language")}
            >
              <span>Language</span>
            </div>
            <div
              className={`option ${
                activeTab === "PurchasedCourses" ? "active" : ""
              }`}
              onClick={() => setActiveTab("PurchasedCourses")}
            >
              <span>Purchased Courses</span>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <EmailAddress
            className={`${activeTab === "EmailAddress" ? "d_block" : "d_none"}`}
          ></EmailAddress>
          <ChangePassword
            className={`${activeTab === "Password" ? "d_block" : "d_none"}`}
          ></ChangePassword>
          <Language
            className={`${activeTab === "Language" ? "d_block" : "d_none"}`}
          ></Language>
          <PurchasedCourses
            className={`${
              activeTab === "PurchasedCourses" ? "d_block" : "d_none"
            }`}
          ></PurchasedCourses>
        </Col>
      </Row>
    </div>
  );
}
