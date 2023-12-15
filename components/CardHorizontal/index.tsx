import React from 'react'
import Image from 'next/image';

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
            <Image src={src} alt="" width={244} height={162}/>
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