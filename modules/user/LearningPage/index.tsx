import React from "react";

import './index.scss'
import { CheckOutlined, PauseCircleFilled, PauseOutlined, PlayCircleOutlined, StarFilled, StarOutlined, StepBackwardOutlined } from "@ant-design/icons";
import Discussions from "./Layout2/Discussions";
import Review from "./Layout2/Review";
import ProjectsResources from "./Layout2/ProjectsResources";
import AboutOption from "./Layout2/AboutOption";
import Layout2 from "./Layout2";

export function LearningPage() {
    return (
        <div className="LearningPage">
            {/* phan 1- learning video */}
            <div className="learning-main">
                <div className="learning-contain">

                    <div className="learning-video">
                        {/* <video controls src="https://www.youtube.com/watch?v=CvcIDBhRjqk" className="learning-video-watch"></video> */}
                        <iframe width="660" height="346" src="https://www.youtube.com/embed/2TKS1ifrhqI?si=HSVbf1-s42k-27MB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="learning-lessons">
                        <div className="learning-lessons-title">
                            <div className="learning-lessons-title-main">100 Lessons</div>
                            <div className="learning-lessons-title-time">(22h 15m)</div>
                        </div>
                        <ul className="learning-lessons-list">
                            <li className="learning-lessons-item">
                                <PauseCircleFilled className="check-icon"></PauseCircleFilled>
                                <div className="learning-lessons-item-index">001.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">002.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">003.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">004.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">005.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">006.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">007.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>
                            <li className="learning-lessons-item">
                            <CheckOutlined className="check-icon"></CheckOutlined>
                                <div className="learning-lessons-item-index">008.</div>
                                <div className="learning-lessons-item-introduction">Introduction</div>
                                <div className="learning-lessons-item-time">12:00</div>
                            </li>

                            
                            
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="learning-descript">
                    <div className="learning-descript-title">Advance Anatomy For Character Artists</div>
                    <div className="learning-descript-author">
                        <div className="learning-descript-author-name">Teddy Swim, A Specialist in CG Tutorials</div>
                        <div className="learning-descript-author-follow">Following</div>
                    </div>
                </div>
            </div>
            {/* nav learning*/}
            <Layout2></Layout2>
        </div>
    )
}