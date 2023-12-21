"use client";
import React from "react";
import { Button, Col, Form, Image, Input, Radio, Row, Select } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { Option } from "antd/es/mentions";

import "./style.scss";

export function CheckOut() {
  return (
    <div className="checkout_container">
      <div className="title-page">
        <h2 className="title-page_text">Check Out</h2>
      </div>
      <Row gutter={[48, 32]}>
        <Col span={12} className="payment">
          <div className="billing-address">
            <p className="title">Billing address</p>
            <Form layout="vertical">
              <Form.Item>
                <Row gutter={[32, 32]}>
                  <Col span={12}>
                    
                    <Form.Item name={"country"} label="Country">
                      <Select placeholder="Country" allowClear size="large">
                        <Option value="vietnamese"> Vietnamese</Option>
                        <Option value="english">English</Option>
                      </Select>
                    </Form.Item>
                  
                  </Col>
                  <Col span={12}>
                    <Form.Item name={"zipCode"} label="Zip Code">
                      <Input size="large"></Input>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
            <Paragraph>
              GraFish is required by law to collect applicable transaction or
              taxes for purchases made in certain tax jurisdictions
            </Paragraph>
          </div>
          <div className="payment_method">
            <div className="credit_card">
              <div className="credit_card_header">
                <Radio className="radio" value={"creditCard"}>
                  Credit/Debit Card
                </Radio>
              </div>
              <div className="credit_card_info">
                <Form layout="vertical">
                  <Row gutter={[32, 0]}>
                    <Col span={24}>
                      <Form.Item label="Name on card" name={"namOnCard"}>
                        <Input size="large"></Input>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Card number" name={"cardNumber"}>
                        <Input size="large"></Input>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Security Code" name={"securityCode"}>
                        <Input size="large"></Input>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Expiration Date"
                        name={"expirationDate"}
                      >
                        <Input size="large"></Input>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="credit_card_header">
                <Radio className="radio" value={"creditCard"}>
                  Visa
                </Radio>
              </div>
            </div>
          </div>
          <p className="order">Order details</p>
          <div className="list-item">
            <div className="item-list">
              <div className="left"><Image src="/images/user/checkout1.png" width={147} height={84}></Image> </div>
              <div className="right">
                <div className="title">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="price">500$</div>
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="item-list">
              <div className="left"><Image src="/images/user/checkout1.png" width={147} height={84}></Image> </div>
              <div className="right">
                <div className="title">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="price">500$</div>
              </div>
            </div>
          </div>
          <div className="list-item">
            <div className="item-list">
              <div className="left"><Image src="/images/user/checkout1.png" width={147} height={84}></Image> </div>
              <div className="right">
                <div className="title">Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human</div>
                <div className="price">500$</div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="sumary">
            <h3 className="title">Sumary</h3>
            <div className="sumary_item">
              <span className="left">Original prices:</span>
              <span className="right">$80.00</span>
            </div>
            <div className="sumary_item">
              <span className="left">Discounts:</span>
              <span className="right">-$10.00</span>
            </div>
            <div className="sumary_item">
              <span className="left  bold">Total:</span>
              <span className="right bold">$70.00</span>
            </div>
            <div className="text-contain">
              <p className="content">By completing your purchase you agree to our</p>
              <a href="#" className="term">Terms of Service</a>
            </div>
            <div className="sumary_item">
              <button className="complete-btn">Completed Checkout</button>
            </div>
            <Paragraph className="day">30-Day Money-Back Guarantee</Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
}
