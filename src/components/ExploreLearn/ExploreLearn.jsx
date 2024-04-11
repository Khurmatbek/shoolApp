import React from "react";
import "./Categorys.db";
import { CategorysObj } from "./Categorys.db";
import { Box, Icon } from "@mui/material";
import { MdOutlineCategory } from "react-icons/md";
import {
  BoxWrapper,
  FirstTitle,
  InBox,
  Info,
  Item,
  LinkCategorys,
  ListInfo,
  SmallDesc,
  TitleInfo,
} from "./ExploreLearn.style";

const CategorysSchool = () => {
  return (
    <BoxWrapper>
      <div className="container">
        <FirstTitle>
          <MdOutlineCategory />
          Categorys
        </FirstTitle>
        <SmallDesc>Categoriyalar haqida ma'lumot......</SmallDesc>
        <ListInfo>
          {CategorysObj?.map((item) => {
            return (
              <Item key={item.id}>
                <LinkCategorys className="linkactive" to={"/"}>
                  {item.icon}
                  <Box>
                    <InBox>
                      <TitleInfo className="titleactive">
                        {item.title}
                      </TitleInfo>
                      {item.decaration}
                    </InBox>
                    <Info className="descactive">{item.info}</Info>
                  </Box>
                </LinkCategorys>
              </Item>
            );
          })}
        </ListInfo>
      </div>
    </BoxWrapper>
  );
};

export default CategorysSchool;
