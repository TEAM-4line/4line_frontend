import React from "react";
import styled from "styled-components";

const AccountInput = ({
  id,
  name,
  inputTitle,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <InputTitle>{inputTitle}</InputTitle>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AccountInput;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--grey);
  padding: 0px 27px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-family: "pretendard";
  font-size: 15px;
  width: 356px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 0px 20px;
  margin: 0px 27px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
    box-shadow: 15px 15px 20px 0px rgba(211, 209, 216, 0.25);
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;
