import React from "react";
import "./index.scss";
import Layout1 from "../HomePage/Layout1";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export function IntroductionPage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="IntroductionPage">
        <div className="Body">
          <div className="part1">
            <div>
              <h1>Get One Free Month of GraFish</h1>
              <h3>
                Explore thousands of creative classes with one inspiring
                membership
              </h3>
            </div>
            <div className="login-pic">
              {children}
              <img className="picture1" src="/images/intro-img.png" alt="" />
            </div>
          </div>

          <div className="part2">
            <div>
              <h2>Learn from Professional Artists</h2>
              <br />
              <h3>
                GraFish classes are taught by industry leaders excited to share
                their tools,<br></br> techniques, and professional journeys with
                you
              </h3>
            </div>
            <Layout1></Layout1>
          </div>

          <div className="part3">
            <h2>Get Creative With GraFish</h2>
            <ul>
              <li>
                <CheckCircleOutlined className="text_green" />
                <p>
                  Learn creative skills to achieve your personal and
                  professional goals.
                </p>
              </li>
              <li>
                <CheckCircleOutlined className="text_green" />
                <p>Tune in and level up at your own pace.</p>
              </li>
              <li>
                <CheckCircleOutlined className="text_green" />
                <p>Go from dabbler to master in a matter of hours.</p>
              </li>
              <li>
                <CheckCircleOutlined className="text_green" />
                <p>Connect with a global community of curious creatives.</p>
              </li>
            </ul>
          </div>

          <div className="part4">
            <div className="title">
              <h2>Thousands of classes</h2>
              <h2>Mentors from all over the world.</h2>
            </div>
            <div className="word-pic">
              <div className="word">
                <div>
                  <h3>
                    Learn at your own pace with hands-on creative classes.
                  </h3>
                  <br />
                  <div className="line"></div>
                  <br />
                  <p>
                    With real world projects to create and online classes that
                    fit a busy routine, GraFish makes real learning and growth
                    possible.
                  </p>
                  <br />
                </div>
                <br />
                <br />
                <Button className="getStarted">Get Started For Free</Button>
              </div>
              <img className="pic" src="/images/intro-img.png" alt="" />
            </div>
          </div>

          <div className="part5">
            <div className="quote">
              <h2>Why Students Love GraFish</h2>
              <br />
              <p>
                Whether it’s a first brush on canvas or the last frame in an
                animation, GraFish is here to support you on every step of your
                creative journey.
              </p>
            </div>
            <div className="quote">
              <h3>
                “I come to GraFish for the curation and class quality. That’s
                really worth the cost of membership to me.”
              </h3>
              <br />
              <h4>-Jacob B, Megaskill student</h4>
            </div>
            <div className="quote">
              <h3>
                “I have an understanding that, even if the work is not perfect,
                it’s a work in progress. And the reason why I’m on GraFish is to
                develop a skill. I feel that it’s a safe space.”
              </h3>
              <br />
              <h4>-Jacob B, Megaskill student</h4>
            </div>
          </div>

          <div className="part6">
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
              <li>
                <div className="line"></div>
                <br />
                <div className="word">
                  <p>What is GraFish?</p>
                  <p>+</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="part7">
            <h2>Start learning with us.</h2>
            <Button className="joinus">Join our Community</Button>
          </div>
        </div>
      </div>
      <div className="Footer">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>&copy;&nbsp;GraFish, Inc. 2023</p>
      </div>
    </div>
  );
}
