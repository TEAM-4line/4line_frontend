import React, { useState } from "react";
import styled from "styled-components";
import OrangeBtn from "../../components/common/OrangeBtn";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [introduce, setIntroduce] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeIntro = (e) => {
    setIntroduce(e.target.value);
  };

  return (
    <Wrapper>
      <TextBox>
        <Txt>회원가입</Txt>
        <RequiredTxt>
          회원 정보를 입력해주세요. (<span>*</span> 필수 입력 항목)
        </RequiredTxt>
      </TextBox>
      <form>
        <InputTitle>
          이름<span>*</span>
        </InputTitle>
        <LoginInput
          id="name"
          name="name"
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="이름을 입력해주세요"
        />
        <InputTitle>
          생년월일<span>*</span>
        </InputTitle>
        <LoginInput
          id="birth"
          name="birth"
          value={birth}
          onChange={onChangeBirth}
          type="date"
          placeholder="생년월일을 입력해주세요"
        />
        <InputTitle>
          이메일<span>*</span>
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
          비밀번호<span>*</span>
        </InputTitle>
        <LoginInput
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <InputTitle>
          한 줄 소개<span>*</span>
        </InputTitle>
        <LoginInput
          id="introduce"
          name="introduce"
          value={introduce}
          onChange={onChangeIntro}
          type="text"
          placeholder="나만의 한 줄 소개를 입력해주세요"
        />
      </form>
      <LoginButton>
        <OrangeBtn txt={"회원가입"} />
      </LoginButton>
      <Already>
        이미 계정이 있으신가요?
        <StyledLink to="/login">로그인</StyledLink>
      </Already>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 412px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 60px 0px 27px 27px;
`;

const Txt = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const RequiredTxt = styled.div`
  font-size: 16px;
  color: var(--grey);
  font-weight: 600;
  > span {
    color: var(--orange);
  }
`;

const InputTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--grey);
  padding: 0px 27px;
  margin-bottom: 10px;
  > span {
    color: var(--orange);
  }
`;

const LoginInput = styled.input`
  font-size: 16px;
  width: 357px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 0px 20px;
  margin: 0px 27px 30px 27px;
  outline: none;
  &:focus {
    outline: 1px solid var(--orange);
    box-shadow: 15px 15px 20px 0px rgba(211, 209, 216, 0.25);
  }
`;

const LoginButton = styled.div`
  margin: 140px 27px 10px 27px;
`;

const Already = styled.div`
  color: #5b5b5e;
  font-size: 16px;
  text-align: center;
  margin-bottom: 60px;
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
