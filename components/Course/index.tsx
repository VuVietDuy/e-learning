'use client'
import { StarFilled, StarOutlined } from '@ant-design/icons';
import React from 'react';

import './index.scss'
import { Typography } from 'antd';
import { useRouter } from 'next/navigation'

const {Paragraph} = Typography;

function Course(props :any) {
    const router = useRouter();
    const {
        src,
        time,
        title,
        instructor,
        star,
        currentPrice,
        defaultPrice,
        viewer,
    } = props;

    const onClick = () => {
        router.push("/user/course_preview");
    }

  return (
    <div className='Course' onClick={onClick}>
        <div className='upper'>
            <img className='image' src={src} alt="" />
        </div>
        <div className='bottom'>
            <p className='time'>{time}</p>
            <Paragraph ellipsis={{rows:3,}} className='title'>{title}</Paragraph>
            <div className='info'>
                <div className='info1'>
                    <span className='instructor'>{instructor}</span>
                    <span className='star'>{star} <StarFilled style={{color: "#FFD600"}} /></span>
                </div>
                <div className='info2'>
                    <span className='cur-price'>{currentPrice}</span>
                    {/* <p className='def-price'>{defaultPrice}</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course