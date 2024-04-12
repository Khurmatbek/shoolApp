import React from "react";
import logoImg from "../../../public/logo.svg";
import videohub from "../../../public/videhub.png";
import internation from "../../../public/internation.svg";
import { HeadTitle, Links, Title, WrapperBox } from "./UseFull.style";
import cambrigde from "../../../public/cambrigde.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import inavatsiya from "../../../public/inovatsiya.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./UseFull.css";
import { MdBusinessCenter } from "react-icons/md";

const UseFull = () => {
  return (
    <WrapperBox>
      <div className="container">
        <HeadTitle>
          {" "}
          <MdBusinessCenter fontSize={40} />
          Foydali resurslar
        </HeadTitle>
        <Swiper
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <Links to={"https://www.dasturlash.uz"}>
              <img src={logoImg} width={100} height={100} alt="usefull image" />
              <Title>Dasturlash Uz</Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://videohub.uz"}>
              <img
                src={videohub}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Videohub</Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://inter-nation.uz/"}>
              <img
                src={internation}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Inter nation </Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://cambridgeonline.uz/"}>
              <img
                src={cambrigde}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Cambridge </Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://itsm.uz/uz"}>
              <img
                src={inavatsiya}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Inovatsiya markazi </Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://www.dasturlash.uz"}>
              <img src={logoImg} width={100} height={100} alt="usefull image" />
              <Title>Dasturlash Uz</Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://videohub.uz"}>
              <img
                src={videohub}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Videohub</Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://inter-nation.uz/"}>
              <img
                src={internation}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Inter nation </Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://cambridgeonline.uz/"}>
              <img
                src={cambrigde}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Cambridge </Title>
            </Links>
          </SwiperSlide>
          <SwiperSlide>
            <Links to={"https://itsm.uz/uz"}>
              <img
                src={inavatsiya}
                width={100}
                height={100}
                alt="usefull image"
              />
              <Title>Inovatsiya markazi </Title>
            </Links>
          </SwiperSlide>
        </Swiper>
      </div>
    </WrapperBox>
  );
};

export default UseFull;
