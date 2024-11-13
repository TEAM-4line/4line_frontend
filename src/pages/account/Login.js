import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccountInput from "../../components/common/AccountInput";
import OrangeBtn from "../../components/common/OrangeBtn";
import axios from "axios";

const Login = () => {
  const Server_IP = process.env.REACT_APP_Server_IP;
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isEmail = Boolean(formValue.email);
  const isPassword = Boolean(formValue.password);

  const handleLogin = () => {
    if (!isEmail) {
      return alert("이메일을 입력해주세요.");
    } else if (!isPassword) {
      return alert("비밀번호를 입력해주세요.");
    } else {
      axios
        .post(`${Server_IP}/users/login/`, formValue)
        .then((response) => {
          console.log(response);
          alert("로그인 성공!");
          navigate("/home");
        })
        .catch((error) => {
          if (!error.response) {
            console.log(error);
            alert("서버 연결 실패");
          } else {
            console.log(error);
            console.log(error.response.data);
            alert("응답 오류");
          }
        });
    }
  };

  return (
    <Wrapper>
      <Txt>로그인</Txt>
      <FormContainer>
        <AccountInput
          id="email"
          name="email"
          inputTitle="이메일"
          value={formValue.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <AccountInput
          id="password"
          name="password"
          inputTitle="비밀번호"
          value={formValue.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </FormContainer>
      <BtnContainer>
        <OrangeBtn txt="로그인" onBtnClick={handleLogin} />
      </BtnContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 412px;
  min-height: 780px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Txt = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding: 60px 0px 65px 27px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BtnContainer = styled.div`
  margin: 230px 27px 40px 27px;
`;
