import React, { useState } from "react";
import styled from "styled-components";
import AccountInput from "../../components/common/AccountInput";
import OrangeBtn from "../../components/common/OrangeBtn";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    birth_date: "",
    email: "",
    password1: "",
    password2: "",
    intro: "",
  });
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [confirmPwdMessage, setConfirmPwdMessage] = useState("");
  const [isConfirmPwd, setIsConfirmPwd] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (name === "email") {
      if (!emailRegExp.test(formValue.email)) {
        setEmailMessage("이메일의 형식이 올바르지 않습니다.");
        setIsEmail(false);
      } else {
        setEmailMessage("");
        setIsEmail(true);
      }
    }

    if (name === "password2") {
      if (formValue.password1 !== value) {
        setConfirmPwdMessage("비밀번호와 비밀번호 확인이 같지 않습니다.");
        setIsConfirmPwd(false);
      } else {
        setConfirmPwdMessage("");
        setIsConfirmPwd(true);
      }
    }
  };

  const isFilled =
    Boolean(formValue.name) &&
    Boolean(formValue.birth_date) &&
    Boolean(formValue.email) &&
    Boolean(formValue.password1) &&
    Boolean(formValue.password2) &&
    Boolean(formValue.intro);

  const handlesubmit = () => {
    if (!isFilled) {
      return alert("입력하지 않은 정보가 있습니다.");
    } else if (!isEmail) {
      return alert("이메일 형식이 맞지 않습니다.");
    } else if (!isConfirmPwd) {
      return alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("회원가입이 완료되었습니다!");
      console.log(formValue);
      setFormValue({
        name: "",
        birth_date: "",
        email: "",
        password1: "",
        password2: "",
        intro: "",
      });
    }
  };

  return (
    <Wrapper>
      <TextBox>
        <Txt>회원가입</Txt>
        <RequiredTxt>
          회원 정보를 입력해주세요. (<span>*</span> 필수 입력 항목)
        </RequiredTxt>
      </TextBox>
      <FormContainer>
        <AccountInput
          id="name"
          name="name"
          inputTitle="이름"
          value={formValue.name}
          onChange={handleChange}
          type="text"
          placeholder="김멋사"
        />
        <AccountInput
          id="birth_date"
          name="birth_date"
          inputTitle="생년월일"
          value={formValue.birth_date}
          onChange={handleChange}
          type="date"
        />
        <AccountInput
          id="email"
          name="email"
          inputTitle="이메일"
          value={formValue.email}
          onChange={handleChange}
          type="email"
          placeholder="mutsa@mutsa.com"
        />
        {!isEmail && <ErrorMessage>{emailMessage}</ErrorMessage>}
        <AccountInput
          id="password1"
          name="password1"
          inputTitle="비밀번호"
          value={formValue.password1}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호 입력"
        />
        <AccountInput
          id="password2"
          name="password2"
          inputTitle="비밀번호 확인"
          value={formValue.password2}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호 확인"
        />
        {!isConfirmPwd && <ErrorMessage>{confirmPwdMessage}</ErrorMessage>}
        <AccountInput
          id="intro"
          name="intro"
          inputTitle="한 줄 소개"
          value={formValue.intro}
          onChange={handleChange}
          type="text"
          placeholder="나만의 한 줄 소개를 입력해주세요"
        />
      </FormContainer>
      <BtnContainer>
        <OrangeBtn txt="회원가입" onBtnClick={handlesubmit} />
      </BtnContainer>
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
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BtnContainer = styled.div`
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

const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  margin-top: -15px;
  margin-left: 30px;
  /* margin-bottom: 10px; */
`;
