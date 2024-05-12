import Header from "../../components/Header/Header";
import InfoShool from "../../components/InfoSchool/InfoShool";
import Statistic from "../../components/Statistic/Statistic";
import CategorysSchool from "../../components/ExploreLearn/ExploreLearn";
import UseFull from "../../components/UseFull/UseFull";
import Footer from "../../components/footer/Footer";
import Location from "../../components/location/Location";
import Work from "../../components/work/Work";
import EventLayout from "../../components/events/EventLayout";
import ApexChart from "../../components/ApexChart/ApexChart";
import { useParams } from "react-router-dom";

const Home = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header />
      <InfoShool />
      <Statistic />
      <CategorysSchool />
      <UseFull />
      <Work />
      <ApexChart />
      <EventLayout />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
