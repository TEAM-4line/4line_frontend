import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Wrapper>
        <Txt>회원가입</Txt>
        <InputTitle>이름</InputTitle>
        <LoginInput
          id="name"
          name="name"
          value={name}
          onChange={onChangename}
          type="name"
          placeholder="이름을 입력해주세요"
        />
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
        <LoginButton>회원가입</LoginButton>
        <Already>
          이미 계정이 있으신가요?
          <StyledLink to="/login">로그인</StyledLink>
        </Already>
      </Wrapper>
    </div>
  );
};

export default Signup;

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
  font-size: 16px;
  width: 520px;
  padding: 0px 20px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  margin: 0px 40px 30px 40px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
    box-shadow: 15px 15px 20px 0px rgba(211, 209, 216, 0.25);
  }
`;

const LoginButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 520px;
  height: 63px;
  margin: 70px 40px 15px 40px;
`;

const Already = styled.div`
  color: #5b5b5e;
  font-size: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: var(--orange);
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
