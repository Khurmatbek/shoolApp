import React from "react";
import { Desc, Numbers, StatisticBox, StatisticItem } from "./Statistic.style";
import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";

const Statistic = () => {
  return (
    <div className="container">
      <StatisticBox>
        <StatisticItem>
          <Numbers>
            <CountUp end={100} duration={4}>
              100
            </CountUp>
            +
          </Numbers>
          <Desc>100+ Talented Chefs</Desc>
        </StatisticItem>
        <StatisticItem>
          <Numbers>
            {" "}
            <CountUp end={1000} duration={4}>
              1000
            </CountUp>
            +
          </Numbers>
          <Desc>Students</Desc>
        </StatisticItem>
        <StatisticItem>
          <Numbers>
            4.8
            <FaStar fontSize={28} />
          </Numbers>
          <Desc>Rating</Desc>
        </StatisticItem>
        <StatisticItem>
          <Numbers>
            <CountUp end={20} duration={4}>
              20
            </CountUp>+
          </Numbers>
          <Desc>20+ Cooking Categories</Desc>
        </StatisticItem>
      </StatisticBox>
    </div>
  );
};

export default Statistic;
