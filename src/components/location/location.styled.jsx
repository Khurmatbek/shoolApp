import styled from "styled-components";

export const StyledLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 10px;
`;
export const StyledLocationInner = styled.div`
  width: 33%;
`;
export const StyledLocationTwoBox = styled.div``;
export const StyledLogoIcon = styled.a`
  margin-left: 32px;
  text-align: center;
  color: #1d2d5b;
  font-size: 62px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
  transform: scale(1);
  transition: transform 0.3s linear, opacity 0.3s linear;
  &:active {
    opacity: 0.8;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 320px) {
    margin-right: 0;
    font-size: 30px;
    font-weight: 600;
  }
  @media (min-width: 1000px) {
    font-size: 42px;
    margin-right: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
    margin-right: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const StyledFullName = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin-bottom: 24px;
`;
export const StyledLocationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0;
  list-style: none;
`;
export const StyledLocationItem = styled.li``;
export const StyledLocationLink = styled.a`
  & svg {
    width: 32px;
    height: 32px;
    transform: scale(1);
    transition: all 0.3s linear;
    &:hover {
      fill: #ffdbb8;
      transform: scale(1.1);
      & path {
        stroke: #1d2d5b;
      }
    }
  }
`;
export const StyledAddressText = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 5px;
  font-size: 24px;
`;
export const StyledAddressList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 15px;
`;
export const StyledAddressItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 20px;
  & a {
    text-decoration: none;
  }
  /* width: 350px; */
`;
//for media
export const StyledLocation = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  @media (max-width: 420px) {
    & ${StyledLocationWrapper} {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 24px;
      gap: 10px;
    }
    & ${StyledLocationInner} {
      width: 100%;
    }
  }
  @media (max-width: 540px) {
    & ${StyledLocationWrapper} {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 24px;
      gap: 10px;
    }
    & ${StyledLocationInner} {
      width: 100%;
    }
  }
  @media (min-width: 541px) and (max-width: 1151px) {
    & ${StyledLocationWrapper} {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 24px;
      gap: 10px;
    }
    & ${StyledLocationInner} {
      width: 100%;
    }
    & ${StyledLocationTwoBox} {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      & ${StyledLocationInner} {
        width: 48%;
      }
    }
  }
  @media (min-width: 1152px) {
    & ${StyledLocationWrapper} {
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      flex-direction: row;
      padding: 24px;
      gap: 10px;
    }
    & ${StyledLocationInner} {
      width: 33%;
    }
    & ${StyledLocationTwoBox} {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      flex-wrap: wrap;
      & ${StyledLocationInner} {
        width: 47%;
      }
    }
  }
`;
