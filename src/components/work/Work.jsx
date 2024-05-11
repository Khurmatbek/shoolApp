import {
  Img,
  Info,
  Item,
  List,
  Name,
  ParentList,
  Section,
} from "./work.styled";
import "./work.db";
import { WorksArray } from "./work.db";
import { TitleTadbirlar } from "../../pages/Tadbirlar/Tadbirlar.style";
import styled from "styled-components";
import { GiTrophyCup } from "react-icons/gi";

export const Work = () => {
  return (
    <Section>
      <div className="container">
        <div className="wrapper">
          <TitleTadbirlar>
            <GiTrophyCup />
            {"Iqtidorli o'quvchilarimiz!"}
          </TitleTadbirlar>
          <ParentList id="iqtidorli">
            {WorksArray.map((kind) => {
              return (
                <Item className="parentitem" key={kind.id}>
                  <List
                    className="reverselist"
                    $row="row"
                    $reverse="row-reverse"
                  >
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
      </div>
    </Section>
  );
};

export default Work;
