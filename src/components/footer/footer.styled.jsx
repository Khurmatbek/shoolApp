import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1352px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 30px;
`;
export const StyledLinkLogo = styled.a`
  margin-left: 32px;
  color: #fff;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
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
`;
export const StyledFooterInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 64px;
  margin-right: 32px;
`;
export const StyledFooterListWrapper = styled.div``;
export const StyledSubTitle = styled.span`
  display: inline-block;
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  text-transform: uppercase;
`;
export const StyledSubList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
`;
export const StyledSubItem = styled.li``;
export const StyledSubLink = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
`;
export const StyledHrLine = styled.span``;
export const StyledAddress = styled.address``;
export const StyledAddressText = styled.span``;

//for media

export const StyledFooter = styled.footer`
  padding-top: 26px;
  background-color: #1d2d5b;

  @media (max-width: 420px) {
    & ${StyledFooterWrapper} {
      flex-direction: column;
      padding: 16px;
    }
    & ${StyledLinkLogo} {
      margin-left: 0;
      margin-bottom: 32px;
    }
    & ${StyledFooterInner} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      gap: 32px;
    }
    & ${StyledSubTitle} {
      text-align: center;
    }
    & ${StyledSubList} {
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  @media (min-width: 421px) and (max-width: 475px) {
    & ${StyledFooterWrapper} {
      flex-direction: column;
      padding: 16px;
    }
    & ${StyledLinkLogo} {
      margin-left: 0;
      margin-bottom: 32px;
    }
    & ${StyledFooterInner} {
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: 0;
      gap: 32px;
    }
    & ${StyledSubTitle} {
      text-align: left;
    }
    & ${StyledSubList} {
      align-items: flex-start;
      justify-content: flex-start;
      width: 140px;
    }
  }
  @media (min-width: 476px) and (max-width: 775px) {
    & ${StyledFooterWrapper} {
      flex-direction: column;
      padding: 16px;
    }
    & ${StyledLinkLogo} {
      margin-left: 0;
      margin-bottom: 32px;
    }
    & ${StyledFooterInner} {
      flex-wrap: wrap;
      justify-content: center;
      margin-right: 0;
    }
    & ${StyledSubList} {
      width: 170px;
    }
  }
  @media (min-width: 776px) and (max-width: 1100px) {
    & ${StyledFooterWrapper} {
      flex-direction: column;
      align-items: flex-start;

      padding: 26px;
    }
    & ${StyledLinkLogo} {
      margin-left: 0;
      margin-bottom: 16px;
    }
    & ${StyledFooterInner} {
      gap: 26px;
    }
    & ${StyledSubList} {
      width: 170px;
    }
  }
`;
