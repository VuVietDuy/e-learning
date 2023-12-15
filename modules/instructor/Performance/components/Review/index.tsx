import React from 'react';
import './index.scss'
import { Rate } from 'antd';

function Review(props : any) {
  const{
    name = "Victor Yamakate",
    date = "2 month ago",
    reviewContent = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  } = props;

  return (
    <div className="Review">
      <div className='user'>
        <div className="userImage"></div>
        <div className='date-name'>
          <div className="date">{date}</div>
          <div className="name">{name}</div>
        </div>
      </div>
      
      <div className="rateContent">
        <div className='starRate'>
            <Rate disabled defaultValue={2} />
        </div>
        <div className="comment">{reviewContent}</div>
        <div className='bottomComment'>
          <div className='helpful'>Was this review helpful?</div>
          <div className="yesButton">Yes</div>
          <div className="noButton">No</div>
          <div className="report">Report</div>
        </div>
      </div>

    </div>
  )
}

export default Review