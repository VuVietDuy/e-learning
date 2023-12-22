import React from "react";
import "./index.scss";
import { Image } from "antd";

function Discussions() {
  return (
    <div className="discussions">
      {/* hoi thoai 1 */}
      <div className="discussions-member">
        <Image src="/images/user/discussion4.png"></Image>
        <div className="discussions-member-chatbox">
          <button className="discussions-btn">Start a Conversation</button>
          <button className="discussions-btn">Ask a Question</button>
          <button className="discussions-btn">Share your Knowledge</button>
        </div>
      </div>
      <div className="discussions-member">
      <Image src="/images/user/discussion5.png"></Image>
        <div className="discussions-info">
          <div className="discussions-info-name">Wurvic Daniel</div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            (Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint)
          </div>
          <a href="" className="discussions-reply">
            Reply
          </a>
        </div>
      </div>
      {/* hoi thoai 2 */}
      <div className="discussions-member">
      <Image src="/images/user/discussion6.png"></Image>
        <div className="discussions-info">
          <div className="discussions-info-name">Wurvic Daniel</div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            (Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint)
          </div>
          <a href="" className="discussions-reply">
            Cancel Reply
          </a>
          <div className="discussions-info-reply">
          <Image src="/images/user/discussion7.png" width={48} height={48} className="margin-16"></Image>
            <div className="discussions-info-reply-contain">
              <div className="discussions-info-reply-icon">
                <div className="discussions-info-reply-icon-tag">
                  {" "}
                  <img src="/images/learning/iconlink.png" alt="" />
                </div>
                <div className="discussions-info-reply-icon-tag">
                  <img src="/images/learning/camera.png" alt="" />
                </div>
              </div>
              <div className="discussions-info-text padding-left-16">
                {" "}
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis en mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis en{" "}
              </div>
            </div>
          </div>
          <div className="discussions-info-reply">
          <Image src="/images/user/discussion7.png" width={100} height={48} className="margin-16"></Image>
            <div className="reply-add-img">
              <div className="add-img-icon">
                <img
                  src="/images/learning/anhmau.png"
                  alt=""
                  className="add-img"
                />
                <div className="add-icon-contain">
                  <img src="/images/learning/camera.png" alt="" />
                  <div className="add-icon-des">Add Images/Videos</div>
                </div>
              </div>
              <div className="discussions-info-text-bold">
                {" "}
                Mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat m mollit non.
              </div>
            </div>
          </div>
          {/* them file-anh*/}
          <div className="discussions-info-reply">
          <Image src="/images/user/discussion7.png" width={100} height={48} className="margin-16"></Image>
            <div className="reply-add-img">
              <div className="add-file">
                <ul className="add-file-list">
                  <li className="file-item">
                    <img src="/images/learning/iconlink.png" alt="" />
                    <div className="file-item-example">
                      Example Files 001.halo
                    </div>
                    <img
                      src="/images/learning/exit.png"
                      alt=""
                      className="h-16"
                    />
                  </li>
                  <li className="file-item">
                    <img src="/images/learning/iconlink.png" alt="" />
                    <div className="file-item-example">
                      Example Files 001.halo
                    </div>
                    <img
                      src="/images/learning/exit.png"
                      alt=""
                      className="h-16"
                    />
                  </li>
                  <li className="file-item">
                    <img src="/images/learning/iconlink.png" alt="" />
                    <div className="file-item-example">
                      Example Files 001.halo
                    </div>
                    <img
                      src="/images/learning/exit.png"
                      alt=""
                      className="h-16"
                    />
                  </li>
                  <li className="file-item">
                    <img src="/images/learning/iconlink.png" alt="" />
                    <div className="file-item-example">
                      Example Files 001.halo
                    </div>
                    <img
                      src="/images/learning/exit.png"
                      alt=""
                      className="h-16"
                    />
                  </li>
                </ul>
                <div className="add-icon-contain">
                  <img src="/images/learning/iconlink.png" alt="" />
                  <div className="add-icon-des">Add Files</div>
                </div>
              </div>
              <div className="discussions-info-text-bold">
                {" "}
                Mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat m mollit non.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hoi thoai 3 */}
      <div className="discussions-member">
      <Image src="/images/user/discussion4.png"></Image>
        <div className="discussions-info">
          <div className="discussions-info-name">Wurvic Daniel</div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="discussions-info-text">
            (Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint)
          </div>
          <a href="" className="discussions-reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
}

export default Discussions;
