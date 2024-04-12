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
                Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari
                Universiteti
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
                    <YouTube style={{ fill: "#FFDBB8" }} />
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
                  Telefon: +998 71 238 64 15
                </StyledAddressItem>
                <StyledAddressItem>E-mail: info@tuit.uz</StyledAddressItem>
                <StyledAddressItem>
                  Ish grafigi: Dushanba - Shanba 8:30 - 18:00
                </StyledAddressItem>
              </StyledAddressList>
            </StyledLocationInner>
          </StyledLocationTwoBox>
          <StyledLocationInner>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95901.41990287435!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1712953167607!5m2!1sen!2s"
              width={"100%"}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </StyledLocationInner>
        </StyledLocationWrapper>
      </div>
    </StyledLocation>
  );
};

export default Location;
