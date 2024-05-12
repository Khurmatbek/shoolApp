import React from "react";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  border: none;
  outline: none;
  color: #1d2d5d;
  font-size: 20px;
  background-color: transparent;
  opacity: 0.85;
`;
export const BackButton = ({ navigate }) => {
  return (
    <ButtonWrapper>
      <Button
        onClick={() => {
          navigate("/");
        }}>
        <IoMdArrowRoundBack />
        Orqaga qaytish
      </Button>
    </ButtonWrapper>
  );
};
