import { StarFilled, StarOutlined } from "@ant-design/icons";
import React from "react";
import './index.scss';

function Review() {
  return (
    <div className="review">
      {/**review title */}
      <div className="review-title">
        <div className="review-title-bold">Reviews</div>
        <div className="review-title-number">325 reviews</div>
      </div>
      {/** review contain */}
      <div className="review-contain">
        {/** rate */}
        <div className="review-rate">
          <div className="rate-star">
            <div className="rate-text-while">Expectations Met?</div>
            <ul className="rate-star-list">
              <li className="rate-start-item">
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>

                <div className="rate-text-normal">Exceeded</div>
              </li>
              <li className="rate-start-item">
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>

                <div className="rate-text-normal">Yes</div>
              </li>
              <li className="rate-start-item">
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>

                <div className="rate-text-normal">Somewhat</div>
              </li>
              <li className="rate-start-item">
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarFilled className="star-icon-fill"></StarFilled>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>
                <StarOutlined className="star-icon-no-fill"></StarOutlined>

                <div className="rate-text-normal">Not Really</div>
              </li>
            </ul>
          </div>
          <div className="rate-suited">
            <div className="rate-text-while">Best suited for</div>
            <ul className="suited-list">
              <li className="suited-item">
                <div className="col col-s col-color"></div>
                <div className="col col-m col-no-color"></div>
                <div className="col col-l col-no-color"></div>
                <div className="suited-text-normal">Beginner</div>
                <div className="suited-tick suited-tick-color"></div>
              </li>
              <li className="suited-item">
                <div className="col col-s col-color"></div>
                <div className="col col-m col-color"></div>
                <div className="col col-l col-no-color"></div>
                <div className="suited-text-normal">Intermediate</div>
                <div className="suited-tick"></div>
              </li>
              <li className="suited-item">
                <div className="col col-s col-color"></div>
                <div className="col col-m col-color"></div>
                <div className="col col-l col-color"></div>
                <div className="suited-text-normal">Advance</div>
                <div className="suited-tick"></div>
              </li>
            </ul>
          </div>
          <div className="rate-write">
            <div className="rate-text-while">Write your Thoughts</div>
            <div className="write-box">
              <div className="write-box-text">
                This class is so amazing, I learnt a a lot of useful Techniques.
                Thank you for your dedication. This class is so amazing, I
                learnt a a lot of useful Techniques. Thank you for your
                dedication.This class is so amazing, I learnt a a lot of useful
                Techniques. Thank you for your dedication.This class is so
                amazing, I learnt a a lot of useful Technique...
              </div>
            </div>
          </div>
          <button className="rate-btn">Leave a Review</button>
        </div>
        {/**end rate */}
        {/** begin list review */}
        <div className="review-list">
          <div className="review-item">
            <div className="person-name">
              <img
                src="/images/learning/person1.png"
                alt=""
                className="person-img"
              />
              <div className="person-text-bold">David Shazam</div>
            </div>
            <div className="person-text-normal">
              This class is so amazing, I learnt a a lot of useful Techniques.
              Thank you for your dedication...
            </div>
            <div className="person-exceeded">
              <div className="person-text-normal">This class</div>
              <div className="person-text-bold">Exceeded</div>
              <div className="person-text-normal">my expectations!</div>
            </div>
            <div className="person-level">
              <div className="person-text-normal">Recommending for</div>
              <div className="person-text-bold">Intermediate Levels</div>
              <div className="person-text-time">Posted 1 month ago</div>
            </div>
          </div>
          <div className="review-item">
            <div className="person-name">
              <img
                src="/images/learning/person2.png"
                alt=""
                className="person-img"
              />
              <div className="person-text-bold">David Shazam</div>
            </div>
            <div className="person-text-normal">
              This class is so amazing, I learnt a a lot of useful Techniques.
              Thank you for your dedication...
            </div>
            <div className="person-exceeded">
              <div className="person-text-normal">This class</div>
              <div className="person-text-bold">Exceeded</div>
              <div className="person-text-normal">my expectations!</div>
            </div>
            <div className="person-level">
              <div className="person-text-normal">Recommending for</div>
              <div className="person-text-bold">Intermediate Levels</div>
              <div className="person-text-time">Posted 1 month ago</div>
            </div>
          </div>
          <div className="review-item">
            <div className="person-name">
              <img
                src="/images/learning/person3.png"
                alt=""
                className="person-img"
              />
              <div className="person-text-bold">David Shazam</div>
            </div>
            <div className="person-text-normal">
              This class is so amazing, I learnt a a lot of useful Techniques.
              Thank you for your dedication...
            </div>
            <div className="person-exceeded">
              <div className="person-text-normal">This class</div>
              <div className="person-text-bold">Exceeded</div>
              <div className="person-text-normal">my expectations!</div>
            </div>
            <div className="person-level">
              <div className="person-text-normal">Recommending for</div>
              <div className="person-text-bold">Intermediate Levels</div>
              <div className="person-text-time">Posted 1 month ago</div>
            </div>
          </div>
          <div className="review-item">
            <div className="person-name">
              <img
                src="/images/learning/person1.png"
                alt=""
                className="person-img"
              />
              <div className="person-text-bold">David Shazam</div>
            </div>
            <div className="person-text-normal">
              This class is so amazing, I learnt a a lot of useful Techniques.
              Thank you for your dedication...
            </div>
            <div className="person-exceeded">
              <div className="person-text-normal">This class</div>
              <div className="person-text-bold">Exceeded</div>
              <div className="person-text-normal">my expectations!</div>
            </div>
            <div className="person-level">
              <div className="person-text-normal">Recommending for</div>
              <div className="person-text-bold">Intermediate Levels</div>
              <div className="person-text-time">Posted 1 month ago</div>
            </div>
          </div>
        </div>
        {/**End reviews */}
      </div>
    </div>
  );
}

export default Review;
