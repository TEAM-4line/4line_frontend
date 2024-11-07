import React from "react";
import styled from "styled-components";

const OrangeBtn = ({
  txt,
  onBtnClick,
  fontSize,
  type,
  width,
  borderRadius,
  color,
  fontWeight,
}) => {
  return (
    <ButtonBox
      onClick={onBtnClick}
      fontSize={fontSize}
      type={type}
      width={width}
      borderRadius={borderRadius}
      color={color}
      fontWeight={fontWeight}
    >
      {txt || "버튼"}
    </ButtonBox>
  );
};

export default OrangeBtn;

const ButtonBox = styled.button`
  background-color: var(--orange);
  width: ${(props) => props.width || "357px"};
  height: 65px;
  border-radius: ${(props) => props.borderRadius || "20px"};
  border: none;
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "20px"};
`;
