"use client";
import React from "react";
import "./index.scss";
import { Col, Row } from "antd";
import MyClassesCourse from "@/components/MyClassesCourse";

export function LearningPath() {
  return (
    <div className="learning_path_contaier">
      <div className="learning_path_text">
        <img src="/images/user/learningPaths.png" alt="" />
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
