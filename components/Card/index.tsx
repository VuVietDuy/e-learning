import { StarFilled, StarOutlined } from '@ant-design/icons';
import React from 'react';

import './index.scss'
import { Typography } from 'antd';

const {Paragraph} = Typography;

function Card(props :any) {
    const {
        src,
        time,
        title,
        instructor,
        star,
        currentPrice,
        defaultPrice,
        viewer,
        onClick,
    } = props;

  return (
    <div className='Card' onClick={onClick}>
        <div className='upper'>
            <img className='image' src={src} alt="" />
        </div>
        <div className='bottom'>
            <p className='time'>{time}</p>
            <Paragraph ellipsis={{rows:3,}} className='title'>{title}</Paragraph>
            <div className='info1'>
                <span className='instructor'>{instructor}</span>
                <span className='star'>{star} <StarFilled className='star-icon'/></span>
            </div>
            <div className='info2'>
                <span className='cur-price'>{currentPrice}</span>
                <span className='def-price'>{defaultPrice}</span>
                <span className='viewer'>{viewer}</span>
            </div>
        </div>
    </div>
  )
}

export default Card