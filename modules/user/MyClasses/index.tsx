'use client'
import React, { useState } from 'react';
import MyClassesCourse from "@/components/MyClassesCourse";
import './index.scss';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import PurchasedCourseItem from '@/components/PurchasedCourseItem';

export function MyClasses() {

  // Sử dụng useState để quản lý trạng thái của tab được chọn
  const [activeTab, setActiveTab] = useState('learningPaths');

  // Hàm xử lý khi tab được chọn thay đổi
  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <div className="MyClasses">
      <div className="Top">
        <div className="Title">My Classes</div>
        <div className="Category">
          <div
            className={`element ${activeTab === 'learningPaths' ? 'active' : ''}`}
            onClick={() => handleTabChange('learningPaths')}
          >
            My Learning Paths
          </div>
          <div
            className={`element ${activeTab === 'watchHistory' ? 'active' : ''}`}
            onClick={() => handleTabChange('watchHistory')}
          >
            Watch History
          </div>
          <div
            className={`element ${activeTab === 'purchasedCourses' ? 'active' : ''}`}
            onClick={() => handleTabChange('purchasedCourses')}
          >
            Purchased Courses
          </div>
        </div>
      </div>

      <div className="Body">
        <div className="MyLearningPaths" style={{ display: activeTab === 'learningPaths' ? 'block' : 'none' }}>
          <Row gutter={[16, 32]}>
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

        <div className="WatchHistory" style={{ display: activeTab === 'watchHistory' ? 'block' : 'none' }}>
          {/* Nội dung của tab Watch History */}
        </div>

        <div className="PurchasedCourses" style={{ display: activeTab === 'purchasedCourses' ? 'block' : 'none' }}>
          <PurchasedCourseItem 
            src='/images/card.png'
            title="Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta Human"
            instructor="Auther"
            parchasedDate="20/12/2023"
            star={3}
          ></PurchasedCourseItem>
        </div>
      </div>
    </div>
  );
}
