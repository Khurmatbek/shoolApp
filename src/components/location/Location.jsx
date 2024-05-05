import { YouTube } from "@mui/icons-material";
import { IntagramIcon, FaceBookIcon, TwitterIcon } from "./locationIcons";
import {
  StyledAddressItem,
  StyledAddressList,
  StyledAddressText,
  StyledFullName,
  StyledLocation,
  StyledLocationInner,
  StyledLocationItem,
  StyledLocationLink,
  StyledLocationList,
  StyledLocationTwoBox,
  StyledLocationWrapper,
  StyledLogoIcon,
} from "./location.styled";
const Location = () => {
  return (
    <StyledLocation>
      <div className="container">
        <StyledLocationWrapper>
          <StyledLocationTwoBox>
            <StyledLocationInner>
              <StyledLogoIcon>8School</StyledLogoIcon>
              <StyledFullName>
                Yangihayot tumani 8-sonli umumta'lim maktabi
              </StyledFullName>
              <StyledLocationList>
                <StyledLocationItem>
                  <StyledLocationLink>
                    <IntagramIcon />
                  </StyledLocationLink>
                </StyledLocationItem>
                <StyledLocationItem>
                  <StyledLocationLink>
                    <TwitterIcon />
                  </StyledLocationLink>
                </StyledLocationItem>
                <StyledLocationItem>
                  <StyledLocationLink>
                    <FaceBookIcon />
                  </StyledLocationLink>
                </StyledLocationItem>
                <StyledLocationItem>
                  <StyledLocationLink>
                    <YouTube style={{ fill: "red" }} />
                  </StyledLocationLink>
                </StyledLocationItem>
              </StyledLocationList>
            </StyledLocationInner>
            <StyledLocationInner>
              <StyledAddressText>{"Bog'lanish"}</StyledAddressText>
              <StyledAddressList>
                <StyledAddressItem>
                  Manzil: Toshkent 100084, Amir Temur shox ko‘chasi 108 uy
                </StyledAddressItem>
                <StyledAddressItem>
                  <span>Telefon:</span>{" "}
                  <a href="tel:+998712386415">+998 71 238 64 15</a>
                </StyledAddressItem>
                <StyledAddressItem>
                  <span>E-mail:</span>{" "}
                  <a href="mailto:info@tuit.uz">info@tuit.uz</a>
                </StyledAddressItem>
                <StyledAddressItem>
                  Ish grafigi: Dushanba - Shanba 8:30 - 18:00
                </StyledAddressItem>
              </StyledAddressList>
            </StyledLocationInner>
          </StyledLocationTwoBox>
          <StyledLocationInner>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.575025893705!2d69.2134790841498!3d41.20715311422959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae610e2130ba67%3A0xcd4fd0d9b148e221!2z0KjQutC-0LvQsCDihJY4!5e0!3m2!1sru!2s!4v1713180702515!5m2!1sru!2s"
              width={"100%"}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </StyledLocationInner>
        </StyledLocationWrapper>
      </div>
    </StyledLocation>
  );
};

export default Location;
