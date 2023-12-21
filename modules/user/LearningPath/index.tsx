"use client";
import React from "react";
import "./index.scss";
import { Col, Row } from "antd";
import MyClassesCourse from "@/components/MyClassesCourse";

export function LearningPath() {
  return (
    <div className="learning_path_contaier">
      <div className="learning_path_text">
        <div className="learning-img">

          <img className="learning-img" src="/images/user/learningPaths.png" alt="" />
        </div>

        <div className="content">
          <div className="title">Learning Paths</div>
          <div className="description">Reach Your Learning Goals With Hand-Picked, Sequential Classes</div>
          <div className="non-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. consequat sunt nostrud amet.</div>
        </div>
      </div>
      <div className="learning_path_content">
        <Row gutter={[32, 32]}>
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
    </div>
  );
}
