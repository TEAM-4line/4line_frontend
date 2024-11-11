import React from "react";
import styled from "styled-components";

const TestResult = () => {
  return (
    <div>
      <Wrapper></Wrapper>
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
