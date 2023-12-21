"use client";
import React from "react";
import "./index.scss";
import Comment from "@/components/Comment";
import { BranchesOutlined, ClockCircleOutlined, DownloadOutlined, FundProjectionScreenOutlined, GlobalOutlined, TranslationOutlined } from "@ant-design/icons";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";

export function CoursePreview() {
  return (
    <div className="coursepreview">
      <div className="course__slider">
        <div className="slider-contain">
          <div className="slider-title">
            Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D Meta
            Human
          </div>
          <div className="slider-des">
            Learn to create robots like hard surface design character with
            Zbrush and Keyshot.
          </div>
          <div className="slider-rate">
            <div className="slider-rate-icon"><Rate disabled defaultValue={5}></Rate></div>
            <div className="slider-rate-content">
              <div className="slider-rate-content-rating">
                (100,558 ratings)
              </div>
              <div className="slider-rate-content-vol">10,288 students</div>
            </div>
          </div>
          <div className="slider-link">
            <div className="slider-link-created">Created by</div>
            <a href="" className="slider-link-nuke">
              Nuke Family Packages
            </a>
          </div>
          <div className="slider-date">
            <div className="slider-date-pushlish">
              <div className="slider-date-pushlish-info">Publish Date:</div>
              <div className="slider-date-pushlish-time">08/08/2023</div>
            </div>
            <div className="slider-date-language">
              <GlobalOutlined /> English{" "}
            </div>
            <div className="slider-date-country">
              <TranslationOutlined /> English, French, Chinese [Auto]
            </div>
          </div>
        </div>
      </div>
      <div className="course__content">
        <div className="course__1">
          <Row>
            <Col span={16}>
              <div className="course__1-body">
                <div className="course__1-body-title">About This Class</div>
                <ul className="course__1-body-list">
                  <li className="course__1-body-item">
                    Do you think sculpting Human anatomy is not your cup of tea ?
                  </li>
                  <li className="course__1-body-item">
                    Have you tried learning anatomy before but felt overwhelmed and
                    quit ?
                  </li>
                  <li className="course__1-body-item">
                    Then, this class is the right class for you. Welcome you to
                    Dynamic Male Anatomy for Artists in Zbrush class.
                  </li>
                  <li className="course__1-body-item">
                    My name is Teddy Swims, I'm a freelancer character artist, with
                    many years of experience on sculpting statues of heroes and
                    movie characters.{" "}
                  </li>
                </ul>
                <div className="course__1-body-title">Benefits:</div>
                <div className="course__1-body-list">
                  At the end of this class, your fear of Anatomy will vanish and you
                  will be able to sculpt Human anatomy with ease and create stunning
                  realistic characters.
                </div>
                <div className="course__1-body-title">
                  In this class, We will be covering:
                </div>
                <div className="course__1-body-des">
                  <div className="course__1-body-des-list">
                    <li className="des-list-item">Sculpting All the Muscles.</li>
                    <li className="des-list-item">Sculpting a Final Male Body.</li>
                    <li className="des-list-item">Making a Dynamic Pose.</li>
                    <li className="des-list-item">
                      Sculpting Anatomy in Dynamic Pose.
                    </li>
                    <li className="des-list-item">Sculpting All the Muscles.</li>
                  </div>
                  <ul className="course__1-body-list">
                    <li className="course__1-body-item">
                      In this class, we sculpt a complete anatomical model,
                      simultaneously between we do a complete human male body, in a
                      flesh and skin model.
                    </li>
                    <li className="course__1-body-item">
                      This way we can better understand each muscle and bones that
                      compose the entire surface of the body, and also figure out
                      how it can affect the volume under the skin.
                    </li>
                    <li className="course__1-body-item">
                      Once we cover all the body, we also bring the character to a
                      very dynamic pose, understanding how the anatomical structure
                      will deforms when it comes to bring gesture and life to the
                      model.
                    </li>
                  </ul>
                  <div className="course__1-body-des-list">
                    <li className="des-list-item">
                      This class is designed for intermediate Zbrush users who are
                      looking to improve their anatomy sculpting skills.
                    </li>
                    <li className="des-list-item">
                      Basics knowledge of Zbrush is required to follow along with
                      this class. This class is fully real time recorded and
                      narrated.
                    </li>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <Card className="border_black">
                <div className="pay-img">
                </div>
                <div className="pay-price">
                  <div className="pay-price-cash">
                    <div className="pay-price-origin">
                      <div className="pay-price-origin-up">500$ </div>
                      <div className="pay-price-origin-down">820$ </div>
                    </div>
                    <div className="pay-price-discount">23% off</div>
                    <div className="pay-price-time">
                      <div className="pay-price-time-icon"></div>
                      <div className="pay-price-time-hour"><ClockCircleOutlined /> 5 hours</div>
                      <div className="pay-price-time-left">left at this price!</div>
                    </div>
                  </div>
                </div>
                <button className="bg_green pay-buy-now">Add to cart</button>
                <button className="pay-buy-now pay-buy-now2">Buy Now</button>
                <div className="pay-buy-left">30-Day Money-back Guarantee</div>
                <div className="pay-course">
                  <div className="pay-course-include">This course includes:</div>
                  <ul className="pay-course-list">
                    <li className="pay-course-item"><FundProjectionScreenOutlined /> 12 hours on-demand video</li>
                    <li className="pay-course-item"><DownloadOutlined /> 55 downloadable resources</li>
                    <li className="pay-course-item"><BranchesOutlined /> Full lifetime access</li>
                  </ul>
                </div>
                <div className="pay-coupon">
                  <div className="pay-apply-coupon">Apply Coupon</div>
                  <div className="pay-coupon-btn">
                    <input
                      type="text"
                      placeholder="HKML ABGF LOKI"
                      className="pay-coupon-input"
                    />
                    <button className="pay-coupon-enter">Enter</button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="course__2">
          <div className="course-title">
            <div className="course-title-icon"></div>
            <div className="course-title-info">
              5 course rating 100K ratings
            </div>
          </div>
          <div className="course__2-list">
            <Comment
              name="Duy"
              time="a week ago"
              star={3}
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..."
            ></Comment>
            <Comment
              name="Duy"
              time="a week ago"
              content="Amet minim mollit non deserunt. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Velit officia consequat duis enim velit mollit."
              star={3}
            ></Comment>
          </div>
          <div className="course__2-btn">
            <button className="show-all">Show all reviews</button>
          </div>
        </div>
        <div className="course__3">
          <div className="course-title-info">Students also bought</div>
          <div className="course-3-body">
            <div className="course-3-img">
              <Image src={"/images/user/course_preview.png"} alt="" width={317} height={180}></Image>
            </div>
            <div className="course-3-des">
              <div className="course-3-des-1">
                Dynamic Male Anatomy for Artists in Mudbox: Make realistic 3D
                Meta Human
              </div>
              <div className="course-3-des-2-contain">
                <div className="course-3-des-2-1">
                  <div className=" fz-20">Ginger Bear</div>
                  <div className="des-2-2">icon star</div>
                  <div className="des-2-3 flex">
                    <div className=" fz-20 ml5">1d 5h 28m</div>
                    <div className=" fz-20">1,313,581 Students</div>
                  </div>
                  <div className="des-2-4">
                    <div className="des-2-4-1">Publish Date:</div>
                    <div className="fz-20">02/04/2023</div>
                  </div>
                </div>
                <div className="course-3-des-2-2">
                  <div className="course-3-des-2-2-1">23% off</div>
                  <div className="course-3-des-2-2-2">820$</div>
                  <div className="course-3-des-2-2-3">500$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
