import React from 'react'
import './index.scss'

function MyClassesCourse(props: any) {

    const {
        src = '/images/myClassCourse.png',
        lesson = 'Photoshop Advance: Retouching with Master of Photoshop (2023) ...',
        classNum = 6,
        hourLearn = "(10h 8m)",
        size
    } = props;

  return (
    <div className={`${size} MyClassesCourse`}>
        <div className='top'>
            <img className='img' src={src} alt="" />
        </div>
        <div className='bottom'>
            <div className='lesson'>{lesson}</div>
            <div className='classNum'>{classNum} Classes <span className='hourLearn'> {hourLearn}</span></div>
        </div>
    </div>
  )
}

export default MyClassesCourse