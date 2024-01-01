import React from "react";
import "./index.scss";
import { Rate } from 'antd';


export function Fillter() {
  const zeroStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M7.36119 1.4652C7.82267 0.769661 8.844 0.769662 9.30548 1.4652L11.3297 4.51611C11.4848 4.74975 11.7187 4.91975 11.9888 4.99499L15.516 5.97738C16.3201 6.20134 16.6357 7.17268 16.1168 7.82651L13.8407 10.6945C13.6664 10.9141 13.577 11.1892 13.589 11.4693L13.7446 15.1274C13.7801 15.9613 12.9538 16.5616 12.1716 16.2702L8.74069 14.9918C8.47794 14.8939 8.18872 14.8939 7.92598 14.9918L4.49505 16.2702C3.71287 16.5616 2.8866 15.9613 2.92208 15.1274L3.0777 11.4693C3.08962 11.1892 3.00025 10.9141 2.82594 10.6945L0.549886 7.82651C0.0309941 7.17268 0.346601 6.20134 1.15071 5.97738L4.67782 4.99499C4.94793 4.91975 5.18192 4.74975 5.33694 4.51611L7.36119 1.4652Z"
        fill="#D9D9D9"
      />
    </svg>
  );
  const Star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M7.36119 1.4652C7.82267 0.769661 8.844 0.769662 9.30548 1.4652L11.3297 4.51611C11.4848 4.74975 11.7187 4.91975 11.9888 4.99499L15.516 5.97738C16.3201 6.20134 16.6357 7.17268 16.1168 7.82651L13.8407 10.6945C13.6664 10.9141 13.577 11.1892 13.589 11.4693L13.7446 15.1274C13.7801 15.9613 12.9538 16.5616 12.1716 16.2702L8.74069 14.9918C8.47794 14.8939 8.18872 14.8939 7.92598 14.9918L4.49505 16.2702C3.71287 16.5616 2.8866 15.9613 2.92208 15.1274L3.0777 11.4693C3.08962 11.1892 3.00025 10.9141 2.82594 10.6945L0.549886 7.82651C0.0309941 7.17268 0.346601 6.20134 1.15071 5.97738L4.67782 4.99499C4.94793 4.91975 5.18192 4.74975 5.33694 4.51611L7.36119 1.4652Z"
        fill="#525252"
      />
    </svg>
  );
  return (
    <div className="Fillter">
      <div className="classLevel">
        <h3>CLASS LEVEL</h3>
        <div className="standard">
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Beginner</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Intermediate</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Advance</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Any Level</span>
            </div>
            <span className="resNum">3200</span>
          </div>
        </div>
      </div>

      <div className="classRating">
        <h3>CLASS RATING</h3>
        <div className="standard">
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="rating" />
              <div className="starRating">
                <Rate disabled defaultValue={5}></Rate>
                
              </div>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="rating" />
              <div className="starRating">
              <Rate disabled defaultValue={4}></Rate>
              </div>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="rating" />
              <div className="starRating">
              <Rate disabled defaultValue={3}></Rate>
              </div>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="rating" />
              <div className="starRating">
              <Rate disabled defaultValue={2}></Rate>
              </div>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="rating" />
              <span>Any Level</span>
            </div>
            <span className="resNum">3200</span>
          </div>
        </div>
      </div>

      <div className="publishDate">
        <h3>PUBLISH DATE</h3>
        <div className="standard">
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="date" />
              <span>Past Week</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="date" />
              <span>Pass Month</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="date" />
              <span>Pass 6 Months</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="date" />
              <span>Past Year</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="radio" className="square" name="date" />
              <span>All Time</span>
            </div>
            <span className="resNum">3200</span>
          </div>
        </div>
      </div>

      <div className="classLanguage">
        <h3>CLASS LANGUAGE</h3>
        <div className="standard">
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>English</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Spanish</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>French</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Chinese</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>All Languages</span>
            </div>
            <span className="resNum">3200</span>
          </div>
        </div>
      </div>

      <div className="classLength">
        <h3>CLASS LENGTH</h3>
        <div className="standard">
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>&lt; &nbsp;30 min</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>30 - 60 min</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>&gt; &nbsp;60 min</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>Over 2 hours</span>
            </div>
            <span className="resNum">3200</span>
          </div>
          <div className="standardChild">
            <div className="check-word">
              <input type="checkbox" className="square" />
              <span>All Lengths</span>
            </div>
            <span className="resNum">3200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
