'use client'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { DeleteFilled } from '@ant-design/icons'

import './index.scss'
import CardHorizontal from '@/components/CardHorizontal'

export function ShopCart() {
  const applyCoupon = (e: any) => {
    console.log(e);
  }
  return (
    <div className='shop_cart_container'>
      <div className='title-page'>
        <span className='title-page_text'>Shopping Cart</span>
      </div>
      <Row>
          <Col span={16} className='cart'>
            <div className='cart_count'>
              <span>03 Courses in Cart</span>
            </div>
            <div className="cart_item">
              <CardHorizontal
                src='/images/card.png'
                lession="Lession 1"
                time="1h20m"
                title="Rigid bode"
                instructor="Auther"
              ></CardHorizontal>
              <Button size='large'><DeleteFilled /></Button>
            </div>
            <div className="cart_item">
              <CardHorizontal
                src='/images/card.png'
                lession="Lession 1"
                time="1h20m"
                title="Rigid bode"
                instructor="Auther"
              ></CardHorizontal>
              <Button size='large'><DeleteFilled /></Button>
            </div>
          </Col>
          <Col span={8} className='bill'>
            <div>
                <p className='title'>Total</p>
                <p className='sale-price'>$70.00</p>
                <p className='regular-price'>$10.00</p>
                <p className='percent-dicount'>23%</p>
                <Button type='text' size='large' className='btn-dark go_to_check_out'>Go to check out</Button>
            </div>
            <div className='coupon'>
                <p className='title'>Apply coupon</p>
                <Form
                  onFinish={applyCoupon}
                >
                  <Form.Item>
                    <Form.Item name={"couponCode"} style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}>
                      <Input size='large'></Input>
                    </Form.Item>
                    <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', float: 'right'}}>
                      <Button type='text' htmlType='submit' size='large' className='btn-dark'>Enter</Button>
                    </Form.Item>
                  </Form.Item>
                </Form>
            </div>
          </Col>
      </Row>
    </div>
  )
}
