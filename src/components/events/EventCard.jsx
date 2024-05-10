/* eslint-disable react/prop-types */
import {
  DateSpan,
  ImageDiv,
  TextParag,
  TextStrong,
  WrapperEvent,
  WrapperEventContent,
  WrapperEventImage,
} from "./eventCard.styled";

const EventCard = ({ bg, title, date }) => {
  return (
    <WrapperEvent>
      <WrapperEventImage>
        <ImageDiv
          background={`linear-gradient(45deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%), url(${bg})`}
        ></ImageDiv>
        <DateSpan>{date}</DateSpan>
      </WrapperEventImage>
      <WrapperEventContent>
        <TextStrong>{title}</TextStrong>
        <TextParag to={"/"}>Learn More...</TextParag>
      </WrapperEventContent>
    </WrapperEvent>
  );
};

export default EventCard;
