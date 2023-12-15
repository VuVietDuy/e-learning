'use client'
import React, {useState} from "react";
import './index.scss'
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import dayjs from 'dayjs';
import {EyeOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;
export function Profile() {

    let pimg;
    let hourlearn = 216.8;

        //  Lưu thông tin người dùng
    const [inputs, setInputs] = useState({
        firstName:'',
        lastName: '',
        dateofbirth: '',
        gender: '',
        biography: '',
        phone: ''});

    const handleSubmit = (e: any) => {
        console.log(e);
    }


    return (
        <div className="Profile">
            <Row>
                <Col span={8}>
                    <div className="left">
                        <div className="profileimg">
                            <div className="img">{}
                            </div>
                            <h2>Hai Dang Phung Ba</h2>
                            <div className="line-1"></div>
                        </div>
                        <div className="follower">
                            <div>
                                <p className="num">--</p>
                                <p>Followers</p>
                            </div>
                            <div>
                                <p className="num">25</p>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className="line-1"></div>
                        <div className="hours-learning">
                            <span><EyeOutlined />&nbsp;&nbsp;{hourlearn}&nbsp;&nbsp; Hours&nbsp; Learning</span>
                        </div>
                        <img className="chart" src="/images/donutchart.png" alt="" />
                        <div className="statistics">
                            <div className="element">
                                <div>
                                    <div className="roundbox first"></div>
                                    <span className="specifyin">3D Art</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                            <div className="element">
                                <div>
                                    <div className="roundbox second"></div>
                                    <span className="specifyin">Animation</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                            <div className="element">
                                <div>
                                    <div className="roundbox third"></div>
                                    <span className="specifyin">Film & Video</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                            <div className="element">
                                <div>
                                    <div className="roundbox fourth"></div>
                                    <span className="specifyin">UI/UI Design</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                            <div className="element">
                                <div>
                                    <div className="roundbox fifth"></div>
                                    <span className="specifyin">Graphic Design</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                            <div className="element">
                                <div>
                                    <div className="roundbox sixth"></div>
                                    <span className="specifyin">Other</span>
                                </div>
                                <span>150.3 hr</span>
                            </div>
                        </div>
                        <div className="notice">*These stats are only visible to you</div>
                        <div className="line-1"></div>
                    </div>
                </Col>

                <Col span={16}>
                    <div className="right">
                        <h2>Profile</h2>
                        <div className="line-1"></div>
                        <Form
                            onFinish={handleSubmit}
                        >
                            <div className="body">
                                <div className="name">
                                    <Form.Item  name="firstName">
                                        <p>First Name</p>
                                        <Input type="text" className="box" defaultValue={inputs.firstName || ""} />
                                    </Form.Item>
                                    <Form.Item  name="lastName">
                                        <p>Last Name</p>
                                        <Input type="text" className="box" defaultValue={inputs.lastName || ""}/>
                                    </Form.Item>
                                </div>
                                <div className="phone_gender">
                                    <Form.Item className="phoneNumber">
                                        <p>Phone</p>
                                        <Input type="text" className="box" defaultValue={inputs.phone || ""}/>
                                    </Form.Item>
                                    <div className="gender">
                                        
                                        <Form.Item name={'male'}>
                                            <span>Gender: </span>
                                            <Input className="radio" type="radio"/>
                                            <label>Male</label>
                                        </Form.Item>
                                        <Form.Item  name="gender">
                                            <Input className="radio" type="radio"/>
                                            <label>Female</label>
                                        </Form.Item>
                                        <Form.Item name={'other'}>
                                            <Input className="radio" type="radio"/>
                                            <label>Other</label>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="dateofbirth">
                                    <Form.Item>
                                        <p>Date of Birth</p>
                                        <DatePicker className="box" defaultValue={dayjs('01/01/2015')}/>
                                    </Form.Item>
                                </div>
                                <div className="biography">
                                    <Form.Item>
                                        <p>Biography</p>
                                        <textarea name="biography" className="box" id="" cols={30} rows={10}></textarea >
                                    </Form.Item>
                                </div>
                                <Form.Item>
                                    <Button className="savechange" size="large" htmlType="submit">Save Changes</Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}