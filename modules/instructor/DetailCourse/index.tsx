"use client";
import React from "react";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import "./index.scss";

export function DetailCourse(): JSX.Element {
  return (
    <div className="detail_course_container default_container">
      <div className="d_flex justify_content_between">
        <h2>Course title</h2>
        <Button>Save Changes</Button>
      </div>
      <div>
        <Link href={"/user/course_preview"}>
          <span>Preview course</span>
        </Link>
      </div>
      <div className="workspace">
        <Row>
          <Col span={6}>
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
          </Col>
          <Col span={18}>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
