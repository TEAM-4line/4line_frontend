import React from "react";
import styled from "styled-components";

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <ProgressBarContainer>
      <ProgressText>
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>Q{current}</span>
        /{total}
      </ProgressText>
      <ProgressBarWrapper>
        <ProgressFill style={{ width: `${progressPercentage}%` }} />
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 357px;
  margin-top: 20px;
  position: relative;
`;

const ProgressText = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 12px;
  background-color: #e4e5e8;
  border-radius: 10px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--orange);
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;
