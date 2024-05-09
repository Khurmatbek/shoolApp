import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
const TeacherArr = [
  {
    id: 1,
    name: "Olloyorov Xurmatbek",
    desc: "Web dasturlashdan chuqurlashtrilgan kurslarimga taklif etib qolaman",
    content:
      "FrontEnd kurslari 6 oy davomida o'rgatiladi.Siz kurs davomida HTML, CSS,SASS, LASS, GIT , GIT HUB, GIT LAB, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT , REACT JS larni o'rganasiz..",
    posterImg: "teacher1.png",
  },
  {
    id: 2,
    name: "Olloyorov Xurmatbek",
    desc: "Web dasturlashdan chuqurlashtrilgan kurslarimga taklif etib qolaman",
    content:
      "FrontEnd kurslari 6 oy davomida o'rgatiladi.Siz kurs davomida HTML, CSS,SASS, LASS, GIT , GIT HUB, GIT LAB, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT , REACT JS larni o'rganasiz..",
    posterImg: "teacher1.png",
  },
  {
    id: 3,
    name: "Olloyorov Xurmatbek",
    desc: "Web dasturlashdan chuqurlashtrilgan kurslarimga taklif etib qolaman",
    content:
      "FrontEnd kurslari 6 oy davomida o'rgatiladi.Siz kurs davomida HTML, CSS,SASS, LASS, GIT , GIT HUB, GIT LAB, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT , REACT JS larni o'rganasiz..",
    posterImg: "teacher1.png",
  },
  {
    id: 4,
    name: "Olloyorov Xurmatbek",
    desc: "Web dasturlashdan chuqurlashtrilgan kurslarimga taklif etib qolaman",
    content:
      "FrontEnd kurslari 6 oy davomida o'rgatiladi.Siz kurs davomida HTML, CSS,SASS, LASS, GIT , GIT HUB, GIT LAB, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT , REACT JS larni o'rganasiz..",
    posterImg: "teacher1.png",
  },
];
const data = TeacherArr.map((item) => ({
  href: "https://t.me/ministry_me",
  title: `Olloyorov Xurmatbek`,
  avatar: `teacher${item.id}.png`,
  description: `${item.desc}`,
  content: `${item.content}`,
  poster: `${item.posterImg}`,
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const CourseCard = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        style={{
          marginBottom: "20px",
          borderRadius: "12px",
          borderTop: "2px solid #1d2d5bb0",
          borderBottom: "2px solid #1d2d5bb0",
          borderLeft: "1px solid #1d2d5b",
          borderRight: "1px solid #1d2d5b",
          backgroundColor: "#ffffff",
          color: "#1d2d5b",
        }}
        key={item.id}
        extra={
          <img
            width={210}
            style={{ borderRadius: "50%", border: "5px solid #1d2d5b" }}
            alt={`${item.title}`}
            src={item.poster}
          />
        }>
        <List.Item.Meta
          avatar={
            <Avatar
              style={{
                width: "60px",
                height: "60px",
              }}
              src={item.avatar}
            />
          }
          title={
            <a
              target="_blank"
              style={{
                  color: "#1d2d5b",
                  fontSize:"20px"
              }}
              href={item.href}>
              {item.title}
            </a>
          }
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default CourseCard;
