import React from "react";
import { Desc, Numbers, StatisticBox, StatisticItem } from "./Statistic.style";
import { FaStar } from "react-icons/fa";


const Statistic = () => {
  return (
    <StatisticBox>
      <StatisticItem>
        <Numbers>100+</Numbers>
        <Desc>100+ Talented Chefs</Desc>
      </StatisticItem>
      <StatisticItem>
        <Numbers>1000+</Numbers>
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
        <Numbers>20+</Numbers>
        <Desc>20+ Cooking Categories</Desc>
      </StatisticItem>
    </StatisticBox>
  );
};

export default Statistic;
