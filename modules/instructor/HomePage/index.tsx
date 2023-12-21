"use client";
import React from "react";
import { MinusOutlined } from "@ant-design/icons";

import "./index.scss";

export function HomePage(): JSX.Element {
  return (
    <div className="homePage">
      <div className="part1">
        <img src="/images/instructor/banner.png" alt="" className="poster" />
        <div className="content">
          <div className="text-content">Inspire Creativity in Others.</div>
          <div className="text-des font22 bold">
            Teach on MegaSkill and share your passion with members around the
            world.
          </div>
          <button className="btn-start bold">Start a Class</button>
        </div>
      </div>
      <div className="part2">
        <div className="text bold font28 pt-64 ">Why Teach on MegaSkill</div>
        <div className="text font18 p-24">
          When you helps others along their their creative journey, it’s
          rewarding in more ways than one.
        </div>
        <div className="text font16">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. iqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. quat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. iqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </div>
        <div className="list-people">
          <div className="item">
            <img
              src="/images/instructor/ellipse1.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Earn Money</div>
            <div className="text font20">
              “Teaching on MegaSkill gives me the financial flexibility to take
              on only the work I’m most passionate about.”
            </div>
            <div className="text font16 pt-24 blue">Donal Reynoids</div>
            <div className="text font14 pt-16 ">MegaSkill Instructor</div>
          </div>
          <div className="item pd-24">
            <img
              src="/images/instructor/ellipse2.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Earn Money</div>
            <div className="text font20">
              “Teaching on MegaSkill gives me the financial flexibility to take
              on only the work I’m most passionate about.”
            </div>
            <div className="text font16 pt-24 blue">Donal Reynoids</div>
            <div className="text font14 pt-16 ">MegaSkill Instructor</div>
          </div>
          <div className="item">
            <img
              src="/images/instructor/ellipse3.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Earn Money</div>
            <div className="text font20">
              “Teaching on MegaSkill gives me the financial flexibility to take
              on only the work I’m most passionate about.”
            </div>
            <div className="text font16 pt-24 blue">Donal Reynoids</div>
            <div className="text font14 pt-16 ">MegaSkill Instructor</div>
          </div>
        </div>
      </div>

      <div className="part3">
        <img src="/img/img4.png" alt="" className="img-float" />
        <div className="part3-content">
          <div className="text font28 bold pt-88">
            Teaching on MegaSkill helped Marry Jones see her worl in a whole new
            way, and inspire members all over the world.
          </div>

          <div className="text font16 p-24">
            Meet Marry Jones McDonald, Zbrush For Character Artists
          </div>
          <button className="btn-watch-story">
            <div className="text font22">Watch Her Story</div>
          </button>
        </div>
      </div>
      <div className="part2 ">
        <div className="text font28 bold">How Teaching Works</div>
        <div className="list-people mb-100">
          <div className="item">
            <img
              src="/images/instructor/icon1.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Apply to Teach</div>
            <div className="text font20">
              Start an account and submit your application. We will notify you
              once your’re approved, typically within 2 weeks.
            </div>

            <div className="text font16 pt-24 blue">Learn More</div>
          </div>
          <div className="item pd-24">
            <img
              src="/images/instructor/icon2.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Create Your First Class</div>
            <div className="text font20">
              Film your MegaSkill class and publish it with our easy class
              upload tool. We provide help every step of the way. For English
              apllicants, you’re encouraged to create your first class via one
              of our teacher programs for first time teachers.
            </div>

            <div className="text font16 pt-24 blue">Learn More</div>
          </div>
          <div className="item">
            <img
              src="/images/instructor/icon3.png"
              alt=""
              className="img-item"
            />
            <div className="text bold font22 p-24">Start Earning</div>
            <div className="text font20">
              You’ll be paid monthly for every member who watched your
              classNamees, forever. Top earning teachers make $100,000+ a year.
            </div>
            <div className="text font16 pt-24 blue ">Learn More</div>
          </div>
        </div>
      </div>

      <div className="part5">
        <img
          src="/images/instructor/banner1.png"
          alt=""
          className="img-program"
        />
        <div className="content">
          <div className="text font46">New Teacher Programs</div>
          <div className="text font24 p-24">
            Our new teacher programs are designed to help new teachers create
            their first class and successfully launch their teaching journey on
            MegaSkill with feedback and support from our team and community.
            You’ll be invited into one of the programs once you are approved to
            teach.
          </div>
          <button className="btn-learnMore font22">Learn More</button>
        </div>
      </div>
      <div className="part6">
        <div className="frequenly-ask">Frequently Asked Questions</div>
        <div className="list-ques">
          <div className="item-ques">
            <div className="item-ques-contain">
              <div className="name-ques">What is GraFish?</div>
              <div className="as-ques">
                GraFish is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On Skillshare, you’ll find inspiration from hands-on classes and
                teachers at the top of their creative fields, so you can take
                the next step in your creative journey.
              </div>
            </div>
            <div className="item-ques-icon">
              <MinusOutlined></MinusOutlined>
            </div>
          </div>
          <div className="item-ques">
            <div className="item-ques-contain">
              <div className="name-ques">What is GraFish?</div>
              <div className="as-ques">
                GraFish is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On Skillshare, you’ll find inspiration from hands-on classes and
                teachers at the top of their creative fields, so you can take
                the next step in your creative journey.
              </div>
            </div>
            <div className="item-ques-icon">
              <MinusOutlined></MinusOutlined>
            </div>
          </div>
          <div className="item-ques">
            <div className="item-ques-contain">
              <div className="name-ques">What is GraFish?</div>
              <div className="as-ques">
                GraFish is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On Skillshare, you’ll find inspiration from hands-on classes and
                teachers at the top of their creative fields, so you can take
                the next step in your creative journey.
              </div>
            </div>
            <div className="item-ques-icon">
              <MinusOutlined></MinusOutlined>
            </div>
          </div>
          <div className="item-ques">
            <div className="item-ques-contain">
              <div className="name-ques">What is GraFish?</div>
              <div className="as-ques">
                GraFish is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On Skillshare, you’ll find inspiration from hands-on classes and
                teachers at the top of their creative fields, so you can take
                the next step in your creative journey.
              </div>
            </div>
            <div className="item-ques-icon">
              <MinusOutlined></MinusOutlined>
            </div>
          </div>
          <div className="item-ques">
            <div className="item-ques-contain">
              <div className="name-ques">What is GraFish?</div>
              <div className="as-ques">
                GraFish is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more.
                On Skillshare, you’ll find inspiration from hands-on classes and
                teachers at the top of their creative fields, so you can take
                the next step in your creative journey.
              </div>
            </div>
            <div className="item-ques-icon">
              <MinusOutlined></MinusOutlined>
            </div>
          </div>
        </div>
        <div className="start-teaching">Start teaching with us.</div>
        <div className="start-class">
          <button className="btn-start-class">Start a Class</button>
        </div>
      </div>
    </div>
  );
}
