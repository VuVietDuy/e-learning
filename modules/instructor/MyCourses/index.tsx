"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import "./style.scss";

export function MyCourses(): JSX.Element {
  const router = useRouter();
  /* eslint-disable no-unused-vars */
  const editCourse = () => {
    router.push("/instructor/detail_course");
  };

  const newCourse = () => {
    router.push("/instructor/detail_course");
  };

  return (
    <div className="default_container my_courses_container">
      <div className="header d_flex justify_content_between">
        <h2>My Courses</h2>
        <Button onClick={newCourse}>New course</Button>
      </div>
      <div className="courses d_flex justify_content_between align_item_center">
        <div className="d_flex justify_content_between align_item_center">
          <Image
            src="/images/instructor/course_thumpail.png"
            alt=""
            width={232}
            height={144}
          ></Image>
          <h3 className="ms_4">Course title</h3>
        </div>
        <div>
          <Button onClick={editCourse}>Edit</Button>
          <Button className="ms_4">
            <DeleteFilled />
          </Button>
        </div>
      </div>
      <div className="courses d_flex justify_content_between align_item_center">
        <div className="d_flex justify_content_between align_item_center">
          <Image
            src="/images/instructor/course_thumpail.png"
            alt=""
            width={232}
            height={144}
          ></Image>
          <h3 className="ms_4">Course title</h3>
        </div>
        <div>
          <Button onClick={editCourse}>Edit</Button>
          <Button className="ms_4">
            <DeleteFilled />
          </Button>
        </div>
      </div>
      <div className="courses d_flex justify_content_between align_item_center">
        <div className="d_flex justify_content_between align_item_center">
          <Image
            src="/images/instructor/course_thumpail.png"
            alt=""
            width={232}
            height={144}
          ></Image>
          <h3 className="ms_4">Course title</h3>
        </div>
        <div>
          <Button onClick={editCourse}>Edit</Button>
          <Button className="ms_4">
            <DeleteFilled />
          </Button>
        </div>
      </div>
    </div>
  );
}
