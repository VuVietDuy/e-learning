import { Avatar, Button, Card, Typography } from "antd";
import React from "react";
import "./index.scss";
const { Paragraph } = Typography;

function NoticeItem() {
  return (
    <div>
      <Card bodyStyle={{ borderColor: "#D9D9D9" }}>
        <div className="user">
          <Avatar>U</Avatar>
          <div className="info">
            <p>
              <b>Trần Tuấn Linh</b>
            </p>
            <p>
              <b>Trần Tuấn Linh</b> posted a new blog
            </p>
          </div>
        </div>
        <div className="notice_content">
          <Paragraph ellipsis={{ rows: 3 }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet ...
          </Paragraph>
        </div>
        <div className="notice_footer">
          <div className="notice_time">3 week ago</div>
          <div>
            <Button className="cmt_btn" size="small">
              Comment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NoticeItem;
