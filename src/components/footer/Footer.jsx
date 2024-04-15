import {
  StyledContainer,
  StyledFooter,
  StyledFooterInner,
  StyledFooterListWrapper,
  StyledFooterWrapper,
  StyledLinkLogo,
  StyledSubItem,
  StyledSubLink,
  StyledSubList,
  StyledSubTitle,
} from "./footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterWrapper>
          <StyledLinkLogo>8School</StyledLinkLogo>
          <StyledFooterInner>
            <StyledFooterListWrapper>
              <StyledSubTitle>About US</StyledSubTitle>
              <StyledSubList>
                <StyledSubItem>
                  <StyledSubLink>Who we are</StyledSubLink>
                </StyledSubItem>
                <StyledSubItem>
                  <StyledSubLink>How it works</StyledSubLink>
                </StyledSubItem>
                <StyledSubItem>
                  <StyledSubLink>COOK reviews</StyledSubLink>
                </StyledSubItem>
              </StyledSubList>
            </StyledFooterListWrapper>
            <StyledFooterListWrapper>
              <StyledSubTitle>For Students</StyledSubTitle>
              <StyledSubList>
                <StyledSubItem>
                  <StyledSubLink>COOK blog</StyledSubLink>
                </StyledSubItem>
                <StyledSubItem>
                  <StyledSubLink>Find a tutor</StyledSubLink>
                </StyledSubItem>
              </StyledSubList>
            </StyledFooterListWrapper>
            <StyledFooterListWrapper>
              <StyledSubTitle>For Tutors</StyledSubTitle>
              <StyledSubList>
                <StyledSubItem>
                  <StyledSubLink>Become an online chef</StyledSubLink>
                </StyledSubItem>
                <StyledSubItem>
                  <StyledSubLink>Teach cooking online</StyledSubLink>
                </StyledSubItem>
              </StyledSubList>
            </StyledFooterListWrapper>
            <StyledFooterListWrapper>
              <StyledSubTitle>Supports</StyledSubTitle>
              <StyledSubList>
                <StyledSubItem>
                  <StyledSubLink>Need a help?</StyledSubLink>
                </StyledSubItem>
              </StyledSubList>
            </StyledFooterListWrapper>
          </StyledFooterInner>
        </StyledFooterWrapper>
        {/* <div className="">
          <address>
            <span>USA</span>
            <span>Your address goes there</span>
            <strong>+000000000</strong>
          </address>
          <div className="">
            <span>socials</span>
            <ul>
              <li>
                <a>Icon</a>
              </li>
              <li>
                <a>Icon</a>
              </li>
              <li>
                <a>Icon</a>
              </li>
            </ul>
          </div>
        </div> */}
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
