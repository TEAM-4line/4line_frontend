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
        <TextBox>
          <Txt>회원가입</Txt>
          <RequiredTxt>
            회원 정보를 입력해주세요. (
            <span style={{ color: `var(--orange)` }}>*</span> 필수 입력 항목)
          </RequiredTxt>
        </TextBox>
        <form>
          <InputTitle>
            이름<span style={{ color: `var(--orange)` }}>*</span>
          </InputTitle>
          <LoginInput
            id="name"
            name="name"
            value={name}
            onChange={onChangename}
            type="name"
            placeholder="이름을 입력해주세요"
          />
          <InputTitle>
            이메일<span style={{ color: `var(--orange)` }}>*</span>
          </InputTitle>
          <LoginInput
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <InputTitle>
            비밀번호<span style={{ color: `var(--orange)` }}>*</span>
          </InputTitle>
          <LoginInput
            id="password"
            name="password"
            value={password}
            onChange={onchangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </form>
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
  width: 412px;
  height: 917px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 60px 0px 27px 27px;
`;

const Txt = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const RequiredTxt = styled.div`
  font-size: 16px;
  color: var(--grey);
`;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #9796a1;
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

const LoginButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 356px;
  height: 65px;
  margin: 180px 27px 10px 27px;
`;

const Already = styled.div`
  color: #5b5b5e;
  font-size: 16px;
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
