import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TestImg from "../../images/test-start.svg";
import ArrowBtn from "../../components/common/ArrowBtn";

const TestStart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <Title>
          나만의 여행스타일이 <br />
          궁금해 ?
        </Title>
        <StyledImg src={TestImg} alt="테스트 시작 이미지" />
        <ArrowBtn
          txt={"테스트 하러 가기"}
          onBtnClick={() => navigate("/test")}
        />
      </Wrapper>
    </div>
  );
};

export default TestStart;

const Wrapper = styled.div`
  width: 412px;
  margin: 0 auto;
  box-sizing: border-box;
  background: linear-gradient(to bottom, var(--orange), white);
  padding: 109px 27px 60px 27px;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: #6b3f0d;
`;

const StyledImg = styled.img`
  height: 393px;
  margin-top: 104px;
  margin-left: 70px;
`;
