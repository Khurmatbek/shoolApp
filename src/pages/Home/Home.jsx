import React from "react";
import Header from "../../components/Header/Header";
import InfoShool from "../../components/InfoSchool/InfoShool";
import Statistic from "../../components/Statistic/Statistic";
import CategorysSchool from "../../components/ExploreLearn/ExploreLearn";

const Home = () => {
  return (
    <>
      <Header />
      <InfoShool />
      <Statistic />
      <CategorysSchool/>
    </>
  );
};

export default Home;
