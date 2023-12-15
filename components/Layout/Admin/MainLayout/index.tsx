'use client'
import React, { useState } from 'react';
import {
    AreaChartOutlined,
    BookOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Dropdown, Select } from 'antd';

// import './style.scss'
import Link from 'next/link';
import { HeaderAdminPage } from '../Header';
import LoadingLayout from '../LoadingLayout';

const { Header, Sider, Content } = Layout;

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Setting
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Log out
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

export function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    // const collapsed = true;
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={250} style={{height: "100vh"}}>
                <div className="logo-vertical">
                    <img src='/images/logo_business.png'></img>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item 
                        key= {1}
                        icon={<BookOutlined />}
                    >
                        <Link href={'/admin/course_management'}>Courses Management</Link>
                    </Menu.Item>
                    <Menu.Item
                        key= {2}
                        icon={<TeamOutlined />}
                    >
                        <Link href='/admin/student_management'>Student Management</Link>
                    </Menu.Item>
                    <Menu.Item
                        key= {3}
                        icon={<UserOutlined />}
                    >
                        <Link href='/admin/instructor_management'>Instructor Management</Link>
                    </Menu.Item>
                    <Menu.Item
                        key= {4}
                        icon={<AreaChartOutlined />}
                    >
                        <Link href='/admin/transactions_statistic'>Transactions Statistic</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <HeaderAdminPage></HeaderAdminPage>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            // background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
            </Layout>
        </Layout>
    )
}