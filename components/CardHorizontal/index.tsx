import React from 'react'
import './index.scss'

function CardHorizontal(props: any) {

    const {
        src,
        lession,
        time,
        title,
        instructor
    } = props;

  return (
    <div className='card-horizontal'>
        <div className='left'>
            <img src={src} alt="" />
        </div>
        <div className='right'>
            <div className='lession'>{lession} | {time}</div>
            <div className='title'>{title}</div>
            <div className='instructor'>{instructor}</div>
        </div>
    </div>
  )
}

export default CardHorizontal