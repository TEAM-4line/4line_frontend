import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ResultDescription from "../../components/test/ResultDescription";
import ArrowBtn from "../../components/common/ArrowBtn";
// import axios from "axios";

const TestResult = () => {
  const navigate = useNavigate();
  const trip_type = localStorage.getItem("trip_type");

  return (
    <div>
      <Wrapper>
        <ResultDescription type={trip_type} />
        <TextBox>
          <WithText>그럼 동행을 만나러 가볼까요?</WithText>
        </TextBox>
        <BtnBox>
          <ArrowBtn
            txt={"여행 시작하기"}
            onBtnClick={() => navigate("/home")}
          />
        </BtnBox>
      </Wrapper>
    </div>
  );
};

export default TestResult;
const Wrapper = styled.div`
  width: 412px;
  margin: 0 auto;
  box-sizing: border-box;
  background: linear-gradient(to bottom, var(--orange), white);
  padding: 42px 22px 98px 22px;
`;

const TextBox = styled.div`
  margin-top: 6px;
`;

const WithText = styled.div`
  font-size: 16px;
  color: var(--brown);
  text-align: center;
  font-weight: bold;
`;

const BtnBox = styled.div`
  margin-top: 14px;
  margin-left: 5px;
`;
