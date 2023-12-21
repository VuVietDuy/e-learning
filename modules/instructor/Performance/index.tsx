"use client";
import React from "react";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Review from "./components/Review";
import StudentInfo from "./components/StudentInfo";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Rate,
  Select,
  TimePicker,
} from "antd";

export function Performance() {
  const [activeTab, setActiveTab] = useState("revenue");

  // function changeStar(starNum){
  //   switch(starNum){
  //     case 1:{
  //       return(
  //         <div className='starRate'>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             </div>
  //       );
  //     }
  //     case 2:{
  //       return(
  //         <div className='starRate'>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             </div>
  //       );
  //     }
  //     case 3:{
  //       return(
  //         <div className='starRate'>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             </div>
  //       );
  //     }
  //     case 4:{
  //       return(
  //         <div className='starRate'>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/nonStar.png" alt="" width={"24px"} height={"24px"}/>
  //             </div>
  //       );
  //     }
  //     default:{
  //       return(
  //         <div className='starRate'>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             <img src="/icon/Star.png" alt="" width={"24px"} height={"24px"}/>
  //             </div>
  //       );
  //     }
  //   }
  // }

  // function changePercent(){
  //   document.getElementById("blueBar5").style.width = "461px";
  //   document.getElementById("blueBar4").style.width = "26px";
  //   document.getElementById("blueBar3").style.width = "10px";
  //   document.getElementById("blueBar2").style.width = "10px";
  //   document.getElementById("blueBar1").style.width = "0px";

  // }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setActiveTab(value);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="Performance">
      <div className="Header">
        <div className="title">Performance</div>
        <div className="category">
          <Select
            defaultValue="revenue"
            style={{ width: 150, height: 49 }}
            onChange={handleChange}
            options={[
              { value: "revenue", label: "Revenue" },
              { value: "students", label: "Students" },
              { value: "review", label: "Reviews" },
            ]}
          />
        </div>
      </div>

      <div className="Body">
        <div
          id="revenue"
          className={`Revenue ${
            activeTab === "revenue" ? "d_block" : "d_none"
          }`}
        >
          <div className="getTop">Get top insights about your performance</div>
          <div className="lineGraph">
            <div className="allTopic">
              <div className="element">
                <div className="topic">Total revenue</div>
                <div className="num">$200.00</div>
                <div className="thisMonth">$50.26 this month</div>
              </div>
              <div className="element">
                <div className="topic">Total enrollments</div>
                <div className="num">2,1220</div>
                <div className="thisMonth">16 this month</div>
              </div>
              <div className="element">
                <div className="topic">Teacher rating</div>
                <div className="num">5,00</div>
                <div className="thisMonth">8 ratings this month</div>
              </div>
            </div>

            <div className="dateRange">
              <div className="dateRange-title">Data range:</div>
              <DatePicker onChange={onChange} picker="month" />
            </div>

            <div className="">
              <canvas id="myChart" height={200} />
            </div>

            <div className="export-withdraw">
              <Button className="export" size="large">
                Export Revenue Report
              </Button>
              <Button className="withdraw bg_green" size="large">
                Withdraw Money
              </Button>
            </div>
          </div>
        </div>

        <div
          id="students"
          className={`Students ${
            activeTab === "students" ? "d_block" : "d_none"
          }`}
        >
          <div className="getTop">See people taking your course</div>
          <div className="student-statistic">
            <div className="studentNum">
              20 <span className="students-text">Students</span>
            </div>
            <div>
              Region:{" "}
              <button className="region-button">
                America <DownOutlined></DownOutlined>
              </button>
            </div>
            <div>
              Country:{" "}
              <button className="country-button">
                United States <DownOutlined></DownOutlined>
              </button>
            </div>
          </div>
          <div className="allStudent">
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
            <StudentInfo></StudentInfo>
          </div>
        </div>

        <div
          id="review"
          className={`Reviews ${activeTab === "review" ? "d_block" : "d_none"}`}
        >
          <div className="getTop">See Students feedback</div>

          <div className="Rating">
            <div className="overallRating">
              <div className="rateNum">4.8</div>
              <div id="hello" className="starRate">
                <Rate disabled defaultValue={2} />;
              </div>
              <div className="getTop">Course Rating</div>
            </div>

            <div className="rateStatistic">
              <div className="RatingPercent">
                <div className="greyBar">
                  <div id="blueBar5" className="blueBar"></div>
                </div>
                <div className="starRate">{/* {changeStar(5)} */}</div>
                <div className="percent">90%</div>
              </div>
              <div className="RatingPercent">
                <div className="greyBar">
                  <div id="blueBar4" className="blueBar"></div>
                </div>
                <div className="starRate">{/* {changeStar(4)} */}</div>
                <div className="percent">5%</div>
              </div>
              <div className="RatingPercent">
                <div className="greyBar">
                  <div id="blueBar3" className="blueBar"></div>
                </div>
                <div className="starRate">{/* {changeStar(3)} */}</div>
                <div className="percent">2%</div>
              </div>
              <div className="RatingPercent">
                <div className="greyBar">
                  <div id="blueBar2" className="blueBar"></div>
                </div>
                <div className="starRate">{/* {changeStar(2)} */}</div>
                <div className="percent">2%</div>
              </div>
              <div className="RatingPercent">
                <div className="greyBar">
                  <div id="blueBar1" className="blueBar"></div>
                </div>
                <div className="starRate">{/* {changeStar(1)} */}</div>
                <div className="percent">0%</div>
              </div>
            </div>
          </div>

          <div className="AllReviews">
            <div className="reviewTitle">Reviews</div>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
          </div>
        </div>
      </div>
    </div>
  );
}
