import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { GrScorecard } from "react-icons/gr";

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  margin-bottom: 20px;
  font-size: 50px;
  color: #1d2d5b;
  @media (min-width: 320px) {
    font-size: 20px;
  }
  @media (min-width: 700px) {
    font-size: 25px;
  }
  @media (min-width: 120px) {
    font-size: 35px;
  }
  @media (min-width: 1350px) {
    font-size: 45px;
  }
`;

const ApexChart = () => {
  const [series] = useState([
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#1d2d5b"],
      },
    },
    xaxis: {
      categories: [
        "11-sinf",
        "10-sinf",
        "9-sinf",
        "8-sinf",
        "7-sinf",
        "6-sinf",
        "5-sinf",
        "4-sinf",
        "3-sinf",
        "2-sinf",
        "1-sinf",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Yangihayot 8-maktab sinflar reytingi",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
    colors: ["#1d2d5b"],
  });

  return (
    <div className="container">
      <div id="chart">
        <Title>
          <GrScorecard />
          Sinflar Reytingi
        </Title>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
