import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResultDescription from "../../components/test/ResultDescription";

const TestResult = () => {
  //   const [userType, setUserType] = useState("");

  //   useEffect(() => {
  //     const getProfile = () => {
  //       axios
  //         .get(`${Server_IP}/test/re/`, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then((response) => {
  //           // console.log(response.data);
  //           setInfo(response.data);
  //         })
  //         .catch((error) => {
  //           // console.log(mentorId);
  //           console.log(error);
  //         });
  //     };
  //     getProfile();
  //   }, [accessToken, mentorId]);

  return (
    <div>
      <Wrapper>
        <ResultDescription />
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
  padding: 109px 27px 60px 27px;
`;
