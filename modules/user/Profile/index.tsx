"use client";
import React, { useState } from "react";
import "./index.scss";
import { Button, Col, DatePicker, Form, Image, Input, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export function Profile() {
  let hourlearn = 216.8;

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="Profile">
      <Row>
        <Col span={8}>
          <div className="left">
            <div className="profileimg">
              <Image src="/images/user/discussion6.png"></Image>
              <h2 className="mt16">Hai Dang Phung Ba</h2>
              <div className="line-1"></div>
            </div>
            <div className="follower">
              <div className="follow">
                <p className="num">16</p>
                <p>Followers</p>
              </div>
              <div className="follow">
                <p className="num">25</p>
                <p>Following</p>
              </div>
            </div>
            <div className="line-1"></div>
            <div className="hours-learning">
              <span>
                <EyeOutlined />
                &nbsp;&nbsp;{hourlearn}&nbsp;&nbsp; Hours&nbsp; Learning
              </span>
            </div>
            <Image src="/images/user/thongke1.png" className="thongke"></Image>
            <div className="statistics">
              <div className="element">
                <div>
                  <div className="roundbox first"></div>
                  <span className="specifyin">3D Art</span>
                </div>
                <span>150.3 hr</span>
              </div>
              <div className="element">
                <div>
                  <div className="roundbox second"></div>
                  <span className="specifyin">Animation</span>
                </div>
                <span>150.3 hr</span>
              </div>
              <div className="element">
                <div>
                  <div className="roundbox third"></div>
                  <span className="specifyin">Film & Video</span>
                </div>
                <span>150.3 hr</span>
              </div>
              <div className="element">
                <div>
                  <div className="roundbox fourth"></div>
                  <span className="specifyin">UI/UI Design</span>
                </div>
                <span>150.3 hr</span>
              </div>
              <div className="element">
                <div>
                  <div className="roundbox fifth"></div>
                  <span className="specifyin">Graphic Design</span>
                </div>
                <span>150.3 hr</span>
              </div>
              <div className="element">
                <div>
                  <div className="roundbox sixth"></div>
                  <span className="specifyin">Other</span>
                </div>
                <span>150.3 hr</span>
              </div>
            </div>
            <div className="notice">*These stats are only visible to you</div>
            <div className="line-1"></div>
          </div>
        </Col>

        <Col span={16}>
          <div className="right">
            <h2>Profile</h2>
            <div className="line-1"></div>
            <Form onFinish={handleSubmit}>
              <div className="body">
                <div className="name">
                  <p>First Name</p>
                  <Form.Item name="firstName">
                    <Input type="text" className="box" />
                  </Form.Item>
                  <p>Last Name</p>
                  <Form.Item name="lastName">
                    <Input type="text" className="box" />
                  </Form.Item>
                </div>
                <div className="phone_gender">
                  <p>Phone</p>
                  <Form.Item className="phoneNumber">
                    <Input type="text" className="box" />
                  </Form.Item>
                  <div className="gender">
                    <span>Gender: </span>
                    <Form.Item name={"male"}>
                      <Input className="radio" type="radio" />
                    </Form.Item>
                    <label>Male</label>
                    <Form.Item name="female">
                      <Input className="radio" type="radio" />
                    </Form.Item>
                    <label>Female</label>
                    <Form.Item name={"other"}>
                      <Input className="radio" type="radio" />
                    </Form.Item>
                    <label>Other</label>
                  </div>
                </div>
                <div className="dateofbirth">
                  <p>Date of Birth</p>
                  <Form.Item name={"dateOfBirth"}>
                    <DatePicker className="box" />
                  </Form.Item>
                </div>
                <div className="biography">
                  <p>Biography</p>
                  <Form.Item name={"biography"}>
                    <textarea
                      name="biography"
                      className="box"
                      id=""
                      cols={30}
                      rows={10}
                    ></textarea>
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button className="savechange" size="large" htmlType="submit">
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
