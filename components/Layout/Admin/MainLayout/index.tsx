'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    AreaChartOutlined,
    BookOutlined,
    ExceptionOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { HeaderAdminPage } from '../Header';

const { Sider, Content } = Layout;

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
                <div className="logo d_flex align_item_center justify_content_center" style={{ height: 64}}>
                    <Image src='/images/logo_business.png' alt='' width={140} height={48}/>
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
                        icon={<ExceptionOutlined />}
                    >
                        <Link href='/admin/complains_management'>Complains Management</Link>
                    </Menu.Item>
                    <Menu.Item
                        key= {5}
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