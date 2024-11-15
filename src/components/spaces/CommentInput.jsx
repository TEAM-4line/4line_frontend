import React from "react";
import styled from "styled-components";
import SubmitIcon from "../../images/submit-icon.png";

const CommentInput = () => {
  return (
    <div>
      <InputWrapper>
        <InputBox>
          <Input placeholder="댓글을 입력하세요" />
          <SubmitButton src={SubmitIcon} />
        </InputBox>
      </InputWrapper>
    </div>
  );
};

export default CommentInput;

const InputWrapper = styled.div`
  height: 49px;
  position: fixed;
  bottom: 94px;
`;

const InputBox = styled.div`
  width: 370px;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  padding: 5px;
  background-color: #f7f3ed;
  border-radius: 15px;
  /* margin-bottom: 10px; */
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: none;
  font-size: 14px;
  outline: none;
  padding: 8px;
  color: #5b5b5e;
  font-family: "Pretendard";
  &::placeholder {
    color: #c4c4c4;
  }
`;

const SubmitButton = styled.img`
  cursor: pointer;
  margin-right: 10px;
  color: var(--orange);
  width: 24px;
  height: 24px;
`;
