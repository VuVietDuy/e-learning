'use client'
import React from 'react'
import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import "./index.scss"

export function DetailCourse() : JSX.Element {
  return (
    <div className='detail_course_container default_container'>
        <div className='d_flex justify_content_between'>
          <h2>Course title</h2>
          <Button>Save Changes</Button>
        </div>
        <div>
          <Link href={"/user/course_preview"}><span>Preview course</span></Link>
        </div>
        {/* <div>
          <Row>
            <Col span={6}>

            </Col>
            <Col span={18}>

            </Col>
          </Row>
        </div> */}
    </div>
  )
}
