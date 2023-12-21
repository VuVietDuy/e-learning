"use client";
import React from "react";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import "./index.scss";
import Lession from "./components/Lession";

export function DetailCourse(): JSX.Element {
  return (
    <div className="detail_course_container default_container">
      <div className="d_flex justify_content_between">
        <h1 className="mb_4">Course title</h1>
        <div>
          <Button>Save Changes</Button>
          <Button type="primary" className="ms_4">
            Submit
          </Button>
        </div>
      </div>
      <div>
        <Link href={"/user/course_preview"}>
          <p className="link_pre"><EyeOutlined /> Preview course</p>
        </Link>
      </div>
      <div className="workspace">
        <Row>
          <Col span={6}>
            <div className="sidebar">
              <div>
                <h2 className="title">Edit</h2>
              </div>
              <div className="menu_container">
                <ul className="menu">
                  <li className="menu_item active">
                    <span>Video Lessons</span>
                  </li>
                  <li className="menu_item">
                    <span>Class Details</span>
                  </li>
                </ul>
              </div>
              <div>
                <Button className="btn">Get Started With Teaching</Button>
                <Button className="btn">How Learning on MegaSkill Works</Button>
                <Button className="btn">Class Quality With Guideliness</Button>
                <Button className="btn">Filming & Editing Techniques</Button>
                <Button className="btn">Export Settings</Button>
                <Button className="btn">Uploading Help</Button>
              </div>
            </div>
          </Col>
          <Col span={18}>
            <div className="content">
              <h4 className="mb_4">Video Lessons</h4>
              <div className="content_text">
                <p className="para">
                  If you’re teaching your first class on MegaSkill, we recommen
                  reviewing Get Started With Teaching in our Help Center for a
                  full overview of the class creation process.
                </p>
                <p className="para">
                  In addition, please review our Class Quality With Guidelines
                  to learn all of our minimum requirements for classes on
                  MegaSkill. Below are some of our most important requirements
                  to keep in mind when planning your video lessons. Classes
                  must:
                </p>
                <ul className="content_text_list">
                  <li>Include at least 10 minutes of video content.</li>
                  <li>Meet our standards for audio & video quality.</li>
                  <li>Limit self-promotion to first and last video lessons</li>
                  <li>
                    Include a standalone introduction video that explains that
                    what the class is about.
                  </li>
                </ul>
              </div>
              <div className="lession_list">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Lession></Lession>
                  </Col>
                  <Col span={24}>
                    <Lession></Lession>
                  </Col>
                  <Col span={24}>
                    <Lession></Lession>
                  </Col>
                </Row>
                <div className="upload">
                  <Button>Upload video</Button>
                </div>
              </div>
              <div>
                <p className="note">
                  Have a question or want feedback on your class?{" "}
                  <a>Email us.</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
