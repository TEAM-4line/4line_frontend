import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ResultDescription from "../../components/test/ResultDescription";
import ArrowBtn from "../../components/common/ArrowBtn";

const TestResult = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("monkey");

  //   useEffect(() => {
  //     const getProfile = () => {
  //       axios
  //         .get(`${Server_IP}/api/question/test/${id}/`, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then((response) => {
  //           // console.log(response.data);
  //           setType(response.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     };
  //     getProfile();
  //   }, [accessToken]);

  return (
    <div>
      <Wrapper>
        <ResultDescription type={type} />
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
