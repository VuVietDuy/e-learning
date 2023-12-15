'use client'
import React from "react";
import "./index.scss";
import { Button, Card, Col, Form, Input, Row } from "antd";
import PurchasedCourseItem from "../../../../../components/PurchasedCourseItem";

export function PurchasedCourses(props : any) {
  const  {className} = props;
  return (
    <div className={`change-purchased-form ${className}`}>
      <h3 className="title">Purchased Courses</h3>
      <Card style={{ maxHeight: 500, overflowY: 'auto' }}>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <PurchasedCourseItem 
              src='/images/card.png'
              title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
              instructor="Auther"
              parchasedDate="20/12/2023"
            ></PurchasedCourseItem>
          </Col>
          <Col span={24}>
            <PurchasedCourseItem 
              src='/images/card.png'
              title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
              instructor="Auther"
              parchasedDate="20/12/2023"
            ></PurchasedCourseItem>
          </Col>
          <Col span={24}>
            <PurchasedCourseItem 
              src='/images/card.png'
              title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
              instructor="Auther"
              parchasedDate="20/12/2023"
            ></PurchasedCourseItem>
          </Col>
          <Col span={24}>
            <PurchasedCourseItem 
              src='/images/card.png'
              title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
              instructor="Auther"
              parchasedDate="20/12/2023"
            ></PurchasedCourseItem>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
