"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  Button,
  Col,
  Divider,
  Input,
  InputRef,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { EyeOutlined, PlusOutlined } from "@ant-design/icons";

import "./index.scss";
import Lession from "./components/Lession";

let index = 0;

export function DetailCourse(): JSX.Element {
  const [activeTab, setActiveTab] = useState("videoLession");
  const options = [
    "Animation",
    "Photoshop",
    "Premiere",
    "Illustrator",
    "Figma",
    "Maya",
    "Zbrush",
  ];
  const [items, setItems] = useState(options);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const openConfirmModal = () => {
    setIsOpenConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <div className="detail_course_container default_container">
      <div className="d_flex justify_content_between">
        <h1 className="mb_4">Course title</h1>
        <div>
          <Button>Save Changes</Button>
          <Button type="primary" className="ms_4">
            Submit
          </Button>
        </div>
      </div>
      <div>
        <Link href={"/user/course_preview"}>
          <p className="link_pre">
            <EyeOutlined /> Preview course
          </p>
        </Link>
      </div>
      <div className="workspace">
        <Row>
          <Col span={6}>
            <div className="sidebar">
              <div>
                <h2 className="title">Edit</h2>
              </div>
              <div className="menu_container">
                <ul className="menu">
                  <li
                    className={`menu_item ${
                      activeTab === "videoLession" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("videoLession")}
                  >
                    <span>Video Lessons</span>
                  </li>
                  <li
                    className={`menu_item ${
                      activeTab === "classDetails" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("classDetails")}
                  >
                    <span>Class Details</span>
                  </li>
                </ul>
              </div>
              <div>
                <Button className="btn">Get Started With Teaching</Button>
                <Button className="btn">How Learning on MegaSkill Works</Button>
                <Button className="btn">Class Quality With Guideliness</Button>
                <Button className="btn">Filming & Editing Techniques</Button>
                <Button className="btn">Export Settings</Button>
                <Button className="btn">Uploading Help</Button>
              </div>
            </div>
          </Col>
          <Col span={18}>
            {activeTab === "videoLession" ? (
              <div className="content">
                <h4 className="mb_4">Video Lessons</h4>
                <div className="content_text">
                  <p className="para">
                    If you’re teaching your first class on MegaSkill, we
                    recommen reviewing Get Started With Teaching in our Help
                    Center for a full overview of the class creation process.
                  </p>
                  <p className="para">
                    In addition, please review our Class Quality With Guidelines
                    to learn all of our minimum requirements for classes on
                    MegaSkill. Below are some of our most important requirements
                    to keep in mind when planning your video lessons. Classes
                    must:
                  </p>
                  <ul className="content_text_list">
                    <li>Include at least 10 minutes of video content.</li>
                    <li>Meet our standards for audio & video quality.</li>
                    <li>
                      Limit self-promotion to first and last video lessons
                    </li>
                    <li>
                      Include a standalone introduction video that explains that
                      what the class is about.
                    </li>
                  </ul>
                </div>
                <div className="lession_list">
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Lession openConfirmModal={openConfirmModal}></Lession>
                    </Col>
                    <Col span={24}>
                      <Lession openConfirmModal={openConfirmModal}></Lession>
                    </Col>
                    <Col span={24}>
                      <Lession openConfirmModal={openConfirmModal}></Lession>
                    </Col>
                  </Row>
                  <div className="upload">
                    <Button>Upload video</Button>
                  </div>
                </div>
                <div>
                  <p className="note">
                    Have a question or want feedback on your class?{" "}
                    <a>Email us.</a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="content">
                <div>
                  <h4 className="mb_4">Class Details</h4>
                  <div className="content_text">
                    <p className="para">
                      If you’re teaching your first class on MegaSkill, we
                      recommen reviewing Get Started With Teaching in our Help
                      Center for a full overview of the class creation process.
                    </p>
                    <p className="para">
                      Additionally, we encourage you to review all of the
                      elements of your class to ensure it is optimized for
                      discoverability and SEO. Don’t forget to check for
                      spelling and other errors as well!
                    </p>
                  </div>
                  <hr></hr>
                  <h5 className="mb_3 mt_4">Class Language</h5>
                  <div className="content_text">
                    <p className="para">
                      Select the language you are teaching in your class in.
                      This information will help us accurately translate your
                      class for students around the world.
                    </p>
                    <Select
                      defaultValue="english"
                      className="Input fs_18"
                      style={{ width: "100%" }}
                      options={[
                        { value: "English", label: "English" },
                        { value: "Vietnamese", label: "Vietnamese" },
                        { value: "Chinese", label: "Chinese" },
                      ]}
                    />
                  </div>
                  <h5 className="mb_3 mt_4">Class Title</h5>
                  <div className="content_text">
                    <p className="para">
                      Keep your title between 30 and 70 characters. Review our
                      class title tips to learn how to draft a strong and
                      focused title.
                    </p>
                    <Input
                      className="Input fs_18"
                      placeholder="Class Title"
                    ></Input>
                  </div>
                  <h5 className="mb_3 mt_4">Project & Resources Description</h5>
                  <div className="content_text">
                    <p className="para">
                      Minimum 100 characters. Review our project description
                      tips for specific details on what should be included here
                      and to see a few examples.
                    </p>
                    <TextArea
                      rows={8}
                      className="fs_18"
                      placeholder="Project & Resources Description"
                    ></TextArea>
                  </div>
                  <Row>
                    <Col span={12}>
                      <h2 className="mb_3 mt_4">Category</h2>
                      <div className="content_text">
                        <Select
                          placeholder="Choose The Category"
                          className="Input fs_18"
                          style={{ width: "80%" }}
                          options={items.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                        />
                      </div>
                    </Col>
                    <Col span={12}>
                      <h2 className="mb_3 mt_4">Subcategory</h2>
                      <div className="content_text">
                        <Select
                          placeholder="Choose The Subcategory"
                          className="Input fs_18"
                          style={{ width: "80%" }}
                          options={[
                            { value: "English", label: "English" },
                            { value: "Vietnamese", label: "Vietnamese" },
                            { value: "Chinese", label: "Chinese" },
                          ]}
                        />
                      </div>
                    </Col>
                  </Row>
                  <h5 className="mb_3 mt_4">Level</h5>
                  <div className="content_text">
                    <Select
                      defaultValue="english"
                      className="Input"
                      style={{ width: "100%" }}
                      options={[
                        { value: "English", label: "English" },
                        { value: "Vietnamese", label: "Vietnamese" },
                        { value: "Chinese", label: "Chinese" },
                      ]}
                    />
                  </div>
                  <h5 className="mb_3 mt_4">Class Skills</h5>
                  <div className="content_text">
                    <p className="para">
                      Class skills tags help students find your class. MegaSkill
                      may also add tags to make your class more discoverable in
                      search results.
                    </p>
                    <Select
                      allowClear={true}
                      mode="multiple"
                      className="Input"
                      style={{ width: "100%" }}
                      placeholder="Class Skills"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <Divider style={{ margin: "8px 0" }} />
                          <Space style={{ padding: "0 8px 4px" }}>
                            <Input
                              placeholder="Enter tag"
                              ref={inputRef}
                              value={name}
                              onChange={onNameChange}
                              onKeyDown={(e) => e.stopPropagation()}
                            />
                            <Button
                              type="text"
                              icon={<PlusOutlined />}
                              onClick={addItem}
                            >
                              Add tag
                            </Button>
                          </Space>
                        </>
                      )}
                      options={items.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <p className="note">
                    Have a question or want feedback on your class?{" "}
                    <a>Email us.</a>
                  </p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
      <Modal open={isOpenConfirmModal} onCancel={closeConfirmModal} footer={[]}>
        <div className="modal_cf">
          <h1 className="mt_4 mb_4">
            Are you sure you want <br></br> to delete this lesson?
          </h1>
          <div className="d_flex justify_content_around">
            <Button className="btn_cf" onClick={closeConfirmModal}>
              CANCEL
            </Button>
            <Button className="btn_cf cf">YES, DELETE!</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
