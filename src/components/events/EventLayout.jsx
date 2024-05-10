import { SectionEvent, TitleH3, WrapperLayout } from "./eventCard.styled";
import { events } from "./event.db";
import EventCard from "./EventCard";
const EventLayout = () => {
  return (
    <SectionEvent>
      <div className="container">
        <TitleH3>Yaqin kundagi tadbirlar</TitleH3>
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
