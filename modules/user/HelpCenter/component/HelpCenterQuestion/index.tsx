'use client'
import React from 'react'
import './index.scss'

function HelpCenterQuestion(props: any) {

    const {
        src = '/images/myClassCourse.png',
        lesson = 'Photoshop Advance: Retouching with Master of Photoshop (2023) ...',
        classNum = 6,
        hourLearn = "(10h 8m)",
    } = props;

  return (
    <div className='HelpCenterQuestion'>
      <div className="title">
        Getting Started
      </div>
        <ul>
            <li>How does GraFish work?</li>
            <li>How does GraFish work?</li>
            <li>How does GraFish work?</li>
            <li>How does GraFish work?</li>
            <li>What information will I receive about my course?</li>
        </ul>
        <a href="" className='fullarticle'>See full article</a>
    </div>
  )
}

export default HelpCenterQuestion