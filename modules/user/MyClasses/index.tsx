"use client";
import React, { useState } from "react";
import { Button, Col, Radio, Row } from "antd";

import "./index.scss";
import MyClassesCourse from "@/components/MyClassesCourse";
import PurchasedCourseItem from "@/components/PurchasedCourseItem";
import CoursePurchased from "./components/CoursePerchased";

export function MyClasses(): JSX.Element {
  const [activeTab, setActiveTab] = useState("learningPaths");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="MyClasses">
      <div className="Top">
        <div className="Title">My Classes</div>
        <div className="Category">
          <div
            className={`${
              activeTab === "learningPaths" ? "active" : ""
            } element`}
            onClick={() => handleTabChange("learningPaths")}
          >
            My Learning Paths
          </div>
          <div
            className={`${
              activeTab === "watchHistory" ? "active" : ""
            } element`}
            onClick={() => handleTabChange("watchHistory")}
          >
            Watch History
          </div>
          <div
            className={`${
              activeTab === "purchasedCourses" ? "active" : ""
            } element`}
            onClick={() => handleTabChange("purchasedCourses")}
          >
            Purchased Courses
          </div>
        </div>
      </div>

      <div className="Body">
        <div
          className="MyLearningPaths"
          style={{ display: activeTab === "learningPaths" ? "block" : "none" }}
        >
          <Row gutter={[16, 32]}>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
            <Col span={8}>
              <MyClassesCourse></MyClassesCourse>
            </Col>
          </Row>
        </div>

        {/* WatchHistory */}
        <div
          className="WatchHistory"
          style={{ display: activeTab === "watchHistory" ? "block" : "none" }}
        >
          <div className="watch-histoty">
            {/**part 1 */}
            <div className="class-option">
              <div className="choose">
                <div className="choose-item">
                  <h3 className="choose-title">CLASSLENGTH</h3>
                  <Radio.Group className="radio-btn">
                    <Radio value={1} className="radio">
                      &lt;30min
                    </Radio>
                    <Radio value={2} className="radio">
                      30-60min
                    </Radio>
                    <Radio value={3} className="radio">
                      &gt;60min
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="choose-item">
                  <h3 className="choose-title">STATUS</h3>
                  <Radio.Group className="radio-btn">
                    <Radio value={1} className="radio">
                      In progress
                    </Radio>
                    <Radio value={2} className="radio">
                      Completed
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
              <h3>SKILLS</h3>
              <div className="skills">
                <div className="all-skill">
                  <Button>All skill</Button>
                </div>
                <div className="btn-list">
                  <Button className="item">3D Art</Button>
                  <Button className="item">Animation</Button>
                  <Button className="item">Graphic Design</Button>
                  <Button className="item">Illustration</Button>
                  <Button className="item">Photography</Button>
                  <Button className="item">UI/UX Design</Button>
                </div>
              </div>
            </div>
            <div className="class-list">
              <CoursePurchased
                src="/images/user/my_classes1.png"
                title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human"
                instructor="Ginger Bear"
                time="1d 5h 28m"
                amount="1,313,581"
              ></CoursePurchased>

              <CoursePurchased
                src="/images/user/my_classes2.png"
                title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human"
                instructor="Ginger Bear"
                time="1d 5h 28m"
                amount="1,313,581"
              ></CoursePurchased>
              <CoursePurchased
                src="/images/user/my_classes3.png"
                title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human"
                instructor="Ginger Bear"
                time="1d 5h 28m"
                amount="1,313,581"
              ></CoursePurchased>
              <CoursePurchased
                src="/images/user/my_classes4.png"
                title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human"
                instructor="Ginger Bear"
                time="1d 5h 28m"
                amount="1,313,581"
              ></CoursePurchased>
              <CoursePurchased
                src="/images/user/my_classes2.png"
                title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                    3D Meta Human"
                instructor="Ginger Bear"
                time="1d 5h 28m"
                amount="1,313,581"
              ></CoursePurchased>
            </div>
          </div>
        </div>

        <div
          className="PurchasedCourses"
          style={{
            display: activeTab === "purchasedCourses" ? "block" : "none",
          }}
        >
          <PurchasedCourseItem
            src="/images/user/my_classes2.png"
            title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human"
            instructor="Ginger Bear"
            time="1d 5h 28m"
            amount="1,313,581"
          ></PurchasedCourseItem>
        </div>
      </div>
    </div>
  );
}
