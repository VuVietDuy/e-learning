import React from 'react'
import './index.scss'
import { Button } from 'antd'
import { CopyrightOutlined, YoutubeFilled } from '@ant-design/icons'

export function Footer() {
  return (
    <div className='footer'>
      <div className="f-container">
        <div className="f-contain-top">
          <ul className="f-contain-top-item">
            <li className="f-top-list f-top-list--bold">Company</li>
            <li className="f-top-list">About</li>
            <li className="f-top-list">Careers</li>
            <li className="f-top-list">Press</li>
            <li className="f-top-list">Blog</li>
            <li className="f-top-list">Affiliates</li>
            <li className="f-top-list">Partnerships</li>
          </ul>
          <ul className="f-contain-top-item">
            <li className="f-top-list f-top-list--bold">Community</li>
            <li className="f-top-list">Team Plans</li>
            <li className="f-top-list">Limited Memberships</li>
            <li className="f-top-list">Scholarships</li>
            <li className="f-top-list">Free Classes</li>
          </ul>
          <ul className="f-contain-top-item">
            <li className="f-top-list f-top-list--bold">Teaching</li>
            <li className="f-top-list">Become a Teacher</li>
            <li className="f-top-list">Teacher Help Center</li>
            <li className="f-top-list">Teacher Rules & Requirements</li>
          </ul>
          <ul className="f-contain-top-item">
            <li className="f-top-list f-top-list--bold">Subscribe our Youtube Channel</li>
            <Button className="f-contain-top-item-btn">
              <YoutubeFilled className='icon'></YoutubeFilled>
              <div className="f-contain-top-item-btn-grafish">GraFish</div>
            </Button>
          </ul>
        </div>
        <div className="f-contain-bottom">
          <ul className="f-contain-bottom-item">
            <li className="f-bottom-list"><CopyrightOutlined></CopyrightOutlined> GraFish, Inc. 2023</li>
            <li className="f-bottom-list">Help</li>
            <li className="f-bottom-list">Privacy</li>
            <li className="f-bottom-list">Terms</li>
          </ul>
          <ul className="f-contain-bottom-item">

            <Button className=" f-contain-bottom-item-btn">
              English
            </Button>
          </ul>
        </div>
      </div>
    </div>
  )
}