import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Login = () => {
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
        <LoginButton>로그인</LoginButton>
      </Wrapper>
    </div>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Txt = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 60px 40px;
`;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #9796a1;
  padding: 0px 40px;
  margin-bottom: 5px;
`;

const LoginInput = styled.input`
  font-size: 18px;
  width: 520px;
  padding: 0px 20px;
  height: 63px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  margin: 0px 40px 30px 40px;
  outline: none;
  &:focus {
    outline: 1px solid #ff9b29;
    box-shadow: 15px 15px 20px 0px rgba(211, 209, 216, 0.25);
  }
  /* &::placeholder {
    color: #7b7b7b;
  } */
`;

const LoginButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #ff9b29;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 520px;
  height: 63px;
  margin: 205px 40px 60px 40px;
`;
