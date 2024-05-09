import React from "react";
import Header from "../../components/Header/Header";
import InfoShool from "../../components/InfoSchool/InfoShool";
import Statistic from "../../components/Statistic/Statistic";
import CategorysSchool from "../../components/ExploreLearn/ExploreLearn";
import UseFull from "../../components/UseFull/UseFull";
import Footer from "../../components/footer/Footer";
import Location from "../../components/location/Location";
import Work from "../../components/work/Work";
import TableEvent from "../../components/events/TableEvent";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";

const Home = () => {
  return (
    <>
      <Header />
      <InfoShool />
      <Statistic />
      <CategorysSchool />
      <UseFull />
      <Work />
      <ChakraProvider theme={theme}>
        <TableEvent />
      </ChakraProvider>
      <Location />
      <Footer />
    </>
  );
};

export default Home;
