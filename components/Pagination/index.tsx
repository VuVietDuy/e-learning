import React from 'react'
import './index.scss'

function Pagination(props: any) {

    const {
        numberOfSlide,
        activeIndex,
        size,
    } = props;

  return (
    <div className='pagination-container'>
        {Array.from({length: numberOfSlide}, (_, i) => (
            <div className={` ${size} dot ${i == activeIndex ? "activeIndex" : ""}`} key={i}></div>
        ))}
    </div>
  )
}

export default Pagination