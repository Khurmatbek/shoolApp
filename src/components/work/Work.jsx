import { Img, Info, Item, List, Name, ParentList } from "./work.styled";
import "./work.db";
import { WorksArray } from "./work.db";

export const Work = () => {
  return (
    <section>
      <div className="container">
        <ParentList id="iqtidorli">
          {WorksArray.map((kind) => {
            return (
              <Item className="parentitem" key={kind.id}  >
                <List className="reverselist" $row="row" $reverse="row-reverse">
                  <Item>
                    <Img
                      width={550}
                      height={380}
                      src={kind.img}
                      alt={kind.info}
                    />
                  </Item>
                  <Item className="reverse">
                    <Name>{kind.fullName}</Name>
                    <Info>{kind.info}</Info>
                  </Item>
                </List>
              </Item>
            );
          })}
        </ParentList>
      </div>
    </section>
  );
};

export default Work;
