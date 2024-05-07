import Header from "../../components/Header/Header";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";
import { FaBookReader } from "react-icons/fa";

const subjectData = [
  {
    id: "1",
    subject: "matematika",
    description: "Qoshish va ayirish haqida",
  },
  {
    id: "2",
    subject: "ona tili",
  },
  {
    id: "3",
    subject: "english",
  },
  {
    id: "4",
    subject: "geografiya",
  },
  {
    id: "5",
    subject: "informatika",
  },
];

/* Styles with style Components */

const ItemInner = styled.li`
  padding: 24px ${(props) => props.$pl || "24px"} 24px
    ${(props) => props.$pl || "24px"};
  & .firstItem {
    padding-left: 0;
  }
`;
const SubjectCategory = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
const SubjectItem = styled.li`
  height: 100%;
  width: 100%;
`;
const SubjectBtn = styled.button`
  color: royalblue;
  padding: 10px 15px 10px 10px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #4b4646;
  border-radius: 10px;
  & svg {
    fill: transparent;
    transform: translateX(0);
    transition: transform 0.5s linear, fill 0.3s linear;
  }
  transition: background-color 0.5s linear, color 0.3s linear,
    border-radius 0.5s linear;
  &:hover {
    border-radius: 20px;
    background-color: #5851db;
    color: #fff;
    & svg {
      transform: translateX(10px);
      fill: #fff;
    }
  }
`;
const AboutWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const IframeDiv = styled.div`
  width: 60%;
`;
const AboutStrong = styled.strong`
  margin: 0;
  font-size: 25px;
  text-align: center;
  display: block;
  color: #1d2d5b;
`;
const AboutTextBox = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  & strong {
    margin: 0;
    color: #1d2d5b;
  }
  & small {
    opacity: 0.9;
  }
`;
const SocialsItem = styled.li``;
const SocialsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000;
  padding-right: 10px;
  transition: all 0.3s linear;
  & span {
    font-weight: 600;
  }

  & svg {
    width: 24px;
    height: 24px;
  }
  &.telegram:hover {
    color: #2b70be;
    scale: 1.1;
  }
  &.instagram:hover {
    color: #c13584;
    scale: 1.1;
  }
  &.youtube:hover {
    color: rgb(221, 65, 65);
    scale: 1.1;
  }
`;
// ------
const WrapperItems = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  & .firstItem {
    width: 25%;
    & h3 {
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 0;
      margin-bottom: 10px;
      font-size: 30px;
      letter-spacing: 1px;
      color: #1d2d5b;
    }
  }
  & .secondItem {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 75%;
    height: 100%;
    & iframe {
      border-radius: 20px;
    }
  }
`;
const OnlineCourseSection = styled.section`
  width: 100%;
  height: 100%;

  & .container {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 872px) {
    ${WrapperItems} {
      flex-wrap: wrap;
      height: 100vh;
      overflow-y: scroll;
    }
    & .firstItem {
      width: 100%;

      ${SubjectCategory} {
        flex-direction: row;
        flex-wrap: wrap;
        ${SubjectItem} {
          max-width: 150px;
        }
      }
      ${SubjectBtn} {
        width: 100%;
      }
    }
    & .secondItem {
      width: 100%;
      height: 373px;
      flex-wrap: wrap;
      ${AboutWrapper} {
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
      }

      ${IframeDiv} {
        width: 100%;
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

/* Styles with style Components */

export const OnlineLessons = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <GlobalStyle />
      <Header path={path} />
      <main>
        <OnlineCourseSection>
          <div className="container">
            <WrapperItems>
              <ItemInner $pl="0" className="firstItem">
                <h3>
                  <FaBookReader fontSize={25} />
                  Fanlar
                </h3>
                <SubjectCategory>
                  {subjectData.map((item) => {
                    return (
                      <SubjectItem key={item.id}>
                        <SubjectBtn
                          type="button"
                          onClick={(e) => {
                            console.log(e?.target?.id);
                          }}
                          id={item.id}>
                          {item.subject.substring(0, 1).toUpperCase() +
                            item.subject.slice(1)}
                          <FaArrowRightLong />
                        </SubjectBtn>
                      </SubjectItem>
                    );
                  })}
                </SubjectCategory>
              </ItemInner>
              <ItemInner className="secondItem">
                <IframeDiv>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    src="https://www.youtube.com/embed/D9t2Zj1zYzc?si=fCOYqVaK8Y_dp3uO"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  <div className="overlay"></div>
                </IframeDiv>
                <AboutWrapper>
                  <AboutStrong>Matematika</AboutStrong>
                  <AboutTextBox>
                    <strong className="teachervideodesc">Ustoz</strong> :{" "}
                    <small>Olloyorov Xurmatbek</small>
                  </AboutTextBox>
                  <AboutTextBox>
                    <strong>Mavzu</strong> :{" "}
                    <small>Qo'shish va ayirish amallari</small>
                  </AboutTextBox>
                  <AboutTextBox>
                    <strong>Description </strong> :
                    <small>
                      Qo'shish va ayirish amallarish haqida misollarni
                      hisoblashni o'rganish va takrorlash
                    </small>
                  </AboutTextBox>
                  <SocialsWrapper>
                    <SocialsItem>
                      <SocialsLink className="telegram" href="#">
                        <FaTelegram fill="#2b70be" color="#2b70be" />
                        <span>Telegram</span>
                      </SocialsLink>
                    </SocialsItem>
                    <SocialsItem>
                      <SocialsLink className="instagram" href="#">
                        <FaInstagram fill="#C73659" color="#C73659" />
                        <span>Instagram</span>
                      </SocialsLink>
                    </SocialsItem>
                    <SocialsItem>
                      <SocialsLink className="youtube lastChild" href="#">
                        <FaYoutube fill="red" color="red" />
                        <span>Youtube</span>
                      </SocialsLink>
                    </SocialsItem>
                  </SocialsWrapper>
                </AboutWrapper>
              </ItemInner>
            </WrapperItems>
          </div>
        </OnlineCourseSection>
      </main>
      <Footer />
    </>
  );
};
