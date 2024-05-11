import { SectionEvent, TitleH3, WrapperLayout } from "./eventCard.styled";
import { events } from "./event.db";
import EventCard from "./EventCard";
import { BiNews } from "react-icons/bi";
const EventLayout = () => {
  return (
    <SectionEvent>
      <div className="container">
        <TitleH3>
          {" "}
          <BiNews />
          Maktabimizda bugun...
        </TitleH3>
        <WrapperLayout>
          {events &&
            events.map((item) => {
              return <EventCard key={item.id} {...item} />;
            })}
        </WrapperLayout>
      </div>
      ;
    </SectionEvent>
  );
};

export default EventLayout;
