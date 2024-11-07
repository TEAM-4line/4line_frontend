import React from "react";
import styled from "styled-components";
import { useState } from "react";
import OrangeBtn from "../../components/common/OrangeBtn";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Wrapper>
        <Txt>로그인</Txt>
        <form>
          <InputTitle>이메일</InputTitle>
          <LoginInput
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <InputTitle>비밀번호</InputTitle>
          <LoginInput
            id="password"
            name="password"
            value={password}
            onChange={onchangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </form>
        <BtnContainer>
          <OrangeBtn txt={"로그인"} />
        </BtnContainer>
      </Wrapper>
    </div>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 412px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Txt = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding: 60px 0px 65px 27px;
`;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--grey);
  padding: 0px 27px;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  font-size: 16px;
  width: 356px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 0px 20px;
  margin: 0px 27px 40px 27px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
    box-shadow: 15px 15px 20px 0px rgba(211, 209, 216, 0.25);
  }
`;

const BtnContainer = styled.div`
  margin: 180px 27px 10px 27px;
`;
