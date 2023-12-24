'use client'
import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Col, DatePicker, Row, Table} from "antd";
import {
  BarChartOutlined,
  DollarOutlined,
  SnippetsOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./index.scss";
import Chart, { ChartType } from "chart.js/auto";
import Title from "antd/es/typography/Title";

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
  const chartType: ChartType = "bar";


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
    1, 2, 2, 5, 4, 7, 5, 4, 4, 6, 4, 7, 6, 6, 4, 3, 8, 2, 3, 4, 3, 1, 3, 2, 4,
    5, 3, 5, 3, 4,
  ];

  let bookingSalesInMonth = [
    1, 2, 2, 5, 4, 7, 5, 4, 5, 5, 6, 6, 6, 7, 4, 4, 6, 2, 4, 3, 3, 2, 1, 2, 4,
    4, 4, 6, 3, 3,
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

  useEffect(() => {
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
    const ctx = canvasEl.current.getContext("2d");
    const gradient1 = ctx.createLinearGradient(0, 16, 0, 600);
    const gradient2 = ctx.createLinearGradient(0, 16, 0, 600);
    gradient1.addColorStop(0, colors.purple.half);
    gradient1.addColorStop(0.65, colors.purple.quarter);
    gradient1.addColorStop(1, colors.purple.zero);
    gradient2.addColorStop(0, colors.indigo.half);
    gradient2.addColorStop(0.65, colors.indigo.quarter);
    gradient2.addColorStop(1, colors.indigo.zero);

    dataChart?.map(
      (item: {
        dayOfMonth: string | number | Date;
        bookingCounter: number;
        bookingSalesInMonth: number;
      }) => {
        const date = new Date(item.dayOfMonth);
        const dateNum: number = date.getDate();
        bookingCounter.forEach((item1, i) => {
          if (i === dateNum) {
            bookingCounter[i - 1] = item.bookingCounter;
          }
        });
        bookingSalesInMonth.forEach((item1, i) => {
          if (i === dateNum) {
            bookingSalesInMonth[i - 1] = item.bookingSalesInMonth / 1000000;
          }
        });
      }
    );

    console.log("Data in chart >>", bookingSalesInMonth);

    const data = {
      labels: chartLabels,
      datasets: [
        {
          backgroundColor: gradient1,
          label: "Number of registration: day",
          data: bookingCounter,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
        {
          backgroundColor: gradient2,
          label: "Revenue in day: Triệu vnđ",
          data: bookingSalesInMonth,
          fill: true,
          borderWidth: 2,
          borderColor: colors.indigo.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.indigo.default,
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: chartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, [dataChart]);

  const columns = [
    {
      title: "Courses",
      dataIndex: "name",
      key: "name",
      render: (_: any, dataIndex: any) => (
        <div className="title_course">
          <div>
            <Title level={5}>{dataIndex.title}</Title>
          </div>
        </div>
      ),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Enrolled",
      dataIndex: "enrolled",
      key: "enrolled",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, dataIndex: any) => (
        <>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "6px",
              backgroundColor:
                dataIndex.status === "Approve" ? "#38a169" : "#f59e0b",
            }}
          ></div>
          <span>{dataIndex.status}</span>
        </>
      ),
    },
    {
      title: "",
      key: "setting",
      render: (_: any, record: any) => (
        <Button>View more</Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      title: "Ux ui design for beginer",
      instructor: "Nguyen Xuan Trung",
      enrolled: 53,
      status: "Approve",
    },
    {
      key: "3",
      title: "Ux ui design for beginer",
      instructor: "Nguyen Xuan Trung",
      enrolled: 53,
      status: "Approve",
    },
  ];

  const topOfIntructorCol = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "",
      key: "setting",
      render: (_: any, record: any) => (
        <Button>View more</Button>
      ),
    },
  ];

  const topOfIntructor = [
    {
      key: "1",
      fullName: "Nguyen Xuan Trung",
      email: "nguyenxuantrung@gmail.com",
    },
    {
      key: "2",
      fullName: "Nguyen Van A",
      email: "nguyenxuantrung@gmail.com",
    }
  ]

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
                <span className="figure_title">Total of user</span>
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
                <span className="figure_title">Total of courses</span>
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
                <span className="figure_title">Total of revenue</span>
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
                <span className="figure_title">Total of new user</span>
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
        title="Chart"
        className="mt_32"
        extra={
          <>
            <DatePicker onChange={handleDateChange} picker="month" />
          </>
        }
      >
        <canvas id="myChart" ref={canvasEl} height={80} />
      </Card>


        <Row gutter={[32,24]}>
          <Col span={12}>
            <Card title={"Top of courses"} className="mt_32 mb_32">
              <Table columns={columns} dataSource={data}></Table>
            </Card>
          </Col>
          <Col span={12}>
            <Card title={"Top of instructor"} className="mt_32 mb_32">
              <Table columns={topOfIntructorCol} dataSource={topOfIntructor}></Table>
            </Card>
          </Col>
        </Row>
    </div>
  );
}
