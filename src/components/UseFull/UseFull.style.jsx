import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  margin-top: 30px;
  color: #1c1c1c;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;
export const WrapperBox = styled.div`
  border-top: 2px solid #1d2d5b;
  border-bottom: 2px solid #1d2d5b;
  padding: 10px;
`;

export const Links = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
`;

export const Title = styled.h4`
  margin: 0;
  text-align: center;
  color: #1d2d5b;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.62px;
`;
