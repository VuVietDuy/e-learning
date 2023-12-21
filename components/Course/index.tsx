'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';
import { Typography } from 'antd';

import './index.scss'

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
    } = props;

    const onClick = () => {
        router.push("/user/course_preview");
    }

  return (
    <div className='Course' onClick={onClick}>
        <div className='upper'>
            <Image src={src} alt="" width={232} height={120}/>
        </div>
        <div className='bottom'>
            <div className='d_flex justify_content_between'>
                <p className='students'>10,290 student</p>
                <p className='time'>{time}</p>
            </div>
            <Paragraph ellipsis={{rows:3,}} className='title'>{title}</Paragraph>
            <div className='info'>
                <div className='info1'>
                    <span className='instructor'>{instructor}</span>
                    <span>{star} <StarFilled className='star' /></span>
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