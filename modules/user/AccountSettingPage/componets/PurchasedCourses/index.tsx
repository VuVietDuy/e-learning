'use client'
import React from "react";
import "./index.scss";
import { Button, Card, Col, Form, Input, Row } from "antd";
import PurchasedCourseItem from "../../../../../components/PurchasedCourseItem";
import ShopCardItem from "@/modules/user/ShopCart/component/ShopCardItem";

export function PurchasedCourses(props : any) {
  const  {className} = props;
  return (
    <div className={`change-purchased-form ${className}`}>
      <h3 className="title">Purchased Courses</h3>
      <Card style={{ maxHeight: 500, overflowY: 'auto' }}>
        <Row gutter={[16, 24]}>
          <ShopCardItem></ShopCardItem>
          <ShopCardItem></ShopCardItem>
          <ShopCardItem></ShopCardItem>
          <ShopCardItem></ShopCardItem>
          
        </Row>
      </Card>
    </div>
  );
}
