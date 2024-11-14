import React from "react";
import styled from "styled-components";

const WriteInput = ({ label, value, onChange, placeholder, name }) => {
  return (
    <div>
      <InputWrapper>
        <Label>{label}</Label>
        <Input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </InputWrapper>
    </div>
  );
};

export default WriteInput;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 13px;
  align-items: center;
`;
const Label = styled.div`
  font-size: 14px;
  color: #6f7789;
  width: 90px;
  border-right: 2px solid #ebebeb;
`;

const Input = styled.input`
  font-family: "Pretendard";
  border: none;
  margin-left: 14px;
  width: 250px;
  padding: 4px;
  outline: none;
  border-radius: 4px;
  &:focus {
    outline: 1px solid var(--orange);
    box-shadow: 5px 5px 10px 0px rgba(211, 209, 216, 0.25);
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;
