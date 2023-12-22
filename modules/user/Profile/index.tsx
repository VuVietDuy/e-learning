"use client";
import React from "react";
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
                  <div>
                    <p>First Name</p>
                    <Input type="text" className="box" defaultValue={"Hai Dang"} />
                  </div>
                  <div>
                    <p>Last Name</p>
                    <Input type="text" className="box" defaultValue={"Phung Ba"}/>
                  </div>
                </div>
                <div className="phone_gender">
                  <div>
                    <p>Phone</p>
                    <Input type="text" className="box" defaultValue={"0978028844"}/>
                  </div>
                  <div className="gender">
                    <span>Gender: </span>
                    <Input className="radio" type="radio" checked/>
                    <label>Male</label>
                    <Input className="radio" type="radio" />
                    <label>Female</label>
                    <Input className="radio" type="radio" />
                    <label>Other</label>
                  </div>
                </div>
                <div className="dateofbirth">
                  <p>Date of Birth</p>
                  <DatePicker className="box"/>
                </div>
                <div className="biography">
                  <p>Biography</p>
                  <textarea
                    name="biography"
                    className="box"
                    id=""
                    cols={30}
                    rows={10}
                    defaultValue={"I'm PTITer"}
                  ></textarea>
                </div>
                <Button className="savechange" size="large" htmlType="submit">
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
