'use client'
import React from 'react';
import { Avatar, DatePicker, Input, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, MailOutlined, SearchOutlined } from '@ant-design/icons';
import './style.scss'
import { randomColor } from '@/utils/RandomColor';
const { RangePicker } = DatePicker;

export const StudentManagement = () => {
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => (
        <Space size="middle">
          <Avatar style={{backgroundColor: randomColor()}}>{text[0]}</Avatar>
          <a>{text}</a>
        </Space>
      )
    },
    {
      title: 'Enrolled',
      dataIndex: 'enrolled',
      key: 'enrolled',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Joined At',
      dataIndex: 'joinedAt',
      key: 'joinedAt',
    },
    {
      title: 'Total Payment',
      dataIndex: 'totalPayment',
      key: 'totalPayment',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, dataIndex:any) => (
        <Space size="middle">
          <a><MailOutlined /></a>
          <a><EditOutlined /></a>
          <a><DeleteOutlined /></a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '2',
      name: 'Suboi Brown',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '3',
      name: 'Wowy Brown',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '4',
      name: 'Rymastic Brown',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '5',
      name: 'Andie Brown',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '6',
      name: 'Brown Jack',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
    {
      key: '7',
      name: 'Bob Transois',
      enrolled: '32 Course',
      email: 'vuvietduy@gmail.com',
      joinedAt: '7 July, 2020',
      totalPayment: '13211$',
    },
  ];
  
  return (
  <div className='student_management'>
    <div className='d_flex justify_content_start mb_4'>
    <Input
        className='me_4'
        placeholder="Search"  
        prefix={<SearchOutlined />}
        style={{width: "300px"}}
    />
    <RangePicker/>
    </div>
    <Table columns={columns} dataSource={data} />
  </div>
)}

