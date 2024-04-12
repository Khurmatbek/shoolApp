import React from "react";
import Header from "../../components/Header/Header";
import InfoShool from "../../components/InfoSchool/InfoShool";
import Statistic from "../../components/Statistic/Statistic";
import CategorysSchool from "../../components/ExploreLearn/ExploreLearn";
import UseFull from "../../components/UseFull/UseFull";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <InfoShool />
      <Statistic />
      <CategorysSchool />
      <UseFull />
      <Footer />
    </>
  );
};

export default Home;
