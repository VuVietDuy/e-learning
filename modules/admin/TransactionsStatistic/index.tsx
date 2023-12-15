'use client'
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {Button, Card, Col, DatePicker, Row, Table} from "antd";
import {
  BarChartOutlined,
  DollarOutlined,
  SnippetsOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./index.scss";

export function Dashboard(): JSX.Element {
  const canvasEl = useRef<any>();
  const [selectedDateRange, setSelectedDateRange] = useState<[]>([]);
  const [chartLabels, setChartLabels] = useState<any>([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ]);
  const [dataInit, setDataInit] = useState<any>();
  const [dataChart, setDataChart] = useState<any>();
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());


  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(90, 217, 255, 1)",
      half: "rgba(90, 217, 255, 0.5)",
      quarter: "rgba(90, 217, 255, 0.25)",
      zero: "rgba(90, 217, 255, 0)",
    },
  };

  let bookingCounter = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ];

  let bookingSalesInMonth = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ];


  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Mã nhân viên",
      dataIndex: "helperInformationId",
      key: "helperInformationId",
    },
    {
      title: "Số đơn",
      dataIndex: "counter",
      key: "counter",
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_: any, dataIndex: any) => (
        <Button
          type="primary"
          style={{borderRadius: "25px"}}
          onClick={() => handleViewMore(dataIndex.helperInformationId)}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  const handleViewMore = (helperId: string) => {
    console.log(helperId);
  };

  const handleDateChange = (dates: any, dateStrings: any) => {
    if (dates) {
      console.log("Month selected:", dates._d.getMonth() + 1);
      console.log("Year selected:", dates._d.getFullYear());
      setMonth(dates._d.getMonth() + 1);
      setYear(dates._d.getFullYear());
    }
  };

  return (
    <div className="transaction-statistics-container">
      <Row gutter={[32, 24]}>
        <Col span={6}>
          <Card>
            <div className="card_container">
              <div className="icon_container">
                <TeamOutlined className="icon" size={32} />
              </div>
              <div className="figure_container">
                <span className="figure_title">Tổng người dùng</span>
                <span className="figure_content">
                  2534
                  {dataInit?.sumOfAllUserWithoutAdmin}
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="card_container">
              <div className="icon_container">
                <SnippetsOutlined className="icon" size={32} />
              </div>
              <div className="figure_container">
                <span className="figure_title">Tổng khoá học</span>
                <span className="figure_content">
                  124
                  {dataInit?.sumOfAllBooking}
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="card_container">
              <div className="icon_container">
                <DollarOutlined className="icon" size={32} />
              </div>
              <div className="figure_container">
                <span className="figure_title">Tổng doanh thu</span>
                <span className="figure_content">
                  400.000.000
                  {dataInit?.sumOfAllServiceRegistration}
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className="card_container">
              <div className="icon_container">
                <BarChartOutlined className="icon" size={32} />
              </div>
              <div className="figure_container">
                <span className="figure_title">Người dùng mới</span>
                <span className="figure_content">
                  242
                  {dataInit?.sumOfNewUserInCurrentWeek}
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Card
        title="Biểu đồ"
        className="mt_32"
        extra={
          <>
            <DatePicker onChange={handleDateChange} picker="month" />
          </>
        }
      >
        <canvas id="myChart" ref={canvasEl} height={50} />
      </Card>

      <Card title={"Nhân viên chăm chỉ"} className="mt_32 mb_32">
        <Table columns={columns} dataSource={dataInit?.topEmployees}></Table>
      </Card>
    </div>
  );
}
