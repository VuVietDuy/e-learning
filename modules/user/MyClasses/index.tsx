"use client";
import React, { useState } from "react";
import { Button, Col, Radio, Row } from "antd";
import MyClassesCourse from "@/components/MyClassesCourse";
import PurchasedCourseItem from "@/components/PurchasedCourseItem";

import "./index.scss";

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
            className={`element ${
              activeTab === "learningPaths" ? "active" : ""
            }`}
            onClick={() => handleTabChange("learningPaths")}
          >
            My Learning Paths
          </div>
          <div
            className={`element ${
              activeTab === "watchHistory" ? "active" : ""
            }`}
            onClick={() => handleTabChange("watchHistory")}
          >
            Watch History
          </div>
          <div
            className={`element ${
              activeTab === "purchasedCourses" ? "active" : ""
            }`}
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
              <div className="course__3 mt24">
                <div className="course-3-body">
                  <div className="course-3-img">
                    <img src="/images/classes/card4.png" alt="" />
                    <div className="course-img-box"></div>
                  </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">
                      Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human
                    </div>
                    <div className="course-3-des-2-contain">
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>

                        <div className="des-2-3 flex des-2-3-margin mt80 mt80">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__3 mt24">
                <div className="course-3-body">
                  <div className="course-3-img">
                    <img src="/images/classes/img1.png" alt="" />
                    <div className="course-img-box"></div>
                  </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">
                      Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human
                    </div>
                    <div className="course-3-des-2-contain">
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>

                        <div className="des-2-3 flex des-2-3-margin mt80">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__3 mt24">
                <div className="course-3-body">
                  <div className="course-3-img">
                    <img src="/images/classes/img4.png" alt="" />
                    <div className="course-img-box"></div>
                  </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">
                      Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human
                    </div>
                    <div className="course-3-des-2-contain">
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>

                        <div className="des-2-3 flex des-2-3-margin mt80">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__3 mt24">
                <div className="course-3-body">
                  <div className="course-3-img">
                    <img src="/images/classes/img3.png" alt="" />
                    <div className="course-img-box"></div>
                  </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">
                      Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human
                    </div>
                    <div className="course-3-des-2-contain">
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>

                        <div className="des-2-3 flex des-2-3-margin mt80">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__3 mt24">
                <div className="course-3-body">
                  <div className="course-3-img">
                    <img src="/images/classes/img2.png" alt="" />
                    <div className="course-img-box"></div>
                  </div>
                  <div className="course-3-des">
                    <div className="course-3-des-1">
                      Dynamic Male Anatomy for Artists in Mudbox: Make realistic
                      3D Meta Human
                    </div>
                    <div className="course-3-des-2-contain">
                      <div className="course-3-des-2-1">
                        <div className=" fz-20">Ginger Bear</div>

                        <div className="des-2-3 flex des-2-3-margin mt80">
                          <div className=" fz-20 ml5">1d 5h 28m</div>
                          <div className=" fz-20">1,313,581 Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            src="/images/card.png"
            title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
            instructor="Auther"
            parchasedDate="20/12/2023"
            star={3}
          ></PurchasedCourseItem>
        </div>
      </div>
    </div>
  );
}
